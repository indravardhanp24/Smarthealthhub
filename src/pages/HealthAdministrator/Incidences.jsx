import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';

const Incidences = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Add appointment"}>
            <select>
                <option>----Select patient---</option>
            </select>
            <select>
                <option>----Select health provider---</option>
            </select>
            <input placeholder='incident name...' />
            <input placeholder='description...' />
              <button>Add</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Manage Incidences"}/>
    <button onClick={()=>setShow(true)}>Add incidence</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Patient names</th>
                <th>Health providers</th>
                <th>Incident name</th>
                <th>Date</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <ol>
                            <li>Patient 1</li>
                            <li>Patient 2</li>
                        </ol>
                    </td>
                    <td><ol>
                            <li>Doctor 1</li>
                            <li>Doctor 2</li>
                        </ol>
                    </td>
                    <td>Incident 1</td>
                    <td>4/12/2023</td>
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

export default Incidences;