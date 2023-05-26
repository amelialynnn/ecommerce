import React from 'react'
import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styled from '@emotion/styled'
import { shades } from '../../theme'
import {
  reduceCount,
  incrementCount,
  removeFromCart,
  setIsCartOpen
} from '../../state/'
import { useNavigate } from 'react-router-dom'
import { URL_BASE } from '../../constant'

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CartMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const IsCartOpen = useSelector((state) => state.cart.isCartOpen)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price
  }, 0)

  return (
    <Box //OVERLAY
      display={IsCartOpen ? 'block' : 'none'}
      backgroundColor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box //MODAL
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox //HEADER
            mb="15px"
          >
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <Box //CART LIST
          >
            {cart.map((item) => (
              <Box key={`${item.attributes.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="123px"
                      src={`${URL_BASE}${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox //ITEM NAME
                      mb="5px"
                    >
                      <Typography fontWeight="bold">
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    <FlexBox //AMOUNT
                      m="15px 0"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() => dispatch(reduceCount({ id: item.id }))}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(incrementCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography //PRICE
                        fontWeight="bold"
                      >
                        SEK{item.attributes.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          <Box //ACTIONS
            m="20px 0"
          >
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">SEK {totalPrice}</Typography>
            </FlexBox>
            <Button
              variant="btnPrimary"
              color="secondary"
              sx={{
                minWidth: '100%',
                padding: '20px 40px',
                m: '20px 0'
              }}
              onClick={() => {
                navigate('/checkout')
                dispatch(setIsCartOpen({}))
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CartMenu
