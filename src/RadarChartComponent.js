import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 40 },
  { name: 'E', value: 50 },
  { name: 'F', value: 60 },
];

const RadarChartComponent = () => {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="名前" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartComponent;
