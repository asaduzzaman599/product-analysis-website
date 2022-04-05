import React, { useEffect, useState } from 'react';
import AreaChartComponent from '../AreaChartComponent/AreaChartComponent';
import BarChartComponent from '../BarChartComponent/BarChartComponent';
import LineChartComponent from '../LineChartComponent/LineChartComponent';
import PieChartComponent from '../PieChartComponent/PieChartComponent';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('fakedata/data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <div>
            <div className=' w-4/5 mx-auto grid sm:grid-cols-2 gap-6  mt-10'>
                <LineChartComponent data={chartData}></LineChartComponent>
                <AreaChartComponent data={chartData}></AreaChartComponent>
                <BarChartComponent data={chartData}></BarChartComponent>
                <PieChartComponent data={chartData}></PieChartComponent >

            </div>
        </div>
    );
};

export default Dashboard;