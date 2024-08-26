import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components'

const Users = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Add health provider"}>
              <input placeholder='name...' />
              <select>
                <option>--- Select role---</option>
              </select>
              <button>Add</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Users"}/>
    <button onClick={()=>setShow(true)} >Add User</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Date added</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>User 1</td>
                    <td>Patient</td>
                    <td>11/12/2012</td>
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

export default Users