import React from 'react';
import {Formik} from 'formik';
import FormTitle from '../../Components/Form-title/Form-title';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import * as Yup from 'yup';

const LoginForm = () => {
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
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    }}
  >
    {formik => (
      <form onSubmit={formik.handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </form>
    )}
  </Formik>
  );
}

export default LoginForm;

