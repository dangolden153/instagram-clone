import React from 'react'
import profile from '../pictures/account.svg'
import {auth} from '../firebase'

import './Modal.css'

function Modal({openModal, closeModal}) {

    const handleLogout=()=>{
        auth.signOut()
    }

    return (
        <div className='modal'>
            <div className="modal_container">

            <button className="dp_btn">
                <img src={profile} alt="" className="icons"/>
                <p className="dp_text">Change Picture</p>
            </button>

            <button onClick={()=> handleLogout()} className="logout_btn">Log Out</button>

            </div>
        </div>
    )
}

export default Modal
