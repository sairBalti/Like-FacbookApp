import React from 'react'
import { useNavigate } from 'react-router-dom'


function Card({data}) {
     let navigate = useNavigate();
        
  return (
    <div>
         {
          data.map((item, index) =>(
          <div key={index}>
            <div className="post" onClick={()=>{navigate(`/updatePost/${item.id}`) }} >
              <div className="title2"> {item.title} </div>
              <div className="body"> {item.postText} </div>
              <div className="footer"> {item.username} </div>
            </div>
          </div>
          ))}
      
    </div>
  )
}

export default Card
