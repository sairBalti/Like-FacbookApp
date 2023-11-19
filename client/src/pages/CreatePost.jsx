import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const CreatePost = () => {
  const initialValues = {
        title: "",
        postText: "",
        username:"",
  };

  const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText:  Yup.string().required("it is require"),
        username: Yup.string().min(3).max(15).required(),

  });

  const onSubmit = (data, {resetForm}) =>{
   axios.post("http://localhost:4000/Posts", data).then((response) =>{
        console.log("it worked");

        resetForm();
        
        
        

   });

  };
  return (
    <div className='formPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>title:</label>
          <ErrorMessage name='title' component='span'/>
          <Field
            autocomplete = "off"
            id= "input1"
            name= "title"
            placeholder="(Ex saira....)"
          />
           <label>PostText:</label>
           <ErrorMessage name='postText' component='span'/>
          <Field
          autocomplete="off"
            id= "input2"
            name= "postText"
            placeholder="(Ex hi every one....)"
          />
           <label>UserName:</label>
           <ErrorMessage name='username' component='span'/>
          <Field
          autocomplete='off'
            id= "input3"
            name= "username"
            placeholder="(Ex heloo123....)"
          />
          <button type='submit'>save Post</button>
        </Form>
      </Formik>
     
    </div>
  )
}

export default CreatePost
