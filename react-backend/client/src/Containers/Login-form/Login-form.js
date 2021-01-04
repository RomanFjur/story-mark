// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Import Components
import FormTitle from '../../components/Form-title/Form-title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Import styles
import styles from './Login-form.module.css';

const LoginForm = ({login}) => {
  return (
  <Formik
    initialValues = {{
      email: '',
      password: ''
    }}
    validationSchema = {Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required')
    })}
    onSubmit = {(values, {setSubmitting}) => {
    setTimeout(() => {
      setSubmitting(false);
      login(values);
    }, 400);
    }}
  >
    {formik => (
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <FormTitle 
          title="What a story Mark?"
          desc="Login to tell someone your story. Talk with world..."
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
        <Link to='/auth/register' className={styles.link}>Not registered yet? Register here</Link>
        <Button type="submit">Submit</Button>
      </form>
    )}
  </Formik>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => dispatch({type: 'LOGIN', value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

