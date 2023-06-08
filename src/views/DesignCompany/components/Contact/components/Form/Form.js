/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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
  message: yup.string().trim().required('Please specify your message'),
});

const Form = () => {
  const theme = useTheme();
  const log = console.log;

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const tryingAgain = (e) => {
    e.preventDefault();
    const action = e.target.action;
    // log(e.target);
    // log(onSubmit);

    const formInfo = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      message: formik.values.message,
    };

    const JSONdata = JSON.stringify(formInfo);
    // log(formInfo);

    axios({
      method: 'POST',
      url: action,
      data: JSONdata,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const preventDefault = async (e) => {
    e.preventDefault();
    log(formik.values);

    const formInfo = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      message: formik.values.message,
    };

    const JSONdata = JSON.stringify(formInfo);

    const endpoint =
      'https://script.google.com/macros/s/AKfycbw4ENJfkNon7N1EbzdDcTif_3Ec_xLvYFGcQHKX0z3Ntki5zgvdeqQ0j6bvlWP-zBYiCg/exec';

    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const preventFormRefresh = async (e) => {
    const event = e;
    log(event);
    const formData = new FormData(event.target);
    log(formData);

    const response = await fetch(formData.action, {
      method: 'POST',
      body: formData,
    });
    if (response.status === 200) {
      // Success!
    } else {
      // Error!
    }
    e.preventDefault();
  };

  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        <form
          noValidate
          className="gform"
          autoComplete="off"
          // onSubmit={formik.handleSubmit}
          // onSubmit={preventDefault}
          // onSubmit={preventFormRefresh}
          onSubmit={tryingAgain}
          method="POST"
          action="https://script.google.com/macros/s/AKfycbw4ENJfkNon7N1EbzdDcTif_3Ec_xLvYFGcQHKX0z3Ntki5zgvdeqQ0j6bvlWP-zBYiCg/exec"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                name="firstName"
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
              <TextField
                sx={{ height: 54 }}
                label="Last "
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
