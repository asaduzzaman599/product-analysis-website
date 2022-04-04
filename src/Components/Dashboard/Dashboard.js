import React, { useEffect, useState } from 'react';
import AreaChartComponent from '../AreaChartComponent/AreaChartComponent';
import LineChartComponent from '../LineChartComponent/LineChartComponent';

const Dashboard = () => {
    const [chartData,setChartData] = useState([]);

    useEffect(()=>{
        fetch('fakedata/data.json')
        .then(res=> res.json())
        .then(data=> setChartData(data))
    },[])
    return (
        <div>
            <h4>Dashboard</h4>
            <div>
                 <LineChartComponent data={chartData}></LineChartComponent>
                 <AreaChartComponent data={chartData}></AreaChartComponent>

            </div>
        </div>
    );
};

export default Dashboard;