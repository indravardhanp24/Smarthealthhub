import React, { useContext, useState } from 'react'
import { Header, HeaderHero } from '../../components';
import { ThemeContext } from '../../contexts';
import "./index.css";

const modules = [
  "Patients/Consumers",
  "Health providers",
  "Health admisnstrators",
  "Pharmacists"
];
const Settings = () => {
  const [appTheme,setAppTheme] = useContext(ThemeContext);
  const [checked,setChecked] = useState(true);
  return (
    <div className='body' >
    <Header/>
    <div className='wrapper' >
        <HeaderHero heading={"Settings"}/>
        <h4>Adjust System settings</h4>
        <div>Change System theme </div>
        <button className='setting' onClick={()=>setAppTheme(appTheme=="light"?"dark":"light")} >{appTheme} theme</button>
        <br></br>
        <HeaderHero heading={"Disable/Enable system modules"}/>
        <div className='modules'>
            {
              modules.map((item,index)=>{
                return(
                  <div className='module' key={index}>
                    <input type='checkbox'  onChange={()=>setChecked(!checked)}/>
                    <label>{item}</label>
                  </div>
                )
              })
            }
        </div>
    </div>
    </div>
  )
}

export default Settings;