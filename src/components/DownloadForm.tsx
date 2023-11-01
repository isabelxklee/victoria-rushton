/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface DownloadFormProps {
  font: string;
}

const DownloadForm = ({ font }: DownloadFormProps) => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required('This is a required field.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('This is a required field.')
  });

  const handleSubmit = async (values: any) => {
    const response = await fetch(
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

    // if (!response) {
    //   console.log(response.error);
    // }

    // setTimeout(() => {
    //   navigate('/success');
    // }, 900);
  };

  return <></>;
};

export default DownloadForm;
