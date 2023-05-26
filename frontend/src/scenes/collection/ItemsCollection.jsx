import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ItemBestSellers from '../../components/ItemBestSellers'
import { setItems } from '../../state'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { URL_BASE } from '../../constant'

const ItemsCollection = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const isNonMobile = useMediaQuery('(min-width:600px)')

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
    <Box margin="80px auto" maxWidth="1500px">
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
          '&': {
            gridTemplateColumns: isNonMobile
              ? 'repeat(2, 1fr)'
              : 'repeat(auto, 1fr)'
          }
        }}
      >
        {items?.slice(0, 2).map((item) => (
          <Box margin="0 auto">
            <ItemBestSellers
              item={item}
              maxWidth="660px"
              key={`${item.attributes.name}-${item.id}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ItemsCollection
