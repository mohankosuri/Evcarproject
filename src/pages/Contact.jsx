import React,{useEffect, useState} from 'react'
 
 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Contactformvalidate } from '../validations/contactformvalidations';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [data,setData]=useState([])

  useEffect(()=>{

    const fetchdata=async()=>{
          const value=await fetch("https://fakestoreapi.com/products")
          const json= await value.json()

          console.log(json)

          setData(json)
          console.log("valuses are",data)
    }

    fetchdata()
  },[])
  return (
    <div className="flex justify-center items-center opacity-70 mt-[50px] mb-[50px]">


 

    <Formik
      initialValues={{ name: '', email: '',message:"" }}
      validate={Contactformvalidate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Simulate a successful submission
        setTimeout(() => {
          console.log(values);
          toast.success('Form submitted successfully!');
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
     
    <div className="max-w-md w-full bg-black p-8 rounded border border-white shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 justify-center flex text-white">Contact Us</h2>
      <Form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <Field type="text" id="name" name="name" className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 p-2" />
          <ErrorMessage name="name" component="div" className='text-red-500'/>
        </div>
        <div>
          <label htmlFor="email" className="block text-white  ">Email</label>
          <Field type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 p-2" />
          <ErrorMessage name="email" component="div" className='text-red-500'/>
        </div>
        <div>
          <label htmlFor="message" className="block text-white">Message</label>
          <Field as="textarea" id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"></Field>
          <ErrorMessage name="message" component="div" className='text-red-500' />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </div>
      </Form>
      
    </div>)}

   </Formik>
   <ToastContainer />
  </div>
  )
}

export default Contact