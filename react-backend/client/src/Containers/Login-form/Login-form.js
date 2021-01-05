// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {registration, login} from '../../store/actions'

// Import Components
import FormTitle from '../../components/Form-title/Form-title';
import Button from '../../components/Button/Button';

// Import styles
import styles from './Login-form.module.css';

const LoginForm = ({register, login, user}) => {
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
      setSubmitting(false);
      registration(values);
      login();
      this.props.history.push(`/users`);
    }}
  >
    <Form className={styles.form}>
      <FormTitle 
        title="What a story Mark?"
        desc="Login to tell someone your story. Talk with world..."
        className={styles.title}
      />
      <div className={styles.formBlock}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <Field name="email" type="email" className={styles.input} />
        <ErrorMessage name="email"></ErrorMessage>
        <label  htmlFor="password" className={styles.label}>Password</label>
        <Field name="password" type="password" className={styles.input} />
        <ErrorMessage name="password"></ErrorMessage>
      </div>
      <Link to='/auth/register' className={styles.link}>Not registered yet? Register here</Link>
      <Button type="submit">Submit</Button> 
    </Form>
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
    registration: (value) => {
      dispatch(registration(value));
    },
    login: () => {
      dispatch(login());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

