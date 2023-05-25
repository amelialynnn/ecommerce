import React from 'react'
import { Box, InputLabel, TextField, useMediaQuery } from '@mui/material'

const BillingInfo = ({ userData }) => {
  const isNonMobile = useMediaQuery('(min-width:600px)')

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
            htmlFor="firstName"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            First Name
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="firstName"
            label={userData?.firstName}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="lastName"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Last Name
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="lastName"
            label={userData?.lastName}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="Street Address"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Street Address
          </InputLabel>
          <TextField
            fullWidth
            type="Street Address"
            id="Street Address"
            label={userData?.street}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="buildingNumber"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Building Number
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="buildingNumber"
            label={userData?.buildingNumber}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="city"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            City
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="city"
            label={userData?.city}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="zipCode"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Zip Code
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="zipCode"
            label={userData?.zipCode}
            variant="outlined"
            disabled
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="country"
            sx={{
              fontWeight: 'bold',
              mb: '5px'
            }}
          >
            Country
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            id="country"
            label={userData?.country}
            variant="outlined"
            disabled
          />
        </Box>
      </Box>
    </>
  )
}

export default BillingInfo
