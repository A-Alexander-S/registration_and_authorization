import { POST_SIGN_UP, POST_SIGN_IN, LOGOUT } from "../constants/actionTypes"

export const postSignUpActions = {
  start: () => ({
    type: POST_SIGN_UP.START
  }),
  success: (data) => ({
    type: POST_SIGN_UP.SUCCESS,
    payload: data
  }),
  failure: (error) => ({
    type: POST_SIGN_UP.FAILURE,
    payload: error
  })
}

export const postSignInActions = {
  start: () => ({
    type: POST_SIGN_IN.START
  }),
  success: (data) => ({
    type: POST_SIGN_IN.SUCCESS,
    payload: data
  }),
  failure: (error) => ({
    type: POST_SIGN_IN.FAILURE,
    payload: error
  }),
}

export const logoutActions = {
  start: () => ({
    type: LOGOUT.START
  }),
}