import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';

const Eprescriptions = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Prescribe medicine"}>
            <select>
                <option>----Select patient---</option>
            </select>
            <select>
                <option>----Select health provider---</option>
            </select>
            <input placeholder='disease...' />
            <input placeholder='disease description...' />
              <button>Add</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"E-prescriptions"}/>
    <button onClick={()=>setShow(true)}>Prescribe medicine</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Patient name</th>
                <th>Health provider</th>
                <th>Medicine</th>
                <th>Disease</th>
                <th>Description</th>

                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Patient 1</td>
                    <td>Doctor 1</td>
                    <td>Medicine 1</td>
                    <td>Disease 1</td>
                    <td>Disease description</td>
                    <td>
                        <button onClick={()=>setShow(true)} >Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div></div>
  )
}

export default Eprescriptions