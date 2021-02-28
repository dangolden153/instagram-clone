import React,{useEffect,useState} from 'react'
import Post from '../Post/Post'
import Story from '../Story/Story'
import InstagramEbed from '../InstagramEbed/InstagramEbed'
import NavBar from '../navBar/NavBar'
import {auth} from '../firebase'
import {Button} from '@material-ui/core';
import InstagramEmbed from 'react-instagram-embed'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import './home.css'

function Home() {
    const [currentUser, setCurrentUser] = useState(null)
  
    useEffect(()=>{
     auth.onAuthStateChanged(user => {
          if(user){
              console.log(user)
              setCurrentUser(user)
          } else {
              console.log('no users')
          }
      })
  },[setCurrentUser])

    return (
        <div className='home' >
            <Story/>

            <div className="container__display">


            <div className="container_left">
            <Post />
            </div>


            <div className="container_right">
            {/* <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            clientAccessToken='123|456'            
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            /> */}
            <InstagramEbed currentUser={currentUser} />
            </div>
            
            </div>
            
            

         </div>
    )
}

export default Home
 