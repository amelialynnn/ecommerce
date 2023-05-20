import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Box, Typography, Tabs, Tab, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { setIsUserModalOpen } from '../../state'
import SignUp from './SignUp'
import LogIn from './LogIn'

const UserModal = () => {
  const [value, setValue] = useState('login')

  const dispatch = useDispatch()
  const isUserModalOpen = useSelector((state) => state.user.isUserModalOpen)

  //Behövs?
  const handleClose = () => {}

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Modal
        open={isUserModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        position="relative"
      >
        <Box
          backgroundColor="white"
          width="80%"
          maxWidth="500px"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '3px'
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Tabs value={value} onChange={handleChange}>
              <Tab label="LOG IN" value="login" />
              <Tab label="SIGN UP" value="signup" />
            </Tabs>
            <IconButton
              onClick={() => dispatch(setIsUserModalOpen({}))}
              sx={{ color: 'primary.main', m: '0 20px' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {value === 'login' && <LogIn />}
          {value === 'signup' && <SignUp />}
        </Box>
      </Modal>

      {/* IF LOGGED IN - DASHBOARD */}

      {/* TODO:
        - Val att signa upp
        - Val att logga in
        - Om inloggad - visa Dashboard sida
      */}
    </>
  )
}

export default UserModal
