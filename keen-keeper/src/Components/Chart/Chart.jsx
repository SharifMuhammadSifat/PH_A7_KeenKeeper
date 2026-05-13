'use client';

import React from 'react';
import { useContext } from 'react';
import { allContext } from '../../Context/Context';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const COLORS = ["#7C3AED", "#1F4D3F", "#34D399"];

const Chart = () => {

  const { timelineData } = useContext(allContext);


  const getChartData = () => {
    const counts = {
      call: 0,
      text: 0,
      video: 0
    };

    timelineData.forEach(item => {
      counts[item.action]++;
    });
    return [
      { name: "Calls", value: counts.call },
      { name: "Texts", value: counts.text },
      { name: "Videos", value: counts.video }
    ];
  };

  const chartData = getChartData();

  return (
    <div className='px-61.25 py-20 bg-[#F8FAFC]'>
      <h1 className='text-[#1F2937] font-bold text-[48px]'>Friendship Analytics</h1>
      
        <div className='bg-white w-full p-4'>
          <h1 className='font-medium text-[20px] text-[#244D3F] '>By Interaction Type</h1>
        <div className='flex justify-around items-center'>
          <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
        </div>
        </div>
      
    </div>
  );
};

export default Chart;
