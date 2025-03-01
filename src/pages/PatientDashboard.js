import React from 'react';
import { useNavigate } from "react-router-dom";
import './patient.css';
const PatientDashboard = () => {
    const navigate = useNavigate();
    const goToDashboard=()=>{
        navigate('/patientdashboard');
    }
    const goToMyProfile=()=>{
        // navigate('/myprofile');
    }
    const goToLogout=()=>{

    }
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Bayer Health</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0">
                                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline" onClick={goToDashboard}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline" onClick={goToMyProfile}>My Profile</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline" onClick={goToLogout}>Logout</span> </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div class="col py-3">
                    <div className='welcome'>
                        welcome, user
                    </div>
                    <div className='padding-10px'>
                        Wellness Goals
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PatientDashboard;