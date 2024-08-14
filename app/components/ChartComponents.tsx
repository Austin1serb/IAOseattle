'use client';

import CountUp from 'react-countup';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';

interface IncidentCountProps {
    totalCount: number;
    todaysCount?: number;
    color?: string;
}

export const IncidentCount: React.FC<IncidentCountProps> = ({ totalCount, todaysCount = 0, color = "text-blue-500" }) => {
    return (
        <div>
            <CountUp end={totalCount} duration={2} className={`text-xl font-bold ${color}`} />
            {todaysCount > 0 && (
                <span className="text-red-500 ml-2 z-10">+{todaysCount} (today)</span>
            )}
        </div>
    );
};

interface BarChartProps {
    data: ChartData<'bar'>;
    options: ChartOptions<'bar'>;
}

export const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
    return <Bar data={data} options={options} />;
};