import React,{useState, useEffect} from 'react'
import Modal_box from '../Modal/Modal'
import {Link} from 'react-router-dom'
import profile from '../pictures/account.svg'
import ig from '../pictures/ig_logo.png'
import AddIcon from '@material-ui/icons/Add'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import UploadModal from '../uploadModal/uploadModal'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import './navBar.css'

function NavBar({currentUser}) {
    const [state, setState] = useState(false)
    const [modal, setModal] = useState(false)


    const toggleModal =()=> setState(!state)
    const closeModal =()=> setState(false)

    const openModal =()=> setModal(true)
    const close_Modal =()=> setModal(false)



    return ( 
        <React.Fragment>
        <div className='nav'>
            <div className="nav_container">

                <CameraAltOutlinedIcon className='nav_icon unhide' onClick={openModal}/>

                <Link to='/' className="left_logo">
                    <img src={ig} alt="instagram" className="ig_logo"/>
                    </Link>

                <div className="right_icons right_icons_media">
                    <HomeIcon className='nav_icon hide'/>
                    <SendOutlinedIcon className='nav_icon rotate_icon'/>
                    <AddIcon className='nav_icon border hide' onClick={openModal}/>
                    <FavoriteBorderIcon className='nav_icon hide'/>
                    <img src={currentUser && currentUser.photoURL}  alt="profile pics" className="navProfile_pics hide"/>
                </div>

            </div>

         <Modal_box state={state} currentUser={currentUser} closeModal={closeModal} />

 <UploadModal currentUser={currentUser} open={modal} close_Modal={close_Modal} /> 
        </div>






        <div className='nav nav_bottom'>
            <div className="nav_container">
                <Link to='/' className="left_logo left_logo_media">
                    <img src={ig} alt="instagram" className="ig_logo"/>
                    </Link>

                <div className="right_icons right__media">
                    <HomeIcon className='nav_icon'/>
                    <SendOutlinedIcon className='nav_icon rotate_icon'/>
                    <AddIcon className='nav_icon border' onClick={openModal}/>
                    <FavoriteBorderIcon className='nav_icon'/>
                    <img src={currentUser && currentUser.photoURL}   alt="profile pics" className="navProfile_pics"/>
                </div>

            </div>

         <Modal_box state={state} closeModal={closeModal} />

 <UploadModal currentUser={currentUser} open={modal} close_Modal={close_Modal} /> 
        </div>
        </React.Fragment>
    )
}

export default NavBar
