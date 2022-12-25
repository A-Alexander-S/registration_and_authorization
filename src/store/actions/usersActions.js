import { GET_USERS } from "../constants/actionTypes";

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