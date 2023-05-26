import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import Item from '../../components/Item'
import { setItems } from '../../state'
import { URL_BASE } from '../../constant'

const ItemList = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  async function getItems() {
    const items = await fetch(`${URL_BASE}/api/items?populate=image`, {
      method: 'GET'
    })
    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
  }

  useEffect(() => {
    getItems() // eslint-disable-next-line
  }, [])

  return (
    <Box width="80%" margin="80px auto">
      <Typography
        variant="smallHeading"
        component="h2"
        textAlign="center"
        mb="5px"
      >
        Meet Yogi
      </Typography>
      <Typography variant="h2" component="h3" textAlign="center" mb="30px">
        Our products
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 350px)"
        maxWidth="1300px"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {items?.map((item) => (
          <Item item={item} key={`${item.attributes.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  )
}

export default ItemList
