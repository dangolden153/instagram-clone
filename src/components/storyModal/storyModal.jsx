import React from 'react'
import Modal from '@material-ui/core/Modal'

function StoryModal({modal, closeModal}) {
    return (
        
            <Modal 
            open={modal}
            onClose={closeModal}
            >
               { 
               <div className="story_modal">

                </div>
                }
            </Modal>
       
    )
}

export default StoryModal
