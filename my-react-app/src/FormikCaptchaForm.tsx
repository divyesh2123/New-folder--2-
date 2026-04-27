import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required').
  test('email-exists', 'Email already exists', (value) => {
    const existingEmails = ['test@example.com', 'user@domain.com']; // Mock existing emails
    return !existingEmails.includes(value);
  }),
  captcha: Yup.string().required('Please complete the CAPTCHA'),
});

const FormikCaptchaForm: React.FC = () => {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleSubmit = async (values: any) => {
    // Handle form submission
    console.log('Form values:', values);
    // Reset CAPTCHA
    recaptchaRef.current?.reset();
  };

  return (
    <div>
      <h1>Formik Form with CAPTCHA</h1>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', captcha: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstname">First Name</label>
              <Field name="firstname" type="text" />
              <ErrorMessage name="firstname" component="div" />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <Field name="lastname" type="text" />
              <ErrorMessage name="lastname" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key for localhost
              onChange={(value) => setFieldValue('captcha', value)}
            />
            <ErrorMessage name="captcha" component="div" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikCaptchaForm;