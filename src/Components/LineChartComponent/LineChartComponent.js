import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const LineChartComponent = ({ data }) => {
  return (
    <div className=''>
      <h3 className='text-2xl font-semibold mb-4 text-blue-600'> MONTH WISE SEll</h3>
      <ResponsiveContainer  className='mx-auto' width="90%" height={300}>
        <LineChart
          className="mx-auto"
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#39AEA9" activeDot={{ r: 8 }} />
          {/*  <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;