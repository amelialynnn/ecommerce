import { getIn } from 'formik'
import { Box, Typography, Button, TextField } from '@mui/material'

const SignIn = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  errorSignIn,
  setValue
}) => {
  //these funtions allow for better code readability
  const formattedName = (field) => `${type}.${field}`
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    )

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))

  return (
    <Box m="20px">
      <Typography id="modal-modal-title" variant="h6" component="h2" mb="10px">
        Sign in
      </Typography>
      <TextField
        fullWidth
        type="text"
        label="Enter Email Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name={formattedName('email')}
        error={formattedError('email')}
        helperText={formattedHelper('email')}
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        fullWidth
        type="password"
        label="Enter Password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        name={formattedName('password')}
        error={formattedError('password')}
        helperText={formattedHelper('password')}
        sx={{ marginBottom: '15px' }}
      />
      {errorSignIn ? (
        <Box fontSize="14px" mb="15px" color="red">
          {errorSignIn}
        </Box>
      ) : (
        ''
      )}
      <Button
        type="submit"
        variant="btnPrimary"
        color="secondary"
        sx={{
          minWidth: '100%',
          padding: '20px 40px',
          mb: '15px'
        }}
      >
        Sign in
      </Button>
      <Typography
        id="modal-modal-description"
        sx={{
          textAlign: 'center',
          fontSize: '12px',
          mb: '15px',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
      >
        Forgot password?
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        Don't have an account?{' '}
        <Box
          component="span"
          fontWeight="bold"
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => setValue('signup')}
        >
          Sign up
        </Box>
      </Typography>
    </Box>
  )
}

export default SignIn
