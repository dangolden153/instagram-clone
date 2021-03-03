import React from 'react'
import ImageUpload from '../imageUpload/ImageUpload'
import Modal from '@material-ui/core/Modal'

import  './uploadModal.css'
import CloseIcon from '@material-ui/icons/Close';

function UploadModal({open,close_Modal,currentUser}) {
    return (
        <div>
            <Modal
  open={open}
  onClose={close_Modal}
 
>
  { 
  <div className="modalcontainer">
      <CloseIcon className='modal_icon' onClick={close_Modal}/>
      <ImageUpload currentUser={currentUser.displayName} close_Modal={close_Modal}/>
      </div>
      }
</Modal>
        </div>
    )
}

export default UploadModal
