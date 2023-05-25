import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../../helpers'
import { URL_BASE, BEARER } from '../../constant'
import { Box, useTheme, Button, Typography, Tab, Tabs } from '@mui/material'
import { shades } from '../../theme'

import { AUTH_TOKEN, LOGGED_IN } from '../../constant'
import { removeLoggedIn, removeToken } from '../../helpers'

import UserInfo from './UserInfo'
import BillingInfo from './BillingInfo'

const Profile = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [value, setValue] = useState('userInfo')

  const {
    palette: { neutral }
  } = useTheme()

  const authToken = getToken()

  const fetchLoggedInUser = async (token) => {
    try {
      const response = await fetch(`${URL_BASE}/api/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` }
      })
      const data = await response.json()

      setUserData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken)
    }
  }, [authToken])

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  //SIGN OUT
  const signOut = () => {
    setUserData(null)

    //clear local storage
    removeToken(AUTH_TOKEN)
    removeLoggedIn(LOGGED_IN)

    navigate('/', { replace: true })
  }

  return (
    <Box margin="0 auto" maxWidth="1200px">
      <Typography variant="h2" m="40px 0" textAlign="center">
        Welcome, {userData?.username}!
      </Typography>

      <Box backgroundColor={neutral.main} p="50px 30px 0">
        <Typography variant="h3" pb="20px" fontWeight="bold">
          Edit profile
        </Typography>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab value="userInfo" label="User info" />
          <Tab value="billingInfo" label="Billing info" />
        </Tabs>
      </Box>

      {value === 'userInfo' && <UserInfo userData={userData} />}
      {value === 'billingInfo' && <BillingInfo userData={userData} />}

      <Box
        display="flex"
        gap="20px"
        p="0 20px"
        sx={{
          '& > button': { p: '15px 30px', width: '50%' }
        }}
      >
        <Button
          sx={{
            backgroundColor: neutral.main,
            color: shades.primary[500],
            '&:hover': { backgroundColor: '#8ACB88' }
          }}
        >
          Update info
        </Button>
        <Button
          sx={{
            backgroundColor: shades.primary[500],
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(3, 3, 3, 0.4)',
              color: shades.primary[500]
            }
          }}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </Box>
    </Box>
  )
}

export default Profile
