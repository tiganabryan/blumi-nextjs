/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import OnSubmitThankYouCard from 'blocks/cards/OnSubmitThankYouCard';
import axios from 'axios';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  phone: yup
    .string()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Please enter a valid phone number.',
    ),
  budget: yup.string().required('Please specify your project budget'),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    firstName: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = e.target.action;

    const formInfo = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      message: formik.values.message,
    };

    const JSONdata = JSON.stringify(formInfo);

    axios({
      method: 'POST',
      url: action,
      data: JSONdata,
    })
      .then((response) => {
        console.log(response);
        formik.resetForm();
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      {!isSubmitted ? (
        <form
          noValidate
          className="gform"
          autoComplete="off"
          onSubmit={handleSubmit}
          method="POST"
          action="https://script.google.com/macros/s/AKfycbw4ENJfkNon7N1EbzdDcTif_3Ec_xLvYFGcQHKX0z3Ntki5zgvdeqQ0j6bvlWP-zBYiCg/exec"
        >
          <Box
            component={Grid}
            marginBottom={{ xs: 10, sm: 0 }}
            container
            spacing={4}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 2 }}
                fontFamily={'Lato'}
              >
                What's your name?
              </Typography>
              <TextField
                label="First name"
                variant="outlined"
                name={'firstName'}
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 2 }}
                fontFamily={'Lato'}
              >
                What's your email? *
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                name={'email'}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant={'subtitle2'}
                sx={{ marginBottom: 2 }}
                fontFamily={'Lato'}
              >
                Your message *
              </Typography>
              <TextField
                label="Message"
                variant="outlined"
                name={'message'}
                fullWidth
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                textTransform={'lowercase'}
              >
                Connect
              </Button>
            </Grid>
          </Box>
        </form>
      ) : (
        <OnSubmitThankYouCard />
      )}
    </Box>
  );
};

export default Form;
