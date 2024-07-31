import { BarChart, IncidentCount } from './ClientComponents';
import moment from 'moment-timezone';



const IncidentWidget = async () => {
    const baseUrl =`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    const apiUrl = `${baseUrl}/api/airtable`;
  
    console.log('Fetching data from:', apiUrl); // Log the URL being used

    const response = await fetch(apiUrl);
    const result = await response.json();

    const currentMonth = moment().tz('America/Los_Angeles').format('YYYY-MM'); // YYYY-MM format in PST
    const today = moment().tz('America/Los_Angeles').format('YYYY-MM-DD'); // YYYY-MM-DD format in PST

    //console.log(`Current Month: ${currentMonth}, Today: ${today}`); // Logging current month and today for verification

    let error = null;
    let records: any[] = [];
    let incidentTypes: { [key: string]: number } = {};
    let overdosesPrevented = 0;
    let todaysIncidents = 0;

    if (response.ok) {
        //console.log("Fetched data successfully:", result);
        // Filter records for the current month
        const currentMonthRecords = result.filter((record: any) => {
            const incidentDate = record.fields["Incident Date"];
            const belongsToCurrentMonth = incidentDate.startsWith(currentMonth);
            //console.log(`Checking record date: ${incidentDate}, belongs to current month: ${belongsToCurrentMonth}`);
            return belongsToCurrentMonth;
        });

        const typesCount: { [key: string]: number } = {};
        let overdoses = 0;
        let todayCount = 0;

        currentMonthRecords.forEach((record: any) => {
            const type = getShortName(record.fields["Incident Type"]);
            typesCount[type] = (typesCount[type] || 0) + 1;
            if (record.fields["Narcan Administered?"] === "YES") {
                overdoses += 1;
            }
            const incidentDate = record.fields["Incident Date"];
            const isToday = incidentDate === today;
            //console.log(`Record Date: ${incidentDate}, Matches Today: ${isToday}`);
            if (isToday) {
                todayCount += 1;
            }
        });

        records = currentMonthRecords;
        incidentTypes = typesCount;
        overdosesPrevented = overdoses;
        todaysIncidents = todayCount;
    } else {
        error = result.error;
    }

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

    const data = {
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
                    color: 'white', // Change x-axis label text color
                    maxRotation: 45, // Rotate the labels
                    minRotation: 45
                }
            },
            y: {
                ticks: {
                    color: 'white' // Change y-axis label text color
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Change legend text color

                }
            },
            //title: {
            //    display: true,
            //    text: 'Monthly Incident Types',
            //    color: 'white' // Change title text color
            //}
        }
    };

    return (
        <div className="absolute top-[30%] right-8 left- widget-container mx-auto p-2 z-20 backdrop-blur-md max-w-[500px] rounded-lg">
            <div className="stats-container flex justify-around mb-4 w-full">
                <div className="stat b-primary-light">
                    <h2 className="text-md font-bold text-white">Incidents Resolved This Month</h2>
                    {error ? <p>Not Avaliable: {error}</p> : (
                        <IncidentCount totalCount={records.length} todaysCount={todaysIncidents} />
                    )}
                </div>
                <div className="stat">
                    <h2 className="text-md font-bold text-white">Overdoses Prevented</h2>
                    {error ? <p>Not Avaliable: {error}</p> : (
                        <IncidentCount totalCount={overdosesPrevented} color="text-green-500" />
                    )}
                </div>
            </div>
            <div className="chart-container w-full ">
                <BarChart data={data} options={options} />
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