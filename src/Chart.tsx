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

type Props = {
  data: Array<{ date: StaticRange; distinct_ips: number }>;
};
export default function Chart({ data }: Props) {
  const theme = useTheme();
  console.log({ data });

  return (
    <React.Fragment>
      <Title>Unique visitors</Title>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="distinct_ips" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
