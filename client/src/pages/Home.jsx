import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "./Card";
import Modal from "../components/Modal";
import CreatePost from "./CreatePost";
import Menu from "../components/Menu";



function Home() {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [data,setData] = useState([]);
  useEffect(() =>{
    fetchTitle();
  },[]);

  //fechtitle function
  const fetchTitle = async () =>{
    await axios.get("http://localhost:4000/Posts").
    then(response =>{
      setData(response.data);
      console.log("data",response.data);

    })
    .catch(error => {
      console.error('Error fetching title:', error);
    });
  }
  const handleButton =() =>{
        setIsModalOpen(true);


  }
 
        
 
  return (
    <div>
      <div className="btndiv">
      <Button text= "CreatePost" onClick={handleButton} className="custom-button" style={{backgroundColor:'rgb(182, 206, 230)', color:'white'}}/>
      </div>
      <div className="title" onClick={()=>{navigate(`/post/${item.id}`) }}>
        <Card data={data}/>
      </div>
    
      {
        isModalOpen && <Modal isOpen={isModalOpen}  closeModal={() =>setIsModalOpen(false)}>
         <CreatePost />
          
         </Modal>

      }
  
       
      

   
      
    </div>
  )
}

export default Home
