export const Contactformvalidate = values => {
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