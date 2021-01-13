// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// Import Components
import Button from '../../components/Button/Button';

// Import styles
// import styles from './Post-form.module.css';

class PostForm extends React.Component {
  render () {
    return (
      <Formik
        initialValues = {{
          id: this.props.id,
          title: '',
          image: '',
          hashtag: ''
        }}
        validationSchema = {Yup.object({
          title: Yup.string().required('Required'),
          // добавить требования к изображению, если добавляется
        })}
        onSubmit = {(values, {setSubmitting}) => {
          setSubmitting(false);
          this.props.addPost(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" type="text"/>
            <ErrorMessage name="title"></ErrorMessage>
            <label htmlFor="image">Image</label>
            <Field name="image" type="file"/>
            <ErrorMessage name="image"></ErrorMessage>
            <label htmlFor="hashtag">Tags</label>
            <Field name="hashtag" type="text"/>
          </div>
          <Button type="submit" styling="submit">Add Post</Button> 
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch({type: "ADD_POST", payload: post});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);