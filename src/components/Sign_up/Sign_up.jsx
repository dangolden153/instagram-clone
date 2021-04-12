import React,{useState, useEffect} from 'react'
import Spinner from '../Spinner'
import {auth, db_firestore,db} from '../firebase'
import './Sign_up.css'
import {Link} from 'react-router-dom'
import logo from '../pictures/ig_logo.png'



function Sign_up({}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [profilePics, setProfilePics] = useState(null)
    const [loading, setLoading] = useState(false)


   
    const handleSubmit = event =>{
        event.preventDefault()
        setLoading(true)
       auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
            setUsername('')
            setEmail('')
            setPassword('')
            console.log(response)
            setLoading(false)
            response.user.updateProfile({
                displayName : username,
                photoURL: `https://images.pexels.com/photos/3319466/pexels-photo-3319466.jpeg`
            })

            .then(res =>{
                console.log(res)
                // db.ref('users')
                // .child(response.user.uid)
                // .set({
                //     username: response.user.displayName,
                //     avatar : response.user.photoURL
                // })


                // .then(res => console.log(res))
                // .catch(err => console.log(err))
                
            })  .catch(err => console.log(err))





        })   .catch(err => {
            console.log(err)
           setError(err.message)
           setLoading(false)   })



      }

    
    return (
        <React.Fragment>
      { loading &&     <Spinner />}
        <div className="sign-up">

            <div className="signUp_container">
                
                <img src={logo} alt='instagram logo' className="ig_logo_auth" />
            <form  className="signUp_form">

            <input type="text"
                 className="signUp_input"
                 placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                 />
                 
                 <input type="email"
                 className="signUp_input"
                 placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                 />


                 <input type="password"
                 className="signUp_input"
                 placeholder=' password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                 />
                
                <button  onClick={handleSubmit} className="signUp_btn ">Sign Up</button>
            </form>

            
            </div>

            <div className="signUp_link sign__up">
                Already have an account ? <Link to='/login' className={loading ? 'loading' : 'boldLink'}>Login in</Link>
            </div>

            <p className="error">{error}</p>
        </div>
        </React.Fragment>
    )
}
export default Sign_up
