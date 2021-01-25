// Import libraries
import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

// Import Components
import Button from '../../components/Button/Button';
import AvatarBlock from '../Avatar-block/Avatar-block';

// Import styles
import styles from './Post-form.module.css';

class PostForm extends React.Component {
  render () {
    return (
      <Formik
        initialValues = {{
          id: this.props.id,
          title: '',
          description: '',
          image: '',
          hashtag: ''
        }}
        validationSchema = {Yup.object({
          title: Yup.string()
                    .required('Required'),
          // добавить требования к изображению, если добавляется
        })}
        onSubmit = {(values, {setSubmitting}) => {
          setSubmitting(false);
          this.props.addPost(values);
        }}
      >
        <Form className={styles.postForm}>
          <div className={styles.postFormContainer}>
            <AvatarBlock 
              avatar={this.props.avatar} 
              avatarStyle={styles.userImage}/>
            <div className={styles.postWrapper}>
              <label 
                htmlFor="title" 
                className={styles.label}>Title</label>
              <Field 
                name="title" 
                type="text" 
                className={styles.input}/>
              <ErrorMessage name="title" />
              <label 
                htmlFor="description" 
                className={styles.label}>Description</label>
              <Field 
                name="description" 
                type="text" 
                className={styles.input}/>
              <ErrorMessage name="description" />
              <label 
                htmlFor="image" 
                className={styles.label}>Image</label>
              <Field 
                name="image" 
                type="text" 
                className={styles.input}/>
              <label 
                htmlFor="hashtag" 
                className={styles.label}>Tags</label>
              <Field 
                name="hashtag" 
                type="text" 
                className={styles.input}/>
            </div>
            <Button 
              styling="close" 
              onClick={() => this.props.closeHandler()} />
          </div>
          <Button type="submit" styling="share">Share with world</Button> 
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.loginedUser.id,
    avatar: state.loginedUser.avatar
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