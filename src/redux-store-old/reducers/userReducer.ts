import {
  FETCH_USER_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../actions/index'

const initialState = {
  Loading: false,
  users: [],
  error: '',
}

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      }
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      }
  }
}
