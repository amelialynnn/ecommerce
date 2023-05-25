import React from 'react'
import { Box } from '@mui/material'

const InfoBar = () => {
  return (
    <Box
      backgroundColor="secondary.main"
      color="white"
      textAlign="center"
      padding="10px 0"
      fontFamily="fontFamily"
      fontSize="14px"
      zIndex={5}
    >
      Free shipping & free returns on every order
    </Box>
  )
}

export default InfoBar
