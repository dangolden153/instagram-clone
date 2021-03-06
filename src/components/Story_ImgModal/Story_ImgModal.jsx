import React,{useState, useRef, useEffect} from 'react'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close';

import {storage, db_firestore} from '../firebase'
import firebase from '../firebase'

import './Story_ImgModal.css'

function Story_ImgModal({setPreview,currentUser,imgModal,closeImgModal,filePickerRef,image, preview}) {

    const [progressText, setProgressText]=useState('')
    const [progress, setProgress]= useState(0)
    const [secProgressText, set2ndProgressText]=useState('your photo was added')
   

    const handleStory=(e)=>{
        e.preventDefault()

        const uploadtask = storage.ref(`story/${image.name}`).put(image)

        uploadtask.on('state_changed', snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 )
            setProgress(progress)
            setProgressText('Uploading...')
        },
        (error)=>{
            alert(error.message)
        } ,

        ()=>{
            storage.ref('story')
            .child(image.name)
            .getDownloadURL()
            .then(url=>{
                db_firestore.collection('stories').add({
                    storyImgUrl : url,
                    username: currentUser.displayName,
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                })

                setProgress(0)
                set2ndProgressText('')
                console.log('done')
                closeImgModal()
                setPreview()
            })

            .catch(err=> console.log(err))
        }
        )
    }











    return (
        <div className='imageUplod__modal'>
            <Modal 
            open={imgModal}
            onClose={closeImgModal}
            style={{
                border: 'none'
            }}
            >            
             {
            <div className="story__upload">
             <div className="uploading_container">
                <progress value={progress} max='100%' className='story_progress'/>
                <p className="uploading_text">{progressText}</p>
                </div>
                <CloseIcon className='modal_icon' onClick={closeImgModal}/>

            {
                preview && <div className="upload_story_img">
                    {preview && <img src={preview} alt="preview" className="story__img"/> }
                </div>
            }
        { preview ? <button className="story_imgUpload" onClick={handleStory} >
                 Add to story 
             </button> : <p className="sec_ProgressText">{secProgressText}</p> }
      

          
      
          
             </div> 
             }
             </Modal>
             </div>
    )
}

export default Story_ImgModal
