// app/incidents/IncidentWidget.tsx
import React from "react";
import { BarChart, IncidentCount } from "./ChartComponents";
import moment from "moment-timezone";
import { AirtableResponse } from "./IncidentComponent";

const IncidentWidget: React.FC = async () => {
  // Fetch records from the API route
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/airtable`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch incident data");
  }
  const result: AirtableResponse = await response.json();

  // Get the current month and year
  const currentMonthFormatted = moment()
    .tz("America/Los_Angeles")
    .format("MMMM YYYY");
  const currentMonth = moment().tz("America/Los_Angeles").format("YYYY-MM");
  const today = moment().tz("America/Los_Angeles").format("YYYY-MM-DD");

  // Filter records for the current month
  const currentMonthRecords = result.filter((record: any) =>
    record?.fields["Incident Date"]?.startsWith(currentMonth)
  );

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

  // Get the top 8 incident types
  const sortedTypes = Object.entries(typesCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  // Shuffle the top 8 incident types randomly
  const shuffledTypes = sortedTypes.sort(() => Math.random() - 0.5);

  const colorMapping: {
    [key: string]: { background: string; border: string };
  } = {
    "Suspicious Activity": { background: "#0F75E0", border: "#0D5CA0" }, // Primary Blue
    Theft: { background: "#6E44E2", border: "#732D91" }, // Purple
    "Disorderly Conduct": { background: "#0F75E0", border: "#0D5CA0" }, // Primary Blue
    Medical: { background: "#2FE7A6", border: "#0F75E0" }, // Teal
    Trespassing: { background: "#6E44E2", border: "#732D91" }, // Purple
    Vandalism: { background: "#2FE7A6", border: "#0F75E0" }, // Teal
    "Use Of Protection": { background: "#0F75E0", border: "#0D5CA0" }, // Primary Blue
    "Property Damage": { background: "#6E44E2", border: "#732D91" }, // Purple
    Arson: { background: "#2FE7A6", border: "#0F75E0" }, // Teal
    Assault: { background: "#0F75E0", border: "#0D5CA0" }, // Primary Blue
  };

  const chartData = {
    labels: shuffledTypes.map(([key]) => key),
    datasets: [
      {
        label: "",
        data: shuffledTypes.map(([, value]) => value),
        backgroundColor: shuffledTypes.map(
          ([key]) => colorMapping[key]?.background || "#2FE7A6"
        ),
        borderColor: shuffledTypes.map(
          ([key]) => colorMapping[key]?.border || "#0F75E0"
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-96 sm:[300px] md:w-[550px] lg:w-[600px]">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-4 text-white text-nowrap">
        {currentMonthFormatted} Monthly Overview
      </h1>

      <div className="widget-container relative mx-auto p-4 z-20 backdrop-blur-md h-full w-full rounded-lg">
        <div className="-mb-6">
          <div className="stats-container flex justify-around mb-4 w-full">
            <div className="stat b-primary-light">
              <h2 className="text-md font-bold text-white">
                Incidents Resolved
              </h2>
              <IncidentCount
                totalCount={currentMonthRecords.length}
                todaysCount={todayCount}
              />
            </div>
            <div className={`stat ${overdoses > 0 && "hidden"}`}>
              <h2 className="text-md font-bold text-white">
                Overdoses Prevented
              </h2>
              <IncidentCount
                totalCount={overdoses === 0 ? 1 : overdoses}
                color="text-green-500"
              />
            </div>
          </div>
        </div>
        <div className="chart-container w-full h-full flex items-center justify-center">
          <BarChart data={chartData} options={options} />
        </div>
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
    "Use Of Defensive Force By IAO": "Use Of Protection",
    "Property Damage, Less than $5K": "Property Damage",
    "Fire / Arson": "Arson",
    "Maintenance Emergency (Broken Water Main / Gas Leak / Electrical Hazard)":
      "Maintenance",
  };
  return nameMapping[name] || name;
};

export default IncidentWidget;
