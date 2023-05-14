import React from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuOpen } from '../../state'

const NavMenu = () => {
  const IsMenuOpen = useSelector((state) => state.menu.isMenuOpen)
  const dispatch = useDispatch()

  return (
    <Box
      display={IsMenuOpen ? 'block' : 'none'}
      backgroundColor="white"
      width="90%"
      maxWidth="1000px"
      paddingTop="133px"
      position="fixed"
      zIndex={3}
      top="0"
      left="50%"
      sx={{
        transform: 'translateX(-50%)'
      }}
      onMouseOver={() => dispatch(setIsMenuOpen(true))}
      onMouseOut={() => dispatch(setIsMenuOpen(false))}
    >
      <Box
        //display={isHovered ? 'flex block' : 'none'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="20px"
        height="350px"
      >
        <Box>NavMenu with products</Box>
        <Box>NavMenu with products</Box>
        <Box>NavMenu with products</Box>
        <Box>NavMenu with products</Box>
      </Box>
      <Box
        backgroundColor="neutral.main"
        p="20px"
        textAlign="center"
        width="100%"
      >
        Rest assured. Free shipping & free returns on every order.
      </Box>
    </Box>
  )
}

export default NavMenu
