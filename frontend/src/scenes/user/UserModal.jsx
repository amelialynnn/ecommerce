import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import { setIsUserModalOpen, setUser } from '../../state'
import { API } from '../../constant'
import { setToken, setLoggedIn } from '../../helpers'
import SignUp from './SignUp'
import SignIn from './SignIn'
import {
  Modal,
  Box,
  Button,
  Typography,
  Tabs,
  Tab,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const initialValues = {
  signIn: {
    email: '',
    password: ''
  },
  signUp: {
    username: '',
    email: '',
    password: ''
  }
}

const checkoutSchema = [
  yup.object().shape({
    signIn: yup.object().shape({
      email: yup.string().required('required'),
      password: yup.string().required('required')
    })
  }),
  yup.object().shape({
    signUp: yup.object().shape({
      username: yup.string().required('required'),
      email: yup.string().required('required'),
      password: yup.string().required('required')
    })
  })
]

const UserModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [value, setValue] = useState('signin')
  const [error, setError] = useState('')
  const [activeForm, setActiveForm] = useState(0)

  const isSignInForm = activeForm === 0
  const isSignUpForm = activeForm === 1

  const isUserModalOpen = useSelector((state) => state.user.isUserModalOpen)

  useEffect(() => {
    //reset error message when user modal is closed
    if (!isUserModalOpen) {
      setError('')
    }
  })

  const handleTabChange = (event, newValue) => {
    setValue(newValue)

    if (activeForm === 0) {
      setActiveForm(1)
    } else {
      setActiveForm(0)
    }
  }

  const handleFormSubmit = async (values, actions) => {
    if (isSignInForm) {
      signIn(values)
    } else if (isSignUpForm) {
      console.log('SignUp values', values.signUp)
      signUp(values)
    }
  }

  //SIGN IN
  const signIn = async (values) => {
    try {
      const requestSignIn = {
        identifier: values.signIn.email,
        password: values.signIn.password
      }

      const response = await fetch(`${API}/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestSignIn)
      })

      const data = await response.json()
      console.log(data)

      if (data?.error) {
        throw data?.error
      } else {
        //local storage
        setToken(data.jwt)
        setLoggedIn(true)

        //set the user in redux store
        dispatch(setUser(data.user))

        //close user modal
        dispatch(setIsUserModalOpen(false))

        navigate('/profile', { replace: true })
      }
    } catch (error) {
      console.error(error)
      setError(error?.message ?? 'Something went wrong!')
    }
  }

  //SIGN UP
  const signUp = async (values) => {}

  return (
    <>
      <Modal
        open={isUserModalOpen}
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
            <Tabs value={value} onChange={handleTabChange}>
              <Tab label="SIGN IN" value="signin" />
              <Tab label="SIGN UP" value="signup" />
            </Tabs>
            <IconButton
              onClick={() => dispatch(setIsUserModalOpen(false))}
              sx={{ color: 'primary.main', m: '0 20px' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema[activeForm]}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => (
              <form onSubmit={handleSubmit}>
                {value === 'signin' && (
                  <SignIn
                    type="signIn"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    error={error}
                  />
                )}
                {value === 'signup' && (
                  <SignUp
                    type="signUp"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    setActiveForm={setActiveForm}
                  />
                )}
              </form>
            )}
          </Formik>
        </Box>
      </Modal>

      {/* IF LOGGED IN - DASHBOARD */}

      {/* TODO:
        - signa upp 1. success 2. fail
        - Om inloggad - visa Profile sida med logga ut knapp
        - Logga ut

        https://strapi.io/blog/strapi-authentication-with-react
        https://docs.strapi.io/dev-docs/plugins/users-permissions#login
      */}
    </>
  )
}

export default UserModal
