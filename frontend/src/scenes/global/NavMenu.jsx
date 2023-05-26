import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuOpen } from '../../state'
import { useNavigate } from 'react-router-dom'

const NavMenu = () => {
  const navigate = useNavigate()
  const IsMenuOpen = useSelector((state) => state.menu.isMenuOpen)
  const bestSellers = useSelector((state) => state.cart.items)?.slice(0, 3)
  const dispatch = useDispatch()

  const {
    palette: { secondary }
  } = useTheme()

  return (
    <Box
      display={IsMenuOpen ? 'block' : 'none'}
      backgroundColor="white"
      width="90%"
      maxWidth="1000px"
      position="absolute"
      top="92px"
      left="50%"
      sx={{
        transform: 'translateX(-50%)'
      }}
      zIndex={3}
      boxShadow="rgba(99, 99, 99, 0.2) 0 8px 8px 0"
      onMouseOver={() => dispatch(setIsMenuOpen(true))}
      onMouseOut={() => dispatch(setIsMenuOpen(false))}
    >
      <Box
        component="ol"
        display="flex"
        height="auto"
        sx={{ cursor: 'pointer' }}
      >
        {bestSellers?.map((item) => {
          return (
            <Box
              component="li"
              display="flex"
              flexDirection="column"
              justifyContent="start"
              alignItems="center"
              p="30px 0"
              onClick={() => {
                dispatch(setIsMenuOpen(false))
                navigate(`item/${item.id}`)
              }}
              key={`${item.attributes.name}-${item.id}`}
            >
              <img
                src={`http://localhost:1337${item.attributes.image.data.attributes.formats.medium.url}`}
                alt={item.attributes.name}
                width="80%"
                height="auto"
              />
              <Typography
                mt="10px"
                variant="h4"
                fontWeight="bold"
                sx={{ '&:hover': { color: secondary.main } }}
              >
                {item.attributes.name}
              </Typography>
              <Typography fontSize="14px" width="80%" textAlign="center">
                {item.attributes.sellingPoint}
              </Typography>
            </Box>
          )
        })}
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
