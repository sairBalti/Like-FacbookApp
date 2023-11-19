import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {useParams} from "react-router-dom";
function UpdatePost() {
    const [update,setupdate] = useState({})
    const [comments,setcomments] = useState([]);
    const [newComment,setNewComment] = useState("");
    let { id } = useParams()
    useEffect(() =>{
        axios.get(`http://localhost:4000/Posts/byId/${id}`).
        then((response) =>{
          setupdate(response.data);
            console.log("datatoaupdate",response.data);

        });

        axios.get(`http://localhost:4000/Comments/${id}`).
        then((respnse) =>{
          setcomments(respnse.data);

        });
    

    },[]);
    const addComment = () =>{
      axios.post("http://localhost:4000/Comments",{commentBody: newComment,PostId: id},
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),


        },
      }
      )
      .then((response) =>{
        const commentToAdd = {commentBody: newComment}
       setcomments([...comments, commentToAdd]);
       setNewComment("");
      })
    }
  return (
    <div className='postPage'>
        <div className='leftSide'>
          <div className='post' id='individual'>
              <div className="title2"> {update.title} </div>
              <div className="body"> {update.postText} </div>
              <div className="footer"> {update.username} </div>


          </div>
              
        </div>
        <div className='rightSide'>
                 <div className='addCommentContainer'>
                  <input placeholder='Comment as ....' type='text' autoComplete='off' value={newComment} onChange={(event)=>{setNewComment(event.target.value)}}/>
                  <button onClick={addComment}>Add Comment</button>
                     
                 </div>
                 <div className='commentList'>
                  {
                    comments.map((item,index) => {
                      return <div key={index} className='comment'> {item.commentBody} </div>

                    })}
                 </div>

        </div>
    
    </div>
  )
}

export default UpdatePost
