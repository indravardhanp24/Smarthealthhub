import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';

const MedicineDispensation = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Dispense medicine"}>
            <select>
                <option>----Select health provider---</option>
            </select>
            <label>date</label>
            <input type='date' placeholder='disease...' />
            <input placeholder='description...' />
            <button>Dispense</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Medication dispensation records"}/>
    <button onClick={()=>setShow(true)}>Dispense medicine</button>
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

export default MedicineDispensation