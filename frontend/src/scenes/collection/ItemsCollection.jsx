import { useSelector } from 'react-redux'
import Item from '../../components/Item'
import { Box, Typography } from '@mui/material'

const ItemsCollection = () => {
  const items = useSelector((state) => state.cart.items)

  return (
    <Box margin="80px auto">
      <Typography variant="h2" component="h3" textAlign="center" mb="30px">
        Our Bestsellers
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        maxWidth="1200px"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {items?.map((item) => (
          <Box>
            <Item
              item={item}
              width="300px"
              key={`${item.attributes.name}-${item.id}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ItemsCollection
