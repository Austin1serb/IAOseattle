'use client';

import { useEffect, useState } from 'react';

const AirtablePage = () => {
    const [records, setRecords] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM format

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/airtable');
                const result = await response.json();
                if (response.ok) {
                    setRecords(result);
                    const currentMonthRecords = result.filter((record: any) => 
                        record.fields["Incident Date"].startsWith(currentMonth)
                    );
                    setData(currentMonthRecords);
                } else {
                    setError(result.error);
                }
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Airtable Data</h1>
            {error ? <p>Error: {error}</p> : (
                <>
                    <p>Total Incidents This Month: {data.length}</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </>
            )}
        </div>
    );
};

export default AirtablePage;