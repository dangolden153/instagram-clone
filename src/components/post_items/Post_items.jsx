import React from 'react'
import picture from '../pictures/nature.jpg'
import dp from '../pictures/dan.jpg'
import menu from '../pictures/menu.svg'
import './post_items.css'
import love from '../pictures/love.svg'
import emoji from '../pictures/files.svg'
import send from '../pictures/bag.svg'
import bookmark from '../pictures/bookmark.svg'

function Post_Items({posts}) {
    const {username, imgUrl,caption} = posts

    const handleComment = (e)=>{
        e.preventDefault()
    }


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
            <img src={love} alt="..." className="icons"/>
            <img src={love} alt="..." className="icons"/>
             <img src={send} alt="..." className="icons"/>
            </div>

            <div className="right_icon">
            <img src={bookmark} alt="" className="icons"/>
            
            </div>
        </div>


           {/* // caption */}
        <div className="usename_caption">
        <p className="captionUsername"><strong>user</strong></p>
         <p className="avatarUsername">{caption}</p>
            </div>


       {/* comments */}
       <p className="comments">nice one! </p>

       {/* comment input */}
       <form className='post_form'>
            <img src={emoji} alt="..." className="icons"/>
           <input type="text" className="input" placeholder='Add a comment'/>
           <button onClick={handleComment} className="btn">Post</button>
       </form>
        </div>
    )
}

export default Post_Items
