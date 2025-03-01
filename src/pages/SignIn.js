import React, { useState } from 'react';
import './signin.css';
import APIService from '../services/APIService';
const SignIn = () => {
    const [email,setEmail]=useState();
    const[pass,setPass]=useState();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await APIService(email,pass);
            // localStorage.setItem("token", res.token);
        }catch(err){
            console.log('error is=>',err)
        }
    }
    return (
        <div className='container-fluid custom-login'>
            <form onSubmit={handleSubmit}>
                <div className='text-center txt'>
                    <span>Login</span></div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} class="form-control"placeholder="Password"/>
                </div>
                <div class="form-group form-check">
                    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
                        {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                </div>
                <span className='text-center'>
                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                </span>
            </form>
        </div>
    )
}
export default SignIn;