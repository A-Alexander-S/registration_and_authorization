import { POST_SIGN_UP, LOGOUT } from "../constants/actionTypes";
import { setToken, removeToken } from "../../utils/token";

const initialStore = {
  userData: {
    response: null,
    isLoading: false,
    error: null
  },
  isLogout: null
}

export default function authReducer(store = initialStore, action) {
  switch (action.type) {
    case POST_SIGN_UP.START: {
      return {
        ...store,
        userData: {
          ...store.userData,
          isLoading: true
        }
      }
    }
    case POST_SIGN_UP.SUCCESS: {
      setToken(action.payload.token);
      return {
        ...store,
        userData: {
          ...store.userData,
          response: action.payload,
          isLoading: false
        }
      }
    }
    case POST_SIGN_UP.FAILURE: {
      return {
        ...store,
        userData: {
          ...store.userData,
          isLoading: false,
          error: action.payload
        }
      }
    }
    case LOGOUT.START: {
      removeToken();
      return {
        ...store,
        isLogout: true
      }
    }
    default:
      return store;
  }
}