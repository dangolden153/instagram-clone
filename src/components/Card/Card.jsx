import React from 'react'
import pics from '../pictures/dan.jpg'
import './Card.css'

function Card() {
    return (
        <div className="card">
            <div className="bac_position"></div>
            <div className="card_container">
                <img src={pics} alt="..." className="profile_img"/>
                <div className="profile_details">
                    <h1 className="name">Olanre Daniel 25</h1>
                    <div className="location">New york</div>
                </div>

                <div className="like_container">
                    <div className="header_text_like">
                        <h2 className="like_header">199k</h2>
                        <p className="like_text">Followers</p>
                        </div>

                        <div className="header_text_like">
                        <h2 className="like_header">900k</h2>
                        <p className="like_text">Likes</p>
                        </div>

                        <div className="header_text_like">
                        <h2 className="like_header">500k</h2>
                        <p className="like_text">Photos</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card
