import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

import Title from "./Title";

const data = [
  { name: "01.01.2021", pv: 10 },
  { name: "02.01.2021", pv: 15 },
  { name: "03.01.2021", pv: 2 },
  { name: "04.01.2021", pv: 8 },
  { name: "05.01.2021", pv: 4 },

  { name: "06.01.2021", pv: 10 },
  { name: "07.01.2021", pv: 15 },
  { name: "08.01.2021", pv: 2 },
  { name: "09.01.2021", pv: 8 },
  { name: "10.01.2021", pv: 4 },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Unique visitors</Title>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="pv" fill="#8884d8" barSize={30} />
        </BarChart>
        {/* <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart> */}
      </ResponsiveContainer>
    </React.Fragment>
  );
}
