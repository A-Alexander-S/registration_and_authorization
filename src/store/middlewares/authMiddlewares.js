import { REGISTER_URL, SING_IN_URL } from '../../constants/api';
import { postSignUpActions, postSignInActions } from "../actions/authActions";
import { postApi } from "../../utils/network";

/**
 * POST запрос на регистрацию
*/
export const postSignUpThunk = (obj) => async (dispatch) => {
  dispatch(postSignUpActions.start());

  const res = await postApi(REGISTER_URL, obj);
  if (!res.ok) {
    dispatch(postSignUpActions.failure(res));
    return;
  }

  const data = await res.json();
  dispatch(postSignUpActions.success(data));
}

/**
 * POST запрос на аутентификацию
*/
export const postSignInThunk = (obj) => async (dispatch) => {
  dispatch(postSignInActions.start());

  const res = await postApi(SING_IN_URL, obj);
  if (!res.ok) {
    dispatch(postSignInActions.failure(res));
    return;
  }

  const data = await res.json();
  dispatch(postSignInActions.success(data.token));
}