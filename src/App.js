import React, {useEffect, useState} from 'react';
import Home from './components/home/home'
import NavBar from './components/navBar/NavBar'
import Auth_page from './components/auth_page/Auth_page'
import Login from './components/Login/Login'
import Sign_up from './components/Sign_up/Sign_up'
import ImageUpload from './components/imageUpload/ImageUpload'
import {auth} from './components/firebase'
import {Switch, Route, useHistory} from 'react-router-dom'


import './App.css';

const App =()=>{
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(()=>{
   auth.onAuthStateChanged(user => {
        if(user){
            history.push('/')
            console.log(user)
            setCurrentUser(user)
        } else {
            history.push('/auth')
            console.log('no users')
        }
    })
},[setCurrentUser])



  return (

  


  <div className='App'>
  {currentUser && <NavBar currentUser={currentUser} />}
  <Switch>


  <Route path='/' exact component={Home} />

  <Route path='/auth' component={Auth_page} />
  <Route path='/login' component={Login} />
  <Route path='/signup' component={Sign_up} />
   
  </Switch>
{  currentUser && <ImageUpload currentUser={currentUser.displayName} /> 
}
  </div>


)}
export default App;
/// 1 adding menu svg bar beside avatar and username    .../
/// 2 auth page that holds login and registration       .../
/// 3 setting the love,message and bookmark icon        .../
/// 4 style the comment section approprately        .../
/// 5 profile modal         .../
/// 9 create a story component at the top of post component

/// 6 firebase integration
/// 7 ability to upload a post 
/// 8 to comment on a post 
/// 10 ability to update profile picture
/// 11 user should be able to see all his/her posts