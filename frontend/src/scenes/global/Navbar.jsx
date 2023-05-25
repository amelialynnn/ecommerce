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
import { setIsCartOpen, setIsMenuOpen, setIsUserModalOpen } from '../../state'
import { getIsLoggedIn } from '../../helpers'

import NavMenu from './NavMenu'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const IsMenuOpen = useSelector((state) => state.menu.isMenuOpen)

  const handleUser = () => {
    const isLoggedIn = getIsLoggedIn()

    if (isLoggedIn) {
      navigate('/profile')
    } else {
      dispatch(setIsUserModalOpen(true))
    }
  }

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
      zIndex={3}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
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
          onClick={() => {
            navigate('/collection')
            dispatch(setIsMenuOpen(false))
          }}
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
        <NavMenu />
        <Box display="flex" justifyContent="space-between" columnGap="5px">
          <IconButton onClick={handleUser} sx={{ color: 'primary.main' }}>
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

export default Navbar
