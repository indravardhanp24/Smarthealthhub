import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';

const HealthProviders = () => {
    const [show,setShow] = useState(false);
  return (
    <div className='body' >
    <Modal show={show} setShow={setShow} heading={"Add health provider"}>
            <input placeholder='name...' />
            <button>Add</button>
    </Modal>

    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Health providers"}/>
    <button onClick={()=>setShow(true)} >Add health provider</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Date added</th>

                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Doctor 1</td>
                    <td>11/12/2024</td>
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

export default HealthProviders;