import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IconButton, Box, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { shades } from '../theme'
import { useTheme } from '@mui/material'
import { addToCart } from '../state'
import { useNavigate } from 'react-router-dom'
import { URL_BASE } from '../constant'

const Item = ({ item, width }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    palette: { neutral }
  } = useTheme()

  const [count, setCount] = useState(1)
  const [isHovered, setISHovered] = useState(false)

  const { price, name, image } = item?.attributes
  const {
    data: {
      attributes: {
        formats: {
          medium: { url }
        }
      }
    }
  } = image

  return (
    <Box width={width} style={{ cursor: 'pointer' }}>
      <Box
        position="relative"
        onMouseOver={() => setISHovered(true)}
        onMouseOut={() => setISHovered(false)}
      >
        <img
          alt={item.name}
          width="350px"
          height="350px"
          src={`${URL_BASE}${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box // AMOUNT
            display="flex"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button // BUTTON
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }))
              }}
              sx={{
                backgroundColor: neutral.main,
                color: shades.primary[500],
                '&:hover': { backgroundColor: '#8ACB88' }
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        mt="3px"
        textAlign="center"
        onClick={() => navigate(`/item/${item.id}`)}
      >
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">SEK {price}</Typography>
      </Box>
    </Box>
  )
}

export default Item
