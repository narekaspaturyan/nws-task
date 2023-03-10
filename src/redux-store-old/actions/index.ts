export const BUY_CAKE = 'BUY_CAKE'
export const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL'

// action is an object with type property
// action-creator  is a function that returns an action

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchUserSuccess = (user: any) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  }
}

export const fetchUserFail = (error: any) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  }
}

export const buyCake = (number?: any) => {
  return {
    type: BUY_CAKE,
    payload: {},
  }
}

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    payload: {},
  }
}

export const fetchUsers = () => {
  return async (dispatch: Function) => {
    dispatch(fetchUserRequest())
    // return function is possible if using thunk middleware
    // do async operations, then call dispatch,
    const resp = await fetch('ex.com')
    const data = await resp.json()
    if (data) {
      dispatch(fetchUserSuccess(data))
    } else {
      dispatch(fetchUserFail(data))
    }
  }
}

//!  how to use
// useEffect(()=>{
//     fetchUsers()
// }, [])
// const userData = useSelector((state: any) => state)
// userData.loading
