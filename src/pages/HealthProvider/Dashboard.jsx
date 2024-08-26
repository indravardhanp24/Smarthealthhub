import React from 'react'
import { Header, HeaderHero } from '../../components';
import "./index.css";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
        <HeaderHero heading={"Dashboard"}/>
        <div className='cards' >
            <div className='card' >
                <p>Patients</p>
                <p>200+</p>
            </div>
            <div className='card' >
                <p>Users</p>
                <p>20</p>
            </div>
            <div className='card' >
                <p>Appointments</p>
                <p>50</p>
            </div>
            <div className='card' >
                <p>Facilities</p>
                <p>5</p>
            </div>
        </div>

        <ResponsiveContainer width={"100%"} aspect={4 / 1}>
            <LineChart data={[{amt:100,name:"A"},{amt:300,name:"C"},{amt:120,name:"B"},{amt:120,name:"B"},{amt:160,name:"F"}]} >
                <Line dataKey={"amt"} />
                <XAxis dataKey={"name"} />
                <YAxis name='Users' />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Dashboard;