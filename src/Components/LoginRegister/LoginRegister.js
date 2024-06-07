import React, { useState } from 'react'
import "./LoginRegister.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; //importante to para makapagchange ng route or pages tas lalagay sa button






const LoginRegister = () => {

    const navigate = useNavigate()

    const [action, setAction] = useState('');
    const registerLink = () => {
        setAction(`active`);
    };

  
    const loginLink = () => {
    setAction('');
    };


    return (
        
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text"
                            placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password"
                            placeholder='password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    
                    <button onClick={() => navigate(`Home`)}>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register now</a></p>

                    </div>



                    


                </form>
            </div>


            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text"
                            placeholder='Username' required />
                        <FaEnvelope className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="email"
                            placeholder='Email' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password"
                            placeholder='password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>

                    </div>

                    <button type="submit">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default LoginRegister
