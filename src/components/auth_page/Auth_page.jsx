import React,{useState} from 'react'
import Login from '../Login/Login'
import Sign_up from '../Sign_up/Sign_up'

import './auth_page.css'

function Auth_page() {
const [state, setState] = useState(false)

const toggleLink =()=>setState(true)
const toggleLoginLink =()=>setState(false)

    return (
        <div className="auth">
         {state ? 
         <Sign_up toggleLoginLink={toggleLoginLink} />
         :  
         <Login toggleLink={toggleLink}/> 
          }
           
        </div>
    )
}

export default Auth_page
