import { REGISTER_URL } from '../../constants/api';
import { postSignUpActions } from "../actions/authActions";
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