import { NextRequest, NextResponse } from 'next/server';

async function fetchRecords(airtableApiKey: string, baseId: string, tableName: string, offset = '') {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?pageSize=100&sort[0][field]=Incident%20Date&sort[0][direction]=desc&offset=${offset}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${airtableApiKey}`,
                
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

async function fetchAllRecordsForCurrentMonth(airtableApiKey: string, baseId: string, tableName: string) {
    let allRecords: any[] = [];
    let offset = '';
    let hasMore = true;

    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM format

    while (hasMore) {
        const data = await fetchRecords(airtableApiKey, baseId, tableName, offset);
        allRecords = allRecords.concat(data.records);

        // Check the last record's "Incident Date" to see if it belongs to the current month
        const lastRecord = data.records[data.records.length - 1];
        const lastIncidentDate = lastRecord.fields["Incident Date"];

        if (!lastIncidentDate.startsWith(currentMonth)) {
            hasMore = false;
        } else {
            offset = data.offset || '';
            hasMore = !!data.offset;
        }
    }

    return allRecords;
}

export async function GET(req: NextRequest) {
    try {
        const airtableApiKey = process.env.AIRTABLE_API_KEY;
        const baseId = process.env.AIRTABLE_BASE_ID;
        const tableName = process.env.AIRTABLE_TABLE_NAME;

        if (!airtableApiKey || !baseId || !tableName) {
            throw new Error('Missing required environment variables');
        }

        const allRecords = await fetchAllRecordsForCurrentMonth(airtableApiKey, baseId, tableName);

        return NextResponse.json(allRecords, {

        });
    } catch (error: any) {
        console.error('API request error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}