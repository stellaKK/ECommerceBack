import axios from 'axios';

const mainUrl = "http://localhost:8080/api/";


// get client list
// optional query string: firstName, phone
export function getClientListHttp(getFunc, getFuncSuccess, getFuncError, params) {
  getFunc();
  let filter = "?";
  let temp = [];

  // create query string
  if (Object.keys(params).length > 0) {
    if (typeof params.firstName !== "undefined") {
      temp.push("firstName=" + params.firstName);
    }
    if (typeof params.phone !== "undefined") {
      temp.push("phone=" + params.phone);
    }
    filter += temp.join("&");
  }

  axios.get(mainUrl + "clients" + filter)
      .then(res => {
        getFuncSuccess(res.data);
      })
      .catch(error => {
        getFuncError(error.message);
      });
}

// get a client detail
export function getClientDetailHttp(getFunc, getFuncSuccess, getFuncError, id) {
  getFunc();
  return  axios.get(mainUrl + "clients/client/" + id)
      .then(res => {
        getFuncSuccess(res.data[0]);
      })
      .catch(error => {
        getFuncError(error.message);
      });
}

// update client detail
export function updateClientDetailHttp(updateFunc, updateFuncSuccess, updateFuncError, id, data) {
  updateFunc();
  return axios.post(mainUrl + "clients/client/" + id, data)
      .then(function (response) {
        updateFuncSuccess(response.data);
      })
      .catch(error => {
        updateFuncError(error.message);
      });
}

// create new client
export function createClientDetailHttp(dispatch, func, funcSuccess, funcError, data) {
  dispatch(func());
  return axios.post(mainUrl + "clients/client/", data)
      .then(function (response) {
        dispatch(funcSuccess(response.data._id));
      })
      .catch(error => {
        dispatch(funcError(error.message));
      });
}