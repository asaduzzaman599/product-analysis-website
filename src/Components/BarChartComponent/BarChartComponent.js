import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-4 text-blue-600'> Investment vs Revenue </h3>

      <div width="100%" height="100%" >
        <BarChart
          width={300}
          height={300}
          className="mx-auto"
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartComponent;