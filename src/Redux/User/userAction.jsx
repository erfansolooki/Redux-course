import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
import axios from "axios";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersSuccess(data) {
  return {
    type: FETCH_USERS_SUCCESS,
    payLoad: data,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payLoad: error,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
