import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { name: 'HP', value: 10 },
  { name: '力', value: 20 },
  { name: '魔力', value: 30 },
  { name: '速さ', value: 40 },
  { name: '技', value: 50 },
  { name: '幸運', value: 30 },
  { name: '防御', value: 30 },
  { name: '魔防', value: 40 },
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
