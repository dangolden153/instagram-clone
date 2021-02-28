import React from 'react'

import './Story.css'

function Story() {

    const story=[
        {
            id: 1,
            imageUrl: `${require('../pictures/onlyfans2.jpg')}`,
            userName: 'Dan'
        },

        {
            id: 2,
            imageUrl: `${require('../pictures/onlyfans3.jpg')}`,
            userName: 'Tony'
        },
        {
            id: 3,
            imageUrl: `${require('../pictures/onlyfans5.jpg')}`,
            userName: 'Sam'
        },
        {
            id: 4,
            imageUrl: `${require('../pictures/onlyfansDp1.jpg')}`,
            userName: 'Tom'
        },
        {
            id: 5,
            imageUrl: `${require('../pictures/onlyfansDp.jpg')}`,
            userName: 'Jerry'
        },

        {
            id: 6,
            imageUrl: `${require('../pictures/onlyfansDp.jpg')}`,
            userName: 'Jerry'
        },
        {
            id: 6,
            imageUrl: `${require('../pictures/onlyfansDp.jpg')}`,
            userName: 'Jerry'
        },

        {
            id: 6,
            imageUrl: `${require('../pictures/onlyfansDp.jpg')}`,
            userName: 'Jerry'
        },
    ]


    return (
        <div className='story'>
            <div className="story_container">
                <div className="story_sub_cont">
                {
                    story
                    .map(content=> (
                        <div content={content} key={content.id} className="story_items">
                            <div className="display_container">
                            <img src={content.imageUrl} alt='...' className="story_img"/>
                            <p className="story_username">{content.userName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default Story
