import React,{useState, useEffect} from 'react'
import firebase from '../firebase'
import {db_firestore} from '../firebase'
import dp from '../pictures/dan.jpg'
import menu from '../pictures/menu.svg'
import './post_items.css'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';



function Post_Items({posts,postId,currentUser}) {

    const [comments, setComments] =useState([])
    const [comment, setComment] =useState('')
    const {username, imgUrl,caption} = posts

    const handleComment = (e)=>{
        e.preventDefault()
        db_firestore.collection("post")
        .doc(postId)
        .collection("comments")
        .add({
            name: currentUser.displayName,
            text: comment,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }

    useEffect(()=>{
      

        if (postId){
           db_firestore.collection("post")
            .doc(postId)
            .collection("comments")
            .orderBy("timeStamp", "desc")
            .onSnapshot(snapshot=>{
                setComments(snapshot.docs.map(doc => doc.data()))
            })


        } else {
           return null
        }

       
    },[postId])

    return (
        <div className='post_item'>
            {/* avartar */}
            {/* username */}
            <div className="avatar_username_box">

            <div className="avatar_username">
                <img src={dp} alt="..." className="avatar"/>
                <p className="avatarUsername"><strong>{username}</strong></p>
            </div>
            
            <img src={menu} alt="menu svg" className="menu_svg"/>
            </div>

        {/*  imgUpload */}
         <div className="imgContainer">
        <img src={imgUrl} alt="..." className="imgUpload"/>
        {/* {console.log(imgUrl)} */}
        </div> 

        {/* icons: like, bookmark etc */}
        <div className="icon_container">
            <div className="left_icon">
            <FavoriteBorderOutlinedIcon className="icons"/>
            <ModeCommentOutlinedIcon className="icons"/>
            </div>

            <div className="right_icon">
            <BookmarkBorderOutlinedIcon className="icons"/> 
            
            </div>
        </div>



           {/* // caption */}
        <div className="usename_caption">
        <p className="captionUsername"><strong>{currentUser.displayName}</strong></p>
         <p className="avatarUsername">{caption}</p>
            </div>




       {/* comments */}
        {comments && comments.map(comment => 
         <p  className="comments">
            <strong>{comment.name}</strong>{''} {comment.text} 
             </p> ) }



       {/* comment input */}
       <form className='post_form'>
            <SentimentSatisfiedOutlinedIcon className="icons"/>
           <input 
           type="text" 
           className="input" 
           placeholder='Add a comment'
           value={comment}
           onChange={(e)=>setComment(e.target.value)}
           />


           <button 
           onClick={handleComment} 
           className="btn"
           disabled={!comment}
           >Post</button>
       </form>
        </div>
    )
}

export default Post_Items
