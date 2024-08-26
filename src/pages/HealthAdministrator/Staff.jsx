import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';

const Staff = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Add staff"}>
            <input placeholder='name...' />
            <input placeholder='occupation...' />
              <button>Add</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Staff"}/>
    <button onClick={()=>setShow(true)}>Add staff member</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>name</th>
                <th>Occupation</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>member 1</td>
                    <td>CEO</td>
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

export default Staff;