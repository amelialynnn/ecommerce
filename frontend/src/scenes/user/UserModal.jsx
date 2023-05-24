import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import { setIsUserModalOpen } from '../../state'
import { URL_BASE } from '../../constant'
import { setToken, setLoggedIn } from '../../helpers'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Modal, Box, Tabs, Tab, IconButton } from '@mui/material'
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
  const [errorSignIn, setErrorSignIn] = useState('')
  const [errorSignUp, setErrorSignUp] = useState('')
  const [activeForm, setActiveForm] = useState(0)

  const isSignInForm = activeForm === 0
  const isSignUpForm = activeForm === 1

  const isUserModalOpen = useSelector((state) => state.user.isUserModalOpen)

  useEffect(() => {
    //reset errorSignIn and errorSignUp message when user modal is closed
    if (!isUserModalOpen) {
      setErrorSignIn('')
      setErrorSignUp('')
    }
  }, [isUserModalOpen])

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

      const response = await fetch(`${URL_BASE}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestSignIn)
      })

      const data = await response.json()

      if (data?.error) {
        throw data?.error
      } else {
        //local storage
        setToken(data.jwt)
        setLoggedIn(true)

        //close user modal
        dispatch(setIsUserModalOpen(false))

        navigate('/profile', { replace: true })
      }
    } catch (error) {
      console.error(error)
      setErrorSignIn(error?.message ?? 'Something went wrong!')
    }
  }

  //SIGN UP
  const signUp = async (values) => {
    try {
      const requestSignUp = {
        username: values.signUp.username,
        email: values.signUp.email,
        password: values.signUp.password
      }

      const response = await fetch(`${URL_BASE}/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestSignUp)
      })

      const data = await response.json()

      if (data?.error) {
        throw data?.error
      } else {
        //local storage
        setToken(data.jwt)
        setLoggedIn(true)

        //close user modal
        dispatch(setIsUserModalOpen(false))

        navigate('/profile', { replace: true })
      }
    } catch (error) {
      console.error(error)
      setErrorSignUp(error?.message ?? 'Something went wrong!')
    }
  }

  return (
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
                  errorSignIn={errorSignIn}
                  setValue={setValue}
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
                  errorSignUp={errorSignUp}
                  setValue={setValue}
                />
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  )
}

export default UserModal
