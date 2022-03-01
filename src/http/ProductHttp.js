import axios from 'axios';

const mainUrl = "http://localhost:8080/api/";

// get client list
// optional query string: firstName, phone
export function getProductListHttp(getFunc, getFuncSuccess, getFuncError, params={}) {
  getFunc();
  let filter = "?";
  let temp = [];
  let keys = Object.keys(params);

  // create query string
  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      if (typeof params[keys[i]] !== "undefined" || params[keys[i]] !== "") {
        temp.push(keys[i] + "=" + params[keys[i]]);
      }
    }
    filter += temp.join("&");
  }

  axios.get(mainUrl + "products" + filter)
      .then(res => {
        getFuncSuccess(res.data);
      })
      .catch(error => {
        getFuncError(error.message);
      });
}