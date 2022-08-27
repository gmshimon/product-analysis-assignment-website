import React, { useEffect, useState } from 'react';
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setData(data))
    },[])
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#8884d8","#82ca9d"];
    return (
        <div>
            <h1 className="text-5xl text-center mt-12">Welcome to my DashBoard</h1>
            <div className="flex justify-evenly items-center mt-40">
                <div>
                    <LineChart width={1000} height={550} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <ReferenceDot />
                        <Line type="monotone" dataKey='sell' stroke="#82ca9d"/>
                    </LineChart>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey='sell' nameKey="month" cx="50%" cy="50%" outerRadius={150} fill="#8884d8"
                        label >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Legend/>
                        <Tooltip/>
                    </PieChart>
                    
                </div>
            </div>
        </div>
    );
};

export default DashBoard;