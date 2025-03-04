import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Header  from './Header';
import PatientDashboard from '../pages/PatientDashboard';
import MyProfile from '../pages/MyProfile';
const Router = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/patientdashboard' element={<PatientDashboard/>} />
                    <Route path='/myprofile' element={<MyProfile/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;