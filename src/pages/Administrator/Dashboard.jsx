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
            <div className='card' >
                <p>Completed Appointments</p>
                <p>7</p>
            </div>
            <div className='card' >
                <p>Pending Appointments</p>
                <p>13</p>
            </div>
        </div>
        <div className='graph' >
        <ResponsiveContainer width={"100%"} aspect={4 / 1}>
            <LineChart data={[{amt:100,name:"A"},{amt:300,name:"C"},{amt:120,name:"B"},{amt:120,name:"G"},{amt:160,name:"F"}]} >
                <Line dataKey={"amt"} />
                <XAxis dataKey={"name"} />
                <YAxis name='Users'/>
            </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width={"100%"} aspect={4 / 1}>
            <BarChart data={[{amt:100,name:"A"},{amt:300,name:"C"},{amt:120,name:"B"},{amt:120,name:"G"},{amt:160,name:"F"}]} >
                <Bar dataKey={"amt"}  />
                <XAxis dataKey={"name"} />
                <YAxis name='Users'/>
            </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard;