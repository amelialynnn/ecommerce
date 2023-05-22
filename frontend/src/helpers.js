import { AUTH_TOKEN, LOGGED_IN } from './constant'

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN)
}

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN)
}

export const setLoggedIn = (status) => {
  localStorage.setItem(LOGGED_IN, status)
}

export const getIsLoggedIn = () => {
  return localStorage.getItem(LOGGED_IN)
}
