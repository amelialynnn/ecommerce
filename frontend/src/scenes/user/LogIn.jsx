import { getIn } from 'formik'
import { Box, Typography, useMediaQuery, TextField } from '@mui/material'

//TODO: add formik

function LogIn() {
  return (
    <Box m="20px">
      <Typography id="modal-modal-title" variant="h6" component="h2" mb="10px">
        Log in
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Här ska vara en form
      </Typography>
    </Box>
  )
}

export default LogIn
