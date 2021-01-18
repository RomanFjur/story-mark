// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// Import Components
import FormTitle from '../../components/Form-title/Form-title';
import Button from '../../components/Button/Button';

// Import styles
import styles from './Login-form.module.css';

class LoginForm extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.isLogin) {
      this.props.history.push('/users');
    }
  }

  render () {
    return (
      <Formik
        initialValues = {{
          email: '',
          password: ''
        }}
        validationSchema = {
          Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required')
          })
        }
        onSubmit = {(values, {setSubmitting}) => {
          setSubmitting(false);
          this.props.login(values);
          values.email = '';
          values.password = '';
        }}
      >
        <Form className={styles.form}>
          <FormTitle 
            title="What a story Mark?"
            desc="Login to tell someone your story. Talk with world..."
            titleStyle="formsTitle"
            descStyle="descTitle"
            styling="loginFormTitle"
          />
          <div className={styles.formBlock}>
            <label 
              htmlFor="email" 
              className={styles.label}>Email</label>
            <Field 
              name="email" 
              type="email" 
              className={styles.input} />
            <ErrorMessage name="email" />
            <label  
              htmlFor="password" 
              className={styles.label}>Password</label>
            <Field 
              name="password" 
              type="password" 
              className={styles.input} />
            <ErrorMessage name="password" />
          </div>
          <Link 
            to='/auth/register' 
            className={styles.link}>Not registered yet? Register here</Link>
          <Button 
            type="submit" 
            styling="submit">Submit</Button> 
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => {
      dispatch({type: "LOGIN", payload: values});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

