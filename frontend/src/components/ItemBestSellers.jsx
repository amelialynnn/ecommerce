import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { URL_BASE } from '../constant'

const ItemBestSellers = ({ item, maxWidth }) => {
  const navigate = useNavigate()

  const { price, name, image } = item?.attributes
  const {
    data: {
      attributes: {
        formats: {
          large: { url }
        }
      }
    }
  } = image

  return (
    <Box>
      <Box maxWidth={maxWidth}>
        <img
          alt={item.name}
          width="100%"
          height="auto"
          src={`${URL_BASE}${url}`}
        />
      </Box>

      <Box mt="10px" textAlign="center">
        <Typography mb="5px" fontWeight="bold">
          {name}
        </Typography>
        <Typography mb="20px">SEK {price}</Typography>
        <Button
          variant="btnPrimary"
          color="secondary"
          onClick={() => navigate(`/item/${item.id}`)}
          sx={{ cursor: 'pointer' }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  )
}

export default ItemBestSellers
