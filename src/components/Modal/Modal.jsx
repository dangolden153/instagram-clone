import React,{useState,useEffect} from 'react'
import profile from '../pictures/account.svg'
import {auth,db,db_firestore,storage} from '../firebase'
import Modal from '@material-ui/core/Modal'

import './Modal.css'

function Modal_box({openModal, closeModal,state,currentUser}) {

    const [image, setImage] =useState(null)
    const [user, setUser] =useState(null)
    const [imageUpload, setimageUpload] =useState('')

    const handleLogout=()=>{
        auth.signOut()
        closeModal()
    }

    const handleChange =(e)=>{
        if (e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    useEffect(()=>{
        auth.onAuthStateChanged(user => {
             if(user){
                setUser(user)
             } else {
                 console.log('no users')
             }
         })
     },[setUser])



    const updateImage =()=>{
        storage.ref().child(`avatar/${image.name}`).put(image)
        .then(snap =>{
            snap.ref.getDownloadURL()
            .then(url => {
                
             
                // setimageUpload(url)
                //  uploadImage()
                
                console.log(url)
                

                
            })
        })
        
    }

    const uploadImage =()=>{
     

            
               
                user.updateProfile({
                    photoURL: imageUpload
                })
                .then(()=>{
                    console.log('uploading')
                }) .catch(err => console.log(err))

                db.ref('users')
                .child(user.uid)
                .update({
                    avatar: imageUpload
                })

                .then(res => {console.log(res,'updates')
                console.log('already updates !!!')
            })
                .catch(err => console.log(err))
        

        
            
        
    }

    console.log(user && user.uid)

    return (
        <div className='modal'>
            <Modal
            open={state}
            onClose={closeModal}
            >{
            <div className="modal_container">
            <input type="file" onChange={handleChange} />

            <button className="dp_btn">
                <img src={currentUser && currentUser.photoURL} alt="" className="icons"/>
              <button> <p onClick={updateImage} className="dp_text">Change Picture</p></button> 
            </button>

            <button onClick={()=> handleLogout()} className="logout_btn">Log Out</button>

            </div>
            }
            </Modal>
        </div>
    )
}

export default Modal_box
