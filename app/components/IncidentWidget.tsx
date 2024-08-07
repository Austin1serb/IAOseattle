"use client"

import { useEffect, useState } from 'react';
import { BarChart, IncidentCount } from './ClientComponents';
import moment from 'moment-timezone';

const IncidentWidget = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [incidentTypes, setIncidentTypes] = useState({});
    const [records, setRecords] = useState([]);
    const [overdosesPrevented, setOverdosesPrevented] = useState(1);
    const [todaysIncidents, setTodaysIncidents] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_URL || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000');
                const apiUrl = `${baseUrl}/api/airtable`;
                console.log('Fetching data from:', apiUrl);

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        const errorData = await response.json();
                        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
                    } else {
                        const errorText = await response.text();
                        console.error('Unexpected non-JSON response:', errorText);
                        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
                    }
                }

                const result = await response.json();
                setData(result);

                const currentMonth = moment().tz('America/Los_Angeles').format('YYYY-MM');
                const today = moment().tz('America/Los_Angeles').format('YYYY-MM-DD');

                const currentMonthRecords = result.filter((record: any) => record.fields["Incident Date"].startsWith(currentMonth));

                const typesCount: { [key: string]: number } = {};
                let overdoses = 0;
                let todayCount = 0;

                currentMonthRecords.forEach((record: any) => {
                    const type = getShortName(record.fields["Incident Type"]);
                    typesCount[type] = (typesCount[type] || 0) + 1;
                    if (record.fields["Narcan Administered?"] === "YES") {
                        overdoses += 1;
                    }
                    if (record.fields["Incident Date"] === today) {
                        todayCount += 1;
                    }
                });

                setRecords(currentMonthRecords);
                setIncidentTypes(typesCount);
                setOverdosesPrevented(overdoses);
                setTodaysIncidents(todayCount);
            } catch (err: any | unknown) {
                console.error('Failed to fetch data:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const colorMapping: { [key: string]: { background: string, border: string } } = {
        "Suspicious Activity": { background: '#282F48', border: '#0F75E0' },
        "Theft": { background: '#102A72', border: '#0F75E0' },
        "Disorderly Conduct": { background: '#0F75E0', border: '#102a71' },
        "Medical": { background: '#4fb1e4', border: '#0F75E0' },
        "Trespassing": { background: '#282F48', border: '#0F75E0' },
        "Vandalism": { background: '#102A72', border: '#0F75E0' },
        "Use Of Protection": { background: '#0F75E0', border: '#102a71' },
        "Property Damage": { background: '#4fb1e4', border: '#0F75E0' },
        "Arson": { background: '#282F48', border: '#0F75E0' },
        "Assault": { background: '#0F75E0', border: '#102a71' }
    };

    const chartData = {
        labels: Object.keys(incidentTypes),
        datasets: [
            {
                label: 'Monthly Incident Types',
                data: Object.values(incidentTypes) as (number | null)[],
                backgroundColor: Object.keys(incidentTypes).map(key => colorMapping[key]?.background || 'rgba(0, 0, 0, 0.2)'),
                borderColor: Object.keys(incidentTypes).map(key => colorMapping[key]?.border || 'rgba(0, 0, 0, 1)'),
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    maxRotation: 45,
                    minRotation: 45
                }
            },
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    };

    return (
        <div className="widget-container mx-auto p-4 z-20 backdrop-blur-md max-w-[500px] rounded-lg">
            <div className="stats-container flex justify-around mb-4 w-full">
                <div className="stat b-primary-light">
                    <h2 className="text-md font-bold text-white">Incidents Resolved This Month</h2>
                    {error ? <p>Not Available: {error}</p> : (
                        <IncidentCount totalCount={records.length} todaysCount={todaysIncidents} />
                    )}
                </div>
                <div className="stat">
                    <h2 className="text-md font-bold text-white">Overdoses Prevented</h2>
                    {error ? <p>Not Available: {error}</p> : (
                        <IncidentCount totalCount={overdosesPrevented === 0 ? 1 : overdosesPrevented} color="text-green-500" />
                    )}
                </div>
            </div>
            <div className="chart-container w-full ">
                <BarChart data={chartData} options={options} />
            </div>
        </div>
    );
};

const getShortName = (name: string) => {
    const nameMapping: { [key: string]: string } = {
        "Suspicious Activity (ISR)": "Suspicious Activity",
        "Loss Prevention / Retail Theft": "Theft",
        "Disruptive/Disorderly Conduct": "Disorderly Conduct",
        "Injury / Medical": "Medical",
        "Tresspassing / CoE": "Trespassing",
        "Vandalism / Graffiti": "Vandalism",
        "Use Of Defensive Force By IAO": 'Use Of Protection',
        "Property Damage, Less than $5K": "Property Damage",
        "Fire / Arson": "Arson"
    };
    return nameMapping[name] || name;
};

export default IncidentWidget;