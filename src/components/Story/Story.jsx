import React,{useState, useEffect, useRef} from 'react'
import StoryModal from '../storyModal/storyModal'
import Story_ImgModal from '../Story_ImgModal/Story_ImgModal'


import {db_firestore} from '../firebase'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Story.css'


function Story({currentUser}) {

   
    const [story, setStory] = useState([])
    const [modal, setModal] = useState(false)
    const [imgModal, setImgModal] = useState(false)
    const [image, setImage]=useState(null)
    const [preview, setPreview]=useState()

    const openModal =()=>setModal(true)
    const closeModal =()=>setModal(false)
    
    const openImgModal =()=>setImgModal(true)
    const closeImgModal =()=>setImgModal(false)

    useEffect(()=>{
        db_firestore.collection("stories")
        .onSnapshot(snapshot =>{
            setStory(snapshot.docs.map(doc => doc.data()))
        })
    },[setStory])


    const truncate =(str, n)=>{
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
     }
 
     const filePickerRef = useRef()

     const imgUpload_Picker =()=>{
        filePickerRef.current.click()
        openImgModal()
     }

     const handleChange =(event)=>{
        if (event.target.files[0])
        setImage(event.target.files[0])
    }



    useEffect(()=>{
        if(!image){
            return
        }

        const fileReader = new FileReader()
        fileReader.onload=()=>{
            setPreview(fileReader.result)
        }
        fileReader.readAsDataURL(image)

    },[image, setPreview])









    return (
        <React.Fragment>
        <div className='story'>
            <div className="story_container">
               
                  
                
                <div className="story_sub_cont">

                <div className="add_story">
                    <input 
                    type="file" 
                    onChange={handleChange}
                    ref={filePickerRef}
                    style={{
                        display :'none'
                    }}
                    />
                    <div className="display_container" onClick={imgUpload_Picker}>
                   
                            <img src={currentUser && currentUser.photoURL} alt='...' className="story_img"/>
                           < AddCircleIcon className='add_icon'/>
                            <p className="story_username">{truncate('Your Story', 10)}</p>
                        
                         </div>
                           
                </div>
                
                {
                    story
                    .map(content=> (
                        <div content={content} key={content.id} className="story_items">
                           
                            <div className="display_container">
                            <img src={content.storyImgUrl} alt='...' className="story_img"/>
                            <p className="story_username">{truncate(content.username, 10)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
               
            <StoryModal modal={modal} closeModal={closeModal} />
        </div>
    <Story_ImgModal setPreview={setPreview} image={image} preview={preview} filePickerRef={filePickerRef}  imgModal={imgModal} currentUser={currentUser}  closeImgModal={closeImgModal} />

        </React.Fragment>
    )
}

export default Story

