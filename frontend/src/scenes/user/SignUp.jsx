import { getIn } from 'formik'
import { Box, Typography, TextField, Button } from '@mui/material'

//TODO: add formik

function SignUp() {
  return (
    <Box m="20px">
      <Typography id="modal-modal-title" variant="h6" component="h2" mb="15px">
        Sign up
      </Typography>
      <TextField
        fullWidth
        type="text"
        label="Enter email address"
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        fullWidth
        type="password"
        label="Enter password"
        sx={{ marginBottom: '15px' }}
      />
      <TextField
        fullWidth
        type="password"
        label="Repeat password"
        sx={{ marginBottom: '15px' }}
      />
      <Button
        variant="btnPrimary"
        color="secondary"
        sx={{
          minWidth: '100%',
          padding: '20px 40px',
          mb: '15px'
        }}
        onClick={() => {
          //navigate('/checkout')
          //dispatch(setIsCartOpen({}))
        }}
      >
        Sign up
      </Button>
      <Typography
        id="modal-modal-description"
        sx={{ textAlign: 'center', fontSize: '12px', mb: '15px' }}
      >
        By creating an account, you agree to Yogi's membership terms. You can
        find information about our handling of personal data in our privacy
        policy.
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        Already have an account? Sign in
      </Typography>
    </Box>
  )
}

export default SignUp
