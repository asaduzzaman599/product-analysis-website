import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const PieChartComponent = ({data}) => {
    return (
      <div>
        <h3 className='text-2xl font-semibold mb-4 text-blue-600'> Investment vs Revenue </h3>
        <ResponsiveContainer  className='mx-auto' width="90%" height={300}>
        <PieChart className="mx-auto">
            
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
};

export default PieChartComponent;