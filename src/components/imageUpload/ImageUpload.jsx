import React,{useState, useEffect} from 'react'
 import {storage,db_firestore} from '../firebase'
 import firebase from '../firebase'

import './imageUpload.css'

function ImageUpload({currentUser}) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')
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
            })
            // .catch(err => console.log(err))
        }

        )
        
    }

   

    return (
        <div className='imageUpload' margin-buttom='15px'>
        <progress value={progress} max='100%' />
        <input type="text" placeholder='Enter a caption..' onChange={e => setCaption(e.target.value)} value={caption} />
        <input type="file" onChange={handleChange}/>
        <button onClick={handleUpload} className="upload_imgBtn">Upload</button>

            
        </div>
    )
}

export default ImageUpload
