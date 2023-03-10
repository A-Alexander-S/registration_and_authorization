import { GET_USERS, GET_USER } from "../constants/actionTypes";

//Получение всех пользователей
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

//Получение пользователя по его id
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