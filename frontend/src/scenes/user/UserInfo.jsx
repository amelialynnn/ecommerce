import React from 'react'
import { Box, InputLabel, TextField, useMediaQuery } from '@mui/material'

const UserInfo = ({ userData }) => {
  const isNonMobile = useMediaQuery('(min-width:800px)')
  return (
    <>
      <Box
        component="form"
        p="50px 20px"
        display="grid"
        gap="15px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          '& > div': { gridColumn: isNonMobile ? 'span 2' : 'span 4' }
        }}
      >
        <Box>
          <InputLabel
            htmlFor="username"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Username
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="username"
            label={userData?.username}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="email"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Email Address
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="email"
            label={userData?.email}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="password"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Password
          </InputLabel>
          <TextField
            fullWidth
            type="password"
            id="password"
            label="...."
            variant="outlined"
            disabled
          />
        </Box>
      </Box>
    </>
  )
}

export default UserInfo
