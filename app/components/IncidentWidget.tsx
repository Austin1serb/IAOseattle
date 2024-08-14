// app/incidents/IncidentWidget.tsx
import React from 'react';
import { BarChart, IncidentCount } from './ChartComponents';
import moment from 'moment-timezone';

const IncidentWidget = async () => {
    // Fetch records from the API route
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/airtable`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store' // Use 'no-store' to fetch fresh data on each request, or 'force-cache' for caching
    });

    if (!response.ok) {
        throw new Error('Failed to fetch incident data');
    }

    const result = await response.json();

    // Get the current month and year
    const currentMonthFormatted = moment().tz('America/Los_Angeles').format('MMMM YYYY');

    // Date and filtering logic

    const currentMonth = moment().tz('America/Los_Angeles').format('YYYY-MM');
    const today = moment().tz('America/Los_Angeles').format('YYYY-MM-DD');

    const currentMonthRecords = result.filter((record: any) =>
        record.fields['Incident Date'] && record.fields['Incident Date'].startsWith(currentMonth)
    );


    const typesCount: { [key: string]: number } = {};
    let overdoses = 0;
    let todayCount = 0;

    currentMonthRecords.forEach((record: any) => {
        const type = getShortName(record.fields['Incident Type']);
        typesCount[type] = (typesCount[type] || 0) + 1;
        if (record.fields['Narcan Administered?'] === 'YES') {
            overdoses += 1;
        }
        if (record.fields['Incident Date'] === today) {
            todayCount += 1;
        }
    });

    const colorMapping: { [key: string]: { background: string; border: string } } = {
        'Suspicious Activity': { background: '#282F48', border: '#0F75E0' },
        Theft: { background: '#102A72', border: '#0F75E0' },
        'Disorderly Conduct': { background: '#0F75E0', border: '#102a71' },
        Medical: { background: '#4fb1e4', border: '#0F75E0' },
        Trespassing: { background: '#282F48', border: '#0F75E0' },
        Vandalism: { background: '#102A72', border: '#0F75E0' },
        'Use Of Protection': { background: '#0F75E0', border: '#102a71' },
        'Property Damage': { background: '#4fb1e4', border: '#0F75E0' },
        Arson: { background: '#282F48', border: '#0F75E0' },
        Assault: { background: '#0F75E0', border: '#102a71' },
    };

    const chartData = {
        labels: Object.keys(typesCount),
        datasets: [
            {
                label: 'Monthly Incident Types',
                data: Object.values(typesCount) as number[],
                backgroundColor: Object.keys(typesCount).map(
                    (key) => colorMapping[key]?.background || 'rgba(0, 0, 0, 0.2)'
                ),
                borderColor: Object.keys(typesCount).map(
                    (key) => colorMapping[key]?.border || 'rgba(0, 0, 0, 1)'
                ),
                borderWidth: 1,
            },
        ],
    };

    console.log("Mocked Data:", result);


    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    maxRotation: 45,
                    minRotation: 45,
                },
            },
            y: {
                ticks: {
                    color: 'white',
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            },
        },
    };

    return (
        <>
            <h1 className="text-xl md:text-2xl font-bold text-center mb-4 text-white">
                {currentMonthFormatted} Monthly Overview
            </h1>

            <div className="widget-container mx-auto p-4 z-20 backdrop-blur-md min-w-[500px] rounded-lg">

                <div className="stats-container flex justify-around mb-4 w-full">
                    <div className="stat b-primary-light">
                        <h2 className="text-md font-bold text-white">Incidents Resolved</h2>
                        <IncidentCount totalCount={currentMonthRecords.length} todaysCount={todayCount} />
                    </div>
                    <div className="stat">
                        <h2 className="text-md font-bold text-white">Overdoses Prevented</h2>
                        <IncidentCount totalCount={overdoses === 0 ? 1 : overdoses} color="text-green-500" />
                    </div>
                </div>
                <div className="chart-container w-full ">
                    <BarChart data={chartData} options={options} />
                </div>
            </div>
        </>
    );
};

const getShortName = (name: string) => {
    const nameMapping: { [key: string]: string } = {
        'Suspicious Activity (ISR)': 'Suspicious Activity',
        'Loss Prevention / Retail Theft': 'Theft',
        'Disruptive/Disorderly Conduct': 'Disorderly Conduct',
        'Injury / Medical': 'Medical',
        'Tresspassing / CoE': 'Trespassing',
        'Vandalism / Graffiti': 'Vandalism',
        'Use Of Defensive Force By IAO': 'Use Of Protection',
        'Property Damage, Less than $5K': 'Property Damage',
        'Fire / Arson': 'Arson',
        "Maintenance Emergency (Broken Water Main / Gas Leak / Electrical Hazard)": 'Maintenance Emergency',

    };
    return nameMapping[name] || name;
};

export default IncidentWidget;