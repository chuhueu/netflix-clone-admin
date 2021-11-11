import "./chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BChart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Bar dataKey={dataKey} fill="#0D7E80"/>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
