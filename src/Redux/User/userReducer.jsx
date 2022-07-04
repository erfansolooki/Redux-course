import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payLoad };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payLoad };
    default:
      return state;
  }
};

export default userReducer;
