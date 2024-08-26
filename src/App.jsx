import React, { useState } from "react";
import { AboutPage, Admin, Auth, ChatPage, ContactPage, ForumChatPage, 
  HomePage, ProfilePage, ServicesPage, Patient, Pharmacist, HealthAdministrator, HealthProvider, Blog, BlogDetails } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, UserContext } from "./contexts";

// Here we import the contexts that will be available throughout our app

function App() {
  //Creating a list of routes fo individual user 
  const users = [
    {
      name:"patient",
      routes:[
        {name:"records",component:Patient.Records},
        {name:"check-symptoms",component:Patient.Symptoms},
        {name:"prescriptions",component:Patient.Prescriptions},
        {name:"reminders",component:Patient.Reminders},
        {name:"appointments",component:Patient.Appointments},
        {name:"profile",component:ProfilePage},
        {name:"chat",component:ChatPage},
        {name:"forum",component:ForumChatPage},
      ]
    },
    {
      name:"health-provider",
      routes:[
        {name:"dashboard",component:HealthProvider.Dashboard},
        {name:"appointments",component:HealthProvider.Appointments},
        {name:"e-prescriptions",component:HealthProvider.Eprescriptions},
        {name:"records",component:HealthProvider.Records},
        {name:"profile",component:ProfilePage},
        {name:"chat",component:ChatPage},
        {name:"forum",component:ForumChatPage},
      ]
    },
    {
      name:"administrator",
      routes:[
        {name:"dashboard",component:Admin.Dashboard},
        {name:"users",component:Admin.Users},
        {name:"reports",component:Admin.Reports},
        {name:"health-providers",component:Admin.HealthProviders},
        {name:"settings",component:Admin.Settings},
        {name:"profile",component:ProfilePage},
        {name:"chat",component:ChatPage},
        {name:"forum",component:ForumChatPage},
      ]
    },
    {
      name:"pharmacist",
      routes:[
        {name:"medicines",component:Pharmacist.Medicines},
        {name:"medication-history",component:Pharmacist.MedicalHistory},
        {name:"dispensation",component:Pharmacist.MedicineDispensation},
        {name:"profile",component:ProfilePage},
        {name:"chat",component:ChatPage},
        {name:"forum",component:ForumChatPage},
      ]
    },
    {
      name:"health-administrator",
      routes:[
        {name:"facilities",component:HealthAdministrator.Facilities},
        {name:"staff",component:HealthAdministrator.Staff},
        {name:"compliance",component:HealthAdministrator.Compliance},
        {name:"Incidences",component:HealthAdministrator.Incidences},
        {name:"profile",component:ProfilePage},
        {name:"chat",component:ChatPage},
        {name:"forum",component:ForumChatPage},
      ]
    },

  ];

  const [typeOfUser,setTypeOfUser] = useState(null); 
  const [appTheme,setAppTheme] = useState("light");
  //
  return (
    <div >
      <ThemeContext.Provider value={[appTheme,setAppTheme]}>
        <div style={{
          backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
          height:"100vh",
          color:`${appTheme=="light"?"#000000":"#ffffff"}`,
          transition:"all .5s ease-in-out",
        }} >
        <UserContext.Provider value={[typeOfUser,setTypeOfUser]} >
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={"/login"} element={<Auth.LoginPage/>}/>
            <Route path={"/register"} element={<Auth.RegistrationPage/>}/>
            <Route path={"/forgot-password"} element={<Auth.ForgotPasswordPage/>}/>
            <Route path={"/contact-us"} element={<ContactPage/>}/>
            <Route path={"/about-us"} element={<AboutPage/>}/>
            <Route path={"/services"} element={<ServicesPage/>}/>
            <Route path={"/blog"} element={<Blog />} />
            <Route path={"/blog/:id"} element={<BlogDetails/>}/>

            {
              users.map((user,index)=>{
                return (
                  <Route path={`/${user.name}`} key={index} >
                    {
                      user.routes.map((route,i)=>{
                        return <Route path={route.name} Component={route.component} key={i} />
                      })
                    }
                  </Route>
                )
              })
            }

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      
        </div>
        </ThemeContext.Provider>

    
    </div>
  )
}

export default App
