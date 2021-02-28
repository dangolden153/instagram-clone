import React,{useEffect,useState} from 'react'
import Post_Items from '../post_items/Post_items'
import {db_firestore} from '../firebase'

import './Post.css'

function Post() {
    const [post, setPost] = useState([])
    // const [postRef,  setchannelref ]= useState(firebase.database().ref('post'))

    useEffect(()=>{
        db_firestore.collection('post').orderBy('timeStamp', 'desc').onSnapshot(snapshot =>{
            setPost(snapshot.docs.map(doc => doc.data()))
        })
    },[setPost])

    console.log(post)

    return (
        <div className='post'>
          
         {post.length > 0 && post.map(posts => <Post_Items key={posts.id}  posts={posts} />)   }
        </div>
    )
}

export default Post
