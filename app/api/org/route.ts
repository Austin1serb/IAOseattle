import { NextRequest, NextResponse } from "next/server";

// Fetch records from Airtable
async function fetchOrgChartRecords(airtableApiKey: string, baseId: string, tableName: string, offset = "") {
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
		console.error("Fetch error:", error);
		throw error;
	}
}

// Fetch all records from the "ORG chart" table
async function fetchAllOrgChartRecords(airtableApiKey: string, baseId: string, tableName: string) {
	let allRecords: any[] = [];
	let offset = "";
	let hasMore = true;

	while (hasMore) {
		const data = await fetchOrgChartRecords(airtableApiKey, baseId, tableName, offset);
		allRecords = allRecords.concat(data.records);

		offset = data.offset || "";
		hasMore = !!data.offset;
	}

	return allRecords;
}

// GET API handler for the ORG chart data
export async function GET(p0: string, p1: { cache: string }, req: NextRequest) {
	try {
		const airtableApiKey = process.env.AIRTABLE_API_KEY;
		const baseId = process.env.AIRTABLE_BASE_ID;
		const tableName = process.env.AIRTABLE_TABLE_ORG;

		if (!airtableApiKey || !baseId || !tableName) {
			console.warn("Missing Airtable environment variables, returning empty data");
			return NextResponse.json([], {
				headers: {
					"Cache-Control": "s-maxage=3600, stale-while-revalidate",
				},
			});
		}

		const allRecords = await fetchAllOrgChartRecords(airtableApiKey, baseId, tableName);

		return NextResponse.json(allRecords, {
			headers: {
				"Cache-Control": "s-maxage=3600, stale-while-revalidate",
			},
		});
	} catch (error: any) {
		console.error("API request error:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

//FETCH INCIDENTDATA
async function fetchRecords(airtableApiKey: string, baseId: string, tableName: string, offset = "") {
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
		console.error("Fetch error:", error);
		throw error;
	}
}

async function fetchAllRecordsForCurrentMonth(airtableApiKey: string, baseId: string, tableName: string) {
	let allRecords: any[] = [];
	let offset = "";
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
			offset = data.offset || "";
			hasMore = !!data.offset;
		}
	}

	return allRecords;
}
