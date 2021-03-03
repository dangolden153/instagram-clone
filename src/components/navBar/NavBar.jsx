import React,{useState, useEffect} from 'react'
import Modal from '../Modal/Modal'
import {Link} from 'react-router-dom'
import profile from '../pictures/account.svg'
import ig from '../pictures/ig_logo.png'
import AddIcon from '@material-ui/icons/Add'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import UploadModal from '../uploadModal/uploadModal'

import './navBar.css'

function NavBar({currentUser}) {
    const [state, setState] = useState(false)
    const [modal, setModal] = useState(false)


    const toggleModal =()=> setState(!state)
    const closeModal =()=> setState(false)

    const openModal =()=> setModal(true)
    const close_Modal =()=> setModal(false)

    return ( 
        <div className='nav'>
            <div className="nav_container">
                <Link to='/' className="left_logo">
                    <img src={ig} alt="instagram" className="ig_logo"/>
                    </Link>

                <div className="right_icons">
                    <HomeIcon className='nav_icon'/>
                    <SendOutlinedIcon className='nav_icon rotate_icon'/>
                    <AddIcon className='nav_icon border' onClick={openModal}/>
                    <FavoriteBorderIcon className='nav_icon'/>
                    <img src={currentUser && currentUser.photoURL}  onClick={toggleModal} alt="profile pics" className="navProfile_pics"/>
                </div>

            </div>

          {state && <Modal  closeModal={closeModal} />}

 <UploadModal currentUser={currentUser} open={modal} close_Modal={close_Modal} /> 
        </div>
    )
}

export default NavBar
