import React from 'react';
import './header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goToSignIn=()=>{
        navigate("/signin");
    }
    const GoToHome=()=>{
        navigate("/");
    }
    return (
        <div>
            <div className="custom-header">
                <span className='heading' onClick={GoToHome}>Healthcare Portal</span>
                <span className='heading signin-btn' onClick={goToSignIn}>SignIn</span>
            </div>
        </div>
    )
}
export default Header;