import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './Login.scss';

export const Login = ({ login }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: '25px',
    },
  });

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .matches(/^(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password invalid')
        .required('Required'),
    }),

    onSubmit: () => {
      console.log(login);
      login();
    },
  });

  return (
    <div className="form">
      <form className="form-login" onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.root}
          error={formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
          id="email"
          name="email"
          type="text"
          label="Email"
          variant="outlined"
          {...formik.getFieldProps('email')}
        />
        <TextField
          className={classes.root}
          error={formik.errors.password && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          {...formik.getFieldProps('password')}
        />
        <Button
          className="btn"
          type="submit"
          color="primary"
          variant="contained"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
