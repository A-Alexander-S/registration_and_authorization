//users
export const GET_USERS = {
  START: '@@users/GET_USERS_START',
  SUCCESS: '@@users/GET_USERS_SUCCESS',
  FAILURE: '@@users/GET_USERS_FAILURE'
}

export const GET_USER = {
  START: '@@users/GET_USER_START',
  SUCCESS: '@@users/GET_USER_SUCCESS',
  FAILURE: '@@users/GET_USER_FAILURE'
}

//auth
export const POST_SIGN_UP = {
  START: '@@auth/POST_SIGN_UP_START',
  SUCCESS: '@@auth/POST_SIGN_UP_SUCCESS',
  FAILURE: '@@auth/POST_SIGN_UP_FAILURE'
}

//logout
export const LOGOUT = {
  START: '@@auth/LOGOUT_START',
}