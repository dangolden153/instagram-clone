import React,{useState, useEffect} from 'react'
 import {storage,db_firestore, auth,db} from '../firebase'
 import firebase from '../firebase'

import './imageUpload.css'

function ImageUpload({currentUser,close_Modal}) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')
    const [name, setName] = useState('')

    const [post, setPost] = useState([])

   
    const handleChange =(event)=>{
        if (event.target.files[0]){
            setImage(event.target.files[0])
             
        }
    }

   

     
    const handleUpload =(e)=>{
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on("state_changed", snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 )
            setProgress(progress)
        },

        (error) =>{
            console.log(error)
            alert(error.message)
        },

        ()=>{
            storage.ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url =>{
                db_firestore.collection('post').add({
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imgUrl: url,
                    username: currentUser
                })
                console.log(url)
                setProgress(0)
                setCaption('')
                setImage(null)
                close_Modal()
                
              
            })
            .catch(err => console.log(err))
        }

        )
        
    }

   
   

    return (
        <div className='imageUpload' >
        <progress value={progress} max='100%' className='imageUpload_progress' />
        {/* <input  type="text" value={name} onChange={e => setName(e.target.value)} placeholder='name' /> */}
        <textarea cols="30" rows="10" className='imageUpload_input' type="text" placeholder='write a caption..' onChange={e => setCaption(e.target.value)} value={caption} />
        <input  type="file" onChange={handleChange}/>
        <button className='imageUpload_btn' onClick={handleUpload} >Share</button>

        </div>
    )
}

export default ImageUpload
