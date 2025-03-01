import React from 'react';
import './header.css';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    const url = window.location.pathname;
    console.log(url);
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
                {
                    url == '/' ? <span className='heading signin-btn' onClick={goToSignIn}>SignIn</span> : null
                }
            </div>
        </div>
    )
}
export default Header;