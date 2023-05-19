import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { shades } from '../../theme'

//imports all images from assets folder
import image from '../../assets/full-shot-woman-holding-yoga-mat.jpg'

const MainHero = () => {
  const navigate = useNavigate()
  const isNonMobile = useMediaQuery('(min-width:600px)')

  return (
    <Box //IMAGE BACKGROUND
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '85vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box //TEXT AREA
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: '0 5%',
          p: '50px 5px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 1
        }}
      >
        <Typography
          color={shades.primary[400]}
          m="10px 0"
          variant="h1"
          fontSize={isNonMobile ? '50px' : '30px'}
        >
          Time for some yoga.
        </Typography>
        <Typography
          color={shades.primary[400]}
          m="10px 0"
          variant="subtext"
          maxWidth="700px"
          fontSize={isNonMobile ? '18px' : '16px'}
        >
          Looking to improve your yoga practice? Discover our range of
          high-quality yoga equipment and accessories at Yogi.{' '}
        </Typography>
        <Button
          variant="btnPrimary"
          fontSize={isNonMobile ? '16px' : '14px'}
          sx={{
            minWidth: '40%',
            m: '10px 0'
          }}
          onClick={() => {
            navigate('/collection')
          }}
        >
          Shop Some Stuff
        </Button>
      </Box>
    </Box>
  )
}

export default MainHero
