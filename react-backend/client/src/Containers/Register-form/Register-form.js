// Import Libraries
import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import * as Yup from 'yup';
import {registration} from '../../store/actions'

// Import Components
import FormTitle from '../../components/Form-title/Form-title';
import Button from '../../components/Button/Button';

// Import styles
import styles from './Register-form.module.css';

// Create Container
class RegisterForm extends React.Component {
  redirectToLoginHandler = () => {
    this.props.history.push('/users');
  }

  render() {
    return (
      <Formik
        initialValues = {{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
          checkbox: false
        }}
        validationSchema = {Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Incorrect value. Should be email')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          repeatPassword: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Repeat password is required'),
        }).shape({
          checkbox: Yup.bool().oneOf([true], 'Accept Privacy Policy is required')
        })}
        onSubmit = {(values, {setSubmitting}) => {
          setSubmitting(false);
          this.props.registration(values);
          this.redirectToLoginHandler();
        }}
      > 
        {formik => {
          return (
            <Form noValidate className={styles.form}>
              <FormTitle 
                title="One more step to make history"
                desc="Mark uses our app for more than 20 times per day! Be like Mark"
                className={styles.title}
              />
              <div className={styles.formBlock}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <Field name="name" type="text" className={styles.input} />
                <ErrorMessage name="name"></ErrorMessage>
                <label htmlFor="email" className={styles.label}>Email</label>
                <Field name="email" type="email" className={styles.input} />
                <ErrorMessage name="email"></ErrorMessage>
                <label htmlFor="password" className={styles.label}>Password</label>
                <Field name="password" type="password" className={styles.input} />
                <ErrorMessage name="password"></ErrorMessage>
                <label htmlFor="repeatPassword" className={styles.label}>Repeat password</label>
                <Field name="repeatPassword" type="password" className={styles.input} />
                <ErrorMessage name="repeatPassword"></ErrorMessage>
                <div className={styles.privacyBlock}>
                  <Field name="checkbox" type="checkbox" className={styles.privacyCheckbox} />
                  <label htmlFor="checkbox" className={styles.desc}>I agree with our Privacy Policy</label>
                  <ErrorMessage name="checkbox" component="div"/>
                </div>
                <Button type="submit" disabled={!(formik.dirty && formik.isValid)} >Sign In</Button>
                <Button type="reset">Cancel</Button>
              </div>
            </Form>
          )
        }} 
      </Formik>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registration: (value) => {
      dispatch(registration(value));
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));