// src/components/organisms/SalesChart.tsx

'use client';

import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip
} from 'recharts';
import { useState } from 'react';
import { SalesRecord } from '@/types/sales';

const chartTypes = ['bar', 'line', 'pie'] as const;
type ChartType = typeof chartTypes[number];

interface SalesChartProps {
  data: SalesRecord[];
}

const COLORS = ['#3182ce', '#2b6cb0', '#63b3ed'];

export default function SalesChart({ data }: SalesChartProps) {
  const [chartType, setChartType] = useState<ChartType>('bar');

  return (
    <div className="mt-8">
      {/* Chart Type Buttons */}
      <div className="mb-4 flex gap-3">
        {chartTypes.map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-4 py-2 rounded border ${
              chartType === type ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Render Chart Based on Type */}
      {chartType === 'bar' && (
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3182ce" />
        </BarChart>
      )}

      {chartType === 'line' && (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3182ce" />
        </LineChart>
      )}

      {chartType === 'pie' && (
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="year"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}