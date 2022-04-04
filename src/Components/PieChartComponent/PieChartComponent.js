import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieChartComponent = ({data}) => {
    return (
      <div>
        <h3 className='text-2xl font-semibold mb-4 text-blue-600'> Investment vs Revenue </h3>
        <div width="100%" height="100%">
        <PieChart width={300} height={300} className="mx-auto">
            
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </div>
      </div>
    );
};

export default PieChartComponent;