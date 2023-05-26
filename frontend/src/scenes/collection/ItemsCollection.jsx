import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ItemBestSellers from '../../components/ItemBestSellers'
import { setItems } from '../../state'
import { Box, Typography, useMediaQuery } from '@mui/material'

const ItemsCollection = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const tablet = useMediaQuery('(min-width:600px)')
  const isNonMobile = useMediaQuery('(min-width:1550px)')

  async function getItems() {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET' }
    )
    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
  }

  useEffect(() => {
    getItems() // eslint-disable-next-line
  }, [])

  return (
    <Box margin="80px auto">
      <Typography variant="h2" component="h3" textAlign="center" mb="30px">
        Our Best Sellers
      </Typography>
      <Box
        margin="0 30px"
        display="grid"
        justifyContent="center"
        rowGap="40px"
        columnGap="40px"
        sx={{
          '&': isNonMobile
            ? {
                gridTemplateColumns: 'repeat(2, 700px)'
              }
            : tablet
            ? {
                gridTemplateColumns: 'repeat(2, 45%)'
              }
            : { gridTemplateColumns: '1fr' }
        }}
      >
        {items.slice(0, 2)?.map((item) => (
          <Box margin="0 auto">
            <ItemBestSellers
              item={item}
              maxWidth="700px"
              key={`${item.attributes.name}-${item.id}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ItemsCollection
