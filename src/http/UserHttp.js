import axios from 'axios';

const mainUrl = "http://localhost:8080/api/";
const transport = axios.create({
  withCredentials: true,
});


// user login
export function userSignInHttp(dispatch, func, funcSuccess, funcError, data) {
  dispatch(func());
  return transport.post(mainUrl + "users/login", data,)
      .then(function (response) {
        dispatch(funcSuccess(response.data));
      })
      .catch(() => {
        dispatch(funcError("Request failed. Please try again."));
      });
}

// user logout
export function userSignOutHttp(dispatch, func, funcSuccess) {
  dispatch(func());
  return transport.post(mainUrl + "users/logout")
      .then(function (response) {
        dispatch(funcSuccess(response.data));
      })
      .catch(error => {
        localStorage.removeItem("username");
        console.log(error.message);
      });
}