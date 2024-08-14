// FETCH ORG CHART
// Fetch records from Airtable
async function fetchOrgChartRecords(
    airtableApiKey: string,
    baseId: string,
    tableName: string,
    offset = ''
) {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?pageSize=100&offset=${offset}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${airtableApiKey}`,
                'Cache-Control': 'public, max-age=3000', // Cache for 5 minutes
            },
            next: { revalidate: 300 }, // Next.js specific revalidation setting
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
export async function fetchAllOrgChartRecords(
    airtableApiKey: string,
    baseId: string,
    tableName: string
) {
    let allRecords: any[] = [];
    let offset = '';
    let hasMore = true;

    while (hasMore) {
        const data = await fetchOrgChartRecords(
            airtableApiKey,
            baseId,
            tableName,
            offset
        );
        allRecords = allRecords.concat(data.records);

        offset = data.offset || '';
        hasMore = !!data.offset;
    }

    return allRecords;
}

// FETCH INCIDENT RECORD
async function fetchRecords(
    airtableApiKey: string,
    baseId: string,
    tableName: string,
    offset = ''
) {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?pageSize=100&sort[0][field]=Incident%20Date&sort[0][direction]=desc&offset=${offset}`;
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${airtableApiKey}`,
                'Cache-Control': 'public, max-age=30000', // Cache for 5 minutes
            },
            next: { revalidate: 300 }, // Next.js specific revalidation setting
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

export async function fetchAllRecordsForCurrentMonth(
    airtableApiKey: string,
    baseId: string,
    tableName: string
) {
    let allRecords: any[] = [];
    let offset = '';
    let hasMore = true;

    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM format

    while (hasMore) {
        const data = await fetchRecords(airtableApiKey, baseId, tableName, offset);
        allRecords = allRecords.concat(data.records);

        // Check the last record's "Incident Date" to see if it belongs to the current month
        const lastRecord = data.records[data.records.length - 1];
        const lastIncidentDate = lastRecord.fields['Incident Date'];

        if (!lastIncidentDate.startsWith(currentMonth)) {
            hasMore = false;
        } else {
            offset = data.offset || '';
            hasMore = !!data.offset;
        }
    }

    return allRecords;
}