import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <div>
      <h3 className='text-2xl font-semibold mb-4 text-blue-600'> Investment vs Revenue </h3>


      <div width="100%" height="100%" >
        <AreaChart
        className="mx-auto"
          width={300}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#B6FFCE" fill="#B6FFCE" />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaChartComponent;