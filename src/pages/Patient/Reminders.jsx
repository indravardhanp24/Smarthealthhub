import React, { useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components'

const Courses = () => {
    const [show,setShow] = useState(false);
  return (
    <div className='body'>
        <Header/>
        <div className='wrapper' >
        <HeaderHero heading={"Medical reminders"}/>
        <table border={1} className='courses' >
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>date</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Reminder 1</td>
                    <td>11/20/2023</td>
                    <td>
                        <button onClick={()=>setShow(true)} >Cancel</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <button>Cancel all</button>
        </div>
        <Modal show={show} setShow={setShow} heading={"Edit course"} >
            <input placeholder='course name' />
            <button>Update</button>
        </Modal>
        </div>
  )
}

export default Courses