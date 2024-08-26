import React from 'react'
import { Header, HeaderHero } from '../../components';

const MedicalHistory = () => {
  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
        <HeaderHero heading={"MedicalHistory"}/>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Patient name</th>
                <th>Medicine name</th>
                <th>Date</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Patient 1</td>
                    <td>Medicine 1</td>
                    <td>3/3/2012</td>
                    <td>
                        <button onClick={()=>setShow(true)} >Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default MedicalHistory;