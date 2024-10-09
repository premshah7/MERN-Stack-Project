import React, { useState } from "react";
import '../css/Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login(){
    const [username , setUsername] = useState('')
    const [pwd , setPwd] = useState('')
    const [role,setRole] = useState('admin')
    const navi = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = () => {
        axios.post('http://localhost:3001/auth/login', {username, pwd:"admin", role})
        .then(res=>{
            if(res.data.login && res.data.role ==='admin'){
                navi('/dashboard')
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2><br />
                <div className="form-grp">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="Enter Username"
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>

                <div className="form-grp">
                    <label htmlFor="password">Password :</label>
                    <input type="password" placeholder="Enter Password"
                        onChange={(e)=> setPwd(e.target.value)}
                    />
                </div>

                <div className="form-grp">
                    <label htmlFor="role">Role :</label>
                    <select name="role" id="role"
                        onChange={(e)=> setRole(e.target.value)}
                    >
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <button className="btn-login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login;