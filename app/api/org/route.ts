import { NextRequest, NextResponse } from 'next/server';

// Fetch records from Airtable
async function fetchOrgChartRecords(airtableApiKey: string, baseId: string, tableName: string, offset = '') {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?pageSize=100&offset=${offset}`;

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

// Fetch all records from the "ORG chart" table
async function fetchAllOrgChartRecords(airtableApiKey: string, baseId: string, tableName: string) {
    let allRecords: any[] = [];
    let offset = '';
    let hasMore = true;

    while (hasMore) {
        const data = await fetchOrgChartRecords(airtableApiKey, baseId, tableName, offset);
        allRecords = allRecords.concat(data.records);

        offset = data.offset || '';
        hasMore = !!data.offset;
    }

    return allRecords;
}

// GET API handler for the ORG chart data
export async function GET(req: NextRequest) {
    try {
        const airtableApiKey = process.env.AIRTABLE_API_KEY;
        const baseId = process.env.AIRTABLE_BASE_ID;
        const tableName = process.env.AIRTABLE_TABLE_ORG;

        if (!airtableApiKey || !baseId || !tableName) {
            throw new Error('Missing required environment variables');
        }

        const allRecords = await fetchAllOrgChartRecords(airtableApiKey, baseId, tableName);

        return NextResponse.json(allRecords, {
            headers: {
                'Cache-Control': 's-maxage=3600, stale-while-revalidate',
            },
        });
    } catch (error: any) {
        console.error('API request error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}