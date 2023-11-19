import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function Registration() {

    const initialValues = {
        username:"",
        password: "",
  };

  const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password:Yup.string().required(),

  }); 
  const onSubmit = (data, {resetForm}) =>{
    axios.post("http://localhost:4000/auth", data).then((response) =>{
         console.log("it worked");
 
         resetForm();
         
         
         
 
    });
 
   };

  return (
    <div className='formPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>UserName:</label>
          <ErrorMessage name='username' component='span'/>
          <Field
            autocomplete = "off"
            id= "input1"
            name= "username"
            placeholder="UserName..."
          />
           <label>Password:</label>
           <ErrorMessage name='password' component='span'/>
          <Field
          autocomplete="off"
          type="password"
            id= "input2"
            name= "password"
            placeholder="Enter your password"
          />
          
          <button type='submit'>save</button>
        </Form>
      </Formik>
     
    </div>
   
  )
}

export default Registration
