import { useTheme } from '@mui/material'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  const {
    palette: { secondary, neutral }
  } = useTheme()

  return (
    <Box mt="70px" p="40px 0" backgroundColor={secondary.main}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={neutral.light}
          >
            YOGI
          </Typography>
          <Box color={neutral.light}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo sed
            error provident accusantium repellendus a officiis pariatur,
            deleniti consectetur dicta porro fuga similique quod odio nemo!
            Ipsum vitae tempora perspiciatis!
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={neutral.light}
          >
            About us
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Careers
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Our stores
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Terms & Conditions
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Privacy Policy
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={neutral.light}
          >
            Customer Care
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Help Center
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Track Your Order
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Corporate & Bulk Purchasing
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Returns & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={neutral.light}
          >
            Contact Us
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Björcksgatan 36B, 41652 Gothenburg
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Email: yogi-contact@gmail.com
          </Typography>
          <Typography mb="30px" color={neutral.light}>
            Phone: (222)333-444
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
