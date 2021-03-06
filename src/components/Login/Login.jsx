import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'
import login_img from '../pictures/login-img.png'
import img_overlay from '../pictures/login-overlay.jpg'
import logo from '../pictures/ig_logo.png'

import './Login.css'

function Login({toggleLink}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(response =>{
            console.log(response)
            setEmail('')
            setPassword('')
        })
        .catch(err =>{
            setError(err.message)
        })
        
    }

    return (

        <div className="login__container">
            <div className="login_img_box">
            <img src={login_img} alt="..." className="login_img"/>
            <img src={img_overlay} alt="..." className="img_overlay"/>
            </div>
        <div className="sign-up login">

            <div className="signUp_container login">
            <img src={logo} alt='instagram logo' className="ig_logo_auth" />
            <form onSubmit={handleSubmit} className="signUp_form">

                <input type="email"
                 className="signUp_input"
                value={email}
                placeholder='email'
                onChange={e => setEmail(e.target.value)}
                 />

                <input 
                type="password" 
                className="signUp_input"
                value={password}
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
                />

            <button  onClick={handleSubmit} className="signUp_btn">Login In</button>
            </form>

            </div>

            <div className="signUp_link">
                 don't have an account? <Link to='/signup' className='boldLink'>Sign up </Link>
            </div>
            <p className="error">{error}</p>
            </div>
        </div>
    )
}

export default Login
