import React,{useState} from 'react'
import pics from '../pictures/onlyfans2.jpg'

import './InstagramEbed.css'


function InstagramEmned_item({content,setContent,currentUser}) {

    const [state, setState] = useState(false)
    const {myUserName,text,btn} = content
    // const {displayName,email} = currentUser

    const handleBtn =()=>{
        setState(true)
        setContent([{btn: 'Following'}])
    }

    return (
        <div>
            
            <div className="embed">
                

                <div className="embedContainer">
                    <div className="embed_left_float">
                    <img src={pics} alt="profile picuture" className="embed_pics"/>

                    <div className="embed_header_text">
                        <h4 className="embed_header">{myUserName}</h4>
                        <p className="embed_text">{text}</p>
                    </div>
                    </div>
                <button onClick={()=>setState(true) } className={`embed_btn ${state && 'btn_embed'}`}>{state ? "following" : btn}</button>
                </div>
            </div>
        </div>
    )
}

export default InstagramEmned_item
