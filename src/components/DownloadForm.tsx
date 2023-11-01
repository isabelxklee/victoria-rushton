/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, ColumnFlex } from '../styles';

interface DownloadFormProps {
  font: string;
}

const FormWrapper = styled(ColumnFlex)`
  gap: 20px;
  width: 250px;
`;

const DownloadForm = ({ font }: DownloadFormProps) => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required('This is a required field.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('This is a required field.')
  });

  const handleSubmit = async (values: any) => {
    const response: any = await fetch(
      `${process.env.GATSBY_SERVER_URL}/download-trial-fonts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          font: font,
          customerName: values.name,
          customerEmail: values.email
        })
      }
    );

    if (!response) {
      console.log(response.error);
    }

    // setTimeout(() => {
    //   navigate('/success');
    // }, 900);
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={formSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormWrapper>
              <label>Name</label>
              <input autoComplete="off" name="name" type="name" />
              {/* {errors.name && touched.name && (
                  <Error name="name">{errors.name}</Error>
                )} */}
              <label>Email address</label>
              <input autoComplete="off" name="email" type="email" />
              {/* {errors.email && touched.email && (
                  <Error name="email">{errors.email}</Error>
                )} */}
              <Button type="submit">Email trial fonts</Button>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DownloadForm;
