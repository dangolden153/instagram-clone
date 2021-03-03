import React,{useState, useEffect} from 'react'
import {auth, db_firestore} from '../firebase'
import './Sign_up.css'
import {Link} from 'react-router-dom'



function Sign_up({}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [profilePics, setProfilePics] = useState(null)

    useEffect(()=>{
        db_firestore.collection("user")
        .onSnapshot(snapshot =>{
            setProfilePics(snapshot.docs.map(doc=>doc.data()))
            console.log(snapshot.docs.map(doc=>doc.data()))
        })
      },[setProfilePics])
      
      console.log(profilePics)
    console.log(profilePics)
   
    const handleSubmit = event =>{
        event.preventDefault()
       auth.createUserWithEmailAndPassword(email,password)
        .then(response => {
            setUsername('')
            setEmail('')
            setPassword('')
            console.log(response)

            response.user.updateProfile({
                displayName : username,
                photoURL: `https://images.pexels.com/photos/3319466/pexels-photo-3319466.jpeg`
            })
        })
       .catch(err => {
            console.log(err)
           setError(err.message)
       })
        
    }

    
    return (
        <div className="sign-up">

            <div className="signUp_container">
                
                <h2 className="signUp_header">Instagram</h2>
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
                New to Netflix? <Link to='/login' className='boldLink'>Login in</Link>
            </div>

            <p className="error">{error}</p>
        </div>
    )
}
export default Sign_up
