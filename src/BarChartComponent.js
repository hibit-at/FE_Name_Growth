import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts'; // 変更: バーチャート用のコンポーネントをインポート
const BarChartComponent = ({ name,chartData }) => { // 変更: コンポーネント名をBarChartComponentに変更

  return (
    <BarChart
      width={600}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} /> {/* 変更: Y軸の最小値と最大値を指定 */}
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent; // 変更: コンポーネント名をBarChartComponentに変更
