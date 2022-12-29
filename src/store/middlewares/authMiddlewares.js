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
    console.log('postSignUpThunk data:', res)
    dispatch(postSignUpActions.failure(res));
    return;
  }

  const data = await res.json();
  console.log('postSignUpThunk data:', data)
  dispatch(postSignUpActions.success(data));
}

/**
 * POST запрос на аутентификацию
*/
export const postSignInThunk = (obj) => async (dispatch) => {
  dispatch(postSignInActions.start());

  const res = await postApi(SING_IN_URL, obj);
  if (!res.ok) {
    // console.log('postSignInThunk data:', res)
    dispatch(postSignInActions.failure(res));
    return;
  }

  const data = await res.json();
  // console.log('postSignInThunk data:', data.token)
  dispatch(postSignInActions.success(data.token));
}