// Import Libraries
import React from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import * as Yup from 'yup';

// Import Components
import FormTitle from '../../components/Form-title/Form-title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Import styles
import styles from './Register-form.module.css';

// Create Container
class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  changeCheckHandler = (check) => {
    this.setState({
      checked: !check
    })
  }

  redirectToLoginHandler = () => {
    this.props.history.replace('/auth/login');
  }

  render() {
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
          email: Yup.string().email('Incorrect value. Should be email').required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit = {(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          this.props.reg(values);
          this.props.redirectionHandler('/auth/login');
        }, 400);
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} className={styles.form}>
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
            <div className={styles.privacyBlock} onClick={()=>this.changeCheckHandler(this.state.checked)} tabindex='0'>
              <div className={styles.privacyCheckbox}>{this.state.checked && <span className={styles.checked}></span>}</div>
              <p className={styles.desc}>I agree with our Privacy Policy</p>
            </div>
            {this.state.checked 
              ? <Button type="submit">Sign In</Button> 
              : <div className={styles.disBlock}><span className={styles.disSpan}>Sign In</span></div>
            }
            <Button type="reset">Cancel</Button>
          </form>
        )}
      </Formik>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    reg: (value) => dispatch({type: 'REG', value})
  }
}

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));