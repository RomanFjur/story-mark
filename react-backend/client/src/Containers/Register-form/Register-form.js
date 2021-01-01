// Import Libraries
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

// Import Components
import FormTitle from '../../Components/Form-title/Form-title';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

// Create Container
const RegisterForm = ({post}) => {
  return (
    <Formik
      initialValues = {{
        name: '',
        email: '',
        password: ''
      }}
      validationSchema = {Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit = {(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        post(values);
      }, 400);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <FormTitle 
            title="One more step to make history"
            desc="Mark uses our app for more than 20 times per day! Be like Mark"
          />
          <Input
            title="Name"
            type="text"
            id="name"
            fieldProps={formik.getFieldProps('name')}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <Input
            title="Email"
            type="email"
            id="email"
            fieldProps={formik.getFieldProps('email')}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <Input
            title="Password"
            type="text"
            id="password"
            fieldProps={formik.getFieldProps('password')}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <Button type="submit">Sign In</Button>
          <Button type="reset">Cancel</Button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => {
  return {
    values: state
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    post: (value) => dispatch({type: 'POST', value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);