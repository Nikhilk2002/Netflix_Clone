import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

const SignupSchema = Yup.object().shape({
  emailOrMobile: Yup.string()
    .required('Required')
    .matches(
      /^(?:\d{10}|\S+@\S+\.\S+)$/,
      'Invalid email or mobile number'
    ),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
});

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ emailOrMobile: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="emailOrMobile">Email or Mobile Number:</label>
              <Field
                type="text"
                name="emailOrMobile"
                id="emailOrMobile"
                className="form-control"
              />
              <ErrorMessage name="emailOrMobile" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className='signin-button'>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
