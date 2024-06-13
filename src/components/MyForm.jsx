import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const validate = values => {
    const errors = {};
    
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
  
    return errors;
  };

const MyForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className='text-white' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;

