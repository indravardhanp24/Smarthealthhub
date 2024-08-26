import React from 'react'
import { Header, HeaderHero } from '../../components';

const Reports = () => {
  return (
    <div className='body' >
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Reports"}/>
    <h4>Patients reports</h4>
    <button>Print report</button>
    <button>Save as csv</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Patient name</th>
                <th>Disease</th>
                <th>health provider</th>
                <th>date</th>
                <th>Status (Treated/Pending)</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Patient 1</td>
                    <td>Disease 1</td>
                    <td>Doctor 1</td>
                    <td>23/4/2022</td>
                    <td>Treated</td>
                </tr>
            </tbody>
        </table>
    </div></div>
  )
}

export default Reports;