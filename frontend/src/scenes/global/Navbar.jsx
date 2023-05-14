import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import {
  Person,
  ShoppingCart,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { shades } from '../../theme'
import { setIsCartOpen, setIsMenuOpen } from '../../state'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const IsMenuOpen = useSelector((state) => state.menu.isMenuOpen)

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      backgroundColor="white"
      color={shades.primary[500]}
      padding="10px"
      position="sticky"
      top="0"
      left="0"
      zIndex={5}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color="secondary.main"
          fontFamily="h1"
          fontSize="h1"
        >
          YOGI
        </Box>
        <Box
          onMouseOver={() => dispatch(setIsMenuOpen(true))}
          component="nav"
          display="flex"
          alignItems="center"
          sx={{ '&:hover': { cursor: 'pointer' } }}
        >
          Products{' '}
          {IsMenuOpen ? (
            <ExpandLess fontSize="large" />
          ) : (
            <ExpandMore fontSize="large" />
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" columnGap="5px">
          <IconButton sx={{ color: 'primary.main' }}>
            <Person />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
                color: 'white'
              }
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'primary.main' }}
            >
              <ShoppingCart />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  )
}

//gör nav på mitt sätt

export default Navbar