import React,{useState} from 'react'
import InstagramEmned_item from './InstagramEmned_item'
import pics from '../pictures/onlyfans2.jpg'

import './InstagramEbed.css'

function InstagramEbed({currentUser}) {

    const [content, setContent] =useState([
        {
            id: 1,
            myUserName: 'Dangolden',
            text: 'Follows you',
            btn: 'Follow'
        },
        {
            id: 2,
            myUserName: 'Toss',
            text: 'Follows you',
            btn: 'Follow'
        },{
            id: 3,
            myUserName: 'Dtosin',
            text: 'Follows you',
            btn: 'Follow'
        },

    ])

    
    return (
        <div className="embed__container">
        <div className='embed'>
            <div className="embedContainer">
                    <div className="embed_left_float">
                    <img src={currentUser && currentUser.photoURL} alt="profile picuture" className="embed_pics_big"/>

                    <div className="embed_header_text">
                        <h4 className="embed_header">{currentUser && currentUser.email}</h4>
                        <p className="embed_text">{currentUser && currentUser.displayName}</p>
                    </div>
                    </div>
                <button  className='embed_btn' >Switch</button>
                </div>

                <div className="suggestion">
                    <p className="suggestion_text">Suggestion For You</p>
                    <p className="btn_embed">See All</p>
                </div>
            {
                content.map(contents => <InstagramEmned_item 
                setContent={setContent}
                key={contents.id} 
                content={contents}
                currentUser={currentUser} 
                />)
            }
        </div>
        </div>
    )
}

export default InstagramEbed
