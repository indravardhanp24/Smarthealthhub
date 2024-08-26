import React from 'react'
import { Header, HeaderHero } from '../../components';

const Compliance = () => {
  return (
    <div className='body' >
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Manage Compliances"} />
    <button>Add compliance</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Disease</th>
                <th>Description</th>

                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
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

export default Compliance;