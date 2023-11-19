import React, { Children } from 'react'

function Modal({children,closeModal,isOpen}) {
   
  return isOpen ?(
    <div className="modal-overlay" >
        <div className= "modal-content" >
            {children}
            <button onClick={closeModal}>close</button>
        </div> 
      
    </div>
  ):null;
};

export default Modal 
 