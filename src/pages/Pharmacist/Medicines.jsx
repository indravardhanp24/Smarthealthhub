import React from 'react'
import { Header, HeaderHero } from '../../components';

const Medicines = () => {
  return (
    <div className='body' >
    <Header/>
    <div className='wrapper' >
    <HeaderHero heading={"Medicines"}/>
    <button>Add medicine</button>
            <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>name</th>
                <th>Description</th>

                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Medicine 1</td>
                    <td>Medicine 1 description</td>
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

export default Medicines;