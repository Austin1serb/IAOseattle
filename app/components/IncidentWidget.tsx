import { BarChart, IncidentCount } from './ClientComponents';
import moment from 'moment-timezone';

const IncidentWidget = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/airtable`);
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
        "Suspicious Activity": { background: '#33A8A5', border: '#1c8b85' },
        "Theft": { background: '#84cccb', border: '#33A8A5' },
        "Disorderly Conduct": { background: '#3371A8', border: '#102a71' },
        "Medical": { background: '#4fb1e4', border: '#3371A8' },
        "Trespassing": { background: '#33A8A5', border: '#1c8b85' },
        "Vandalism": { background: '#84cccb', border: '#33A8A5' },
        "Use Of Protection": { background: '#3371A8', border: '#102a71' },
        "Property Damage": { background: '#4fb1e4', border: '#3371A8' },
        "Arson": { background: '#33A8A5', border: '#1c8b85' },
        "Assault": { background: '#3371A8', border: '#102a71' }
    };

    const data = {
        labels: Object.keys(incidentTypes),
        datasets: [
            {
                label: 'Incident Types',
                data: Object.values(incidentTypes) as (number | null)[],
                backgroundColor: Object.keys(incidentTypes).map(key => colorMapping[key]?.background || 'rgba(0, 0, 0, 0.2)'),
                borderColor: Object.keys(incidentTypes).map(key => colorMapping[key]?.border || 'rgba(0, 0, 0, 1)'),
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="widget-container mx-auto p-4 z-20 bg-white border-gray-250 border-[1px] ml-8">
            <div className="stats-container flex justify-around mb-4">
                <div className="stat bg-primary-light">
                    <h2 className="text-xl font-bold">Total Incidents This Month</h2>
                    {error ? <p>Error: {error}</p> : (
                        <IncidentCount totalCount={records.length} todaysCount={todaysIncidents} />
                    )}
                </div>
                <div className="stat bg-secondary-dark">
                    <h2 className="text-xl font-bold text-white">Overdoses Prevented</h2>
                    {error ? <p>Error: {error}</p> : (
                        <IncidentCount totalCount={overdosesPrevented} color="text-green-500" />
                    )}
                </div>
            </div>
            <div className="chart-container ">
                <h2 className="text-xl font-bold text-center">Incident Types</h2>
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