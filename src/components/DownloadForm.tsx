/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, COLORS, ColumnFlex, RowFlex, Text } from '../styles';

import { ExternalLink } from './Links';
import { Select } from './styles';

interface DownloadFormProps {
  allFonts: { name: string }[];
}

const Error = styled(Text)`
  font-size: 14px;
  color: red;
  margin-bottom: 12px;
`;

const FormWrapper = styled(ColumnFlex)`
  gap: 20px;
  width: 300px;
  margin-top: 20px;
`;

const InputWrapper = styled(ColumnFlex)`
  gap: 4px;
`;

const InputField = styled(Field)`
  font-family: 'Cecilie Sans', sans-serif;
  font-size: 16px;
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid ${COLORS.BLACK};
  margin-bottom: 4px;
  font-weight: 300;
`;

const Checkbox = styled.input`
  width: 25px;
`;

const CheckboxWrapper = styled(RowFlex)`
  gap: 10px;
`;

const SubmitButton = styled(Button)<{ $disabled: boolean }>`
  width: fit-content;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
`;

const DownloadForm = ({ allFonts }: DownloadFormProps) => {
  const data = useStaticQuery(pageQuery);
  const assets = data.allContentfulAsset.nodes;

  const [selectedFont, setSelectedFont] = useState<string>(allFonts[0].name);
  const [trialAgreement, setTrialAgreement] = useState<boolean>(false);

  const zipFolder = useMemo(() => {
    const filename = selectedFont.split(' ').join('-');
    return assets.find(
      (asset: any) =>
        asset.filename.includes(filename) &&
        asset.mimeType === 'application/zip'
    );
  }, [assets, selectedFont]);

  const formSchema = Yup.object().shape({
    font: Yup.string().required('This is a required field.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('This is a required field.')
  });

  const handleClick = () => {
    setTrialAgreement(trialAgreement => !trialAgreement);
  };

  const handleSubmit = async (values: any) => {
    const response: any = await fetch(
      `${process.env.GATSBY_SERVER_URL}/download-trial-fonts`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          font: selectedFont,
          email: values.email,
          zip: zipFolder.url
        })
      }
    );

    if (!response) {
      console.log(response.error);
    }

    setTimeout(() => {
      navigate('/download-trial-fonts/confirmation');
    }, 900);
  };

  return (
    <>
      <Formik
        initialValues={{
          font: allFonts[0].name,
          email: ''
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}>
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <FormWrapper>
              <InputWrapper>
                <label>Font</label>
                <Select onChange={event => setSelectedFont(event.target.value)}>
                  {allFonts.map((font: { name: string }, index: number) => (
                    <option key={index} value={font.name}>
                      {font.name}
                    </option>
                  ))}
                </Select>
              </InputWrapper>
              <InputWrapper>
                <label>Email address</label>
                <InputField autoComplete="off" name="email" type="email" />
                {errors.email && touched.email && <Error>{errors.email}</Error>}
              </InputWrapper>
              <CheckboxWrapper>
                <Checkbox type="checkbox" onClick={() => handleClick()} />
                <Text>
                  I accept the{' '}
                  <ExternalLink url="https://assets.ctfassets.net/6l1e28rigfdw/5dBCDrmnwFBDBeyogYwCif/b6624fe679eb41119ab29ff2b9a3f481/VRushton-EULA-TRIAL.pdf">
                    {' '}
                    Trial EULA
                  </ExternalLink>{' '}
                </Text>
              </CheckboxWrapper>
              <SubmitButton
                $disabled={!(isValid && dirty && trialAgreement)}
                type="submit">
                Email trial fonts
              </SubmitButton>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DownloadForm;

const pageQuery = graphql`
  query {
    allContentfulAsset {
      nodes {
        mimeType
        filename
        url
      }
    }
  }
`;
