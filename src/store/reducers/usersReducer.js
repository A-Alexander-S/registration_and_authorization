import { GET_USERS } from "../constants/actionTypes";

const initialStore = {
  usersData: {
    users: null,
    pagination: null,
    isLoading: false,
    error: null
  }
}

export default function usersReducer(store = initialStore, action) {
  switch (action.type) {
    case GET_USERS.START: {
      return {
        ...store,
        usersData: {
          ...store.usersData,
          isLoading: true
        }
      }
    }
    case GET_USERS.SUCCESS: {
      console.log('usersReducer GET_USERS.SUCCESS res:', action.payload)

      const pagination = {
        page: action.payload.page,
        per_page: action.payload.per_page,
        total: action.payload.total,
        total_pages: action.payload.total_pages,
      }
      return {
        ...store,
        usersData: {
          ...store.usersData,
          users: action.payload.data,
          pagination: pagination,
          isLoading: false
        }
      }
    }
    case GET_USERS.FAILURE: {
      return {
        ...store,
        usersData: {
          ...store.usersData,
          isLoading: false,
          error: action.payload
        }
      }
    }
    default:
      return store;
  }
}