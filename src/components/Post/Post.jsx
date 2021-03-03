import React,{useEffect,useState} from 'react'
import Post_Items from '../post_items/Post_items'
import {db_firestore} from '../firebase'

import './Post.css'

function Post({currentUser}) {
    const [post, setPost] = useState([])

    useEffect(()=>{
        db_firestore.collection('post').orderBy('timeStamp', 'desc').onSnapshot(snapshot =>{
            setPost(snapshot.docs.map(doc =>({ 
                id:doc.id,
                post: doc.data()
            })))
        })
    },[setPost])

    

    return (
        <div className='post'>
          
         {post.length > 0 && post.map(({id, post}) => 
         <Post_Items 
         key={id} 
         postId={id} 
         posts={post} 
         currentUser={currentUser}
         />)   }
        </div>
    )
}

export default Post
