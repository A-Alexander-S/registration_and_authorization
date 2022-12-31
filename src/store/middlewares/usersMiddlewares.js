import { LIST_USERS_URL, USER_URL } from "../../constants/api";
import { getUsersActions, getUserActions } from "../actions/usersActions";
import { getApi } from "../../utils/network";

/**
 * Get запрос на получение  пользователей
*/
export const getUsersThunk = (page = 1, per_page = 8) => async (dispatch) => {
  dispatch(getUsersActions.start());

  const res = await getApi(`${LIST_USERS_URL}?page=${page}&per_page=${per_page}`);
  if (!res.ok) {
    dispatch(getUsersActions.failure(res));
  }

  const data = await res.json()

  dispatch(getUsersActions.success(data));
}

/**
 * Get запрос на получение  пользователя по id
*/
export const getUserThunk = (userId) => async (dispatch) => {
  dispatch(getUserActions.start());

  const res = await getApi(`${USER_URL}/${userId}`);
  if (!res.ok) {
    dispatch(getUserActions.failure(res));
  }

  const data = await res.json()
  dispatch(getUserActions.success(data.data));
}