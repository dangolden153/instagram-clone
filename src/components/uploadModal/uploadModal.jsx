import React from 'react'
import ImageUpload from '../imageUpload/ImageUpload'
import Modal from '@material-ui/core/Modal'
function UploadModal({open,handleClose}) {
    return (
        <div>
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  {<ImageUpload />}
</Modal>
        </div>
    )
}

export default UploadModal
