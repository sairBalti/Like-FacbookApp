import React from 'react'


function Button({text,onClick,style,className}) {
  return (
    <div>
        <div>
           <button className={`custom-button ${className}`} style={style} onClick={onClick}>{text}</button>
        </div>
      
    </div>
  )
}

export default Button
