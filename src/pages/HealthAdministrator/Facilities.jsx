import React, { useState } from 'react'
import { Header, HeaderHero } from '../../components';

const Facilities = () => {
    const [show,setShow] = useState(false);
    return (
      <div className='body' >
      <Modal show={show} setShow={setShow} heading={"Add Facility"}>
              <input placeholder='name...' />
              <button>Add</button>
      </Modal>
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Facilities"}/>
    <button onClick={()=>setShow(true)} >Add facility</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Facility name</th>
                <th>Region</th>
                <th>Number of users</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Facility 1</td>
                    <td>Main</td>
                    <td>12</td>
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

export default Facilities;