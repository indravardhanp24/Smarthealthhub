import React from 'react'
import { Header, HeaderHero } from '../../components';

const Prescriptions = () => {
  return (
    <div className='body'>
      <Header/>
      <div className='wrapper'>
      <HeaderHero heading={"Prescription records"}/>
      <table border={1} className='appointments' >
            <thead>
                <th>#</th>
                <th>Disease</th>
                <th>Medicine</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Disease 1</td>
                    <td>Medicine 1</td>
                </tr>
            </tbody>
        </table>
      </div>
      </div>
  )
}

export default Prescriptions;