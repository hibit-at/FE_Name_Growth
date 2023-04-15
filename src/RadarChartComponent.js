import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarChartComponent = ({ name, chartData }) => { // 変更: nameをpropsとして受け取る

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={chartData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis domain={[0,100]}/>
      <Radar name={name} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartComponent;
