import React from 'react'
import { Header, HeaderHero } from '../../components';

const Records = () => {
  return (
    <div className='body' >
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Health Records"} />
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Patient name</th>
                <th>Disease</th>
                <th>Description</th>
                <th>date</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Patient 1</td>
                    <td>Disease 1</td>
                    <td>Disease 1 description</td>
                    <td>12/12/2020</td>
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

export default Records;