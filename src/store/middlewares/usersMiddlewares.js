import { LIST_USERS_URL } from "../../constants/api";
import { getUsersActions } from "../actions/usersActions";
import { getApi } from "../../utils/network";

/**
 * Get запрос на получение  пользователей
*/
export const getUsersThunk = (page = 1, per_page = 8) => async (dispatch) => {
  dispatch(getUsersActions.start());

  const res = await getApi(`${LIST_USERS_URL}?page=${page}&per_page=${per_page}`);
  if (!res.ok) {
    console.log('getUsersThunk res:', res)
    dispatch(getUsersActions.failure(res));
  }

  const data = await res.json()

  dispatch(getUsersActions.success(data));
}