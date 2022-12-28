import { GET_USERS, GET_USER } from "../constants/actionTypes";

export const getUsersActions = {
  start: () => ({
    type: GET_USERS.START
  }),
  success: (data) => ({
    type: GET_USERS.SUCCESS,
    payload: data
  }),
  failure: (error) => ({
    type: GET_USERS.FAILURE,
    payload: error
  })
}

export const getUserActions = {
  start: () => ({
    type: GET_USER.START
  }),
  success: (data) => ({
    type: GET_USER.SUCCESS,
    payload: data
  }),
  failure: (error) => ({
    type: GET_USER.FAILURE,
    payload: error
  })
}