// get current date in format: mm-dd-yyyy
export function getCurrentDate () {
  return new Date().toISOString().slice(0, 10);
}

// convert date object in format: yyyy-mm-dd
export function formatDate (date) {
  return date.toISOString().slice(0, 10);
}

// extract yyyy-mm-dd from date string
// input: 2021-06-08T21:01:25.914Z
export function extractDate (date) {
  return date.split("T")[0];
}

// get current time in format: yyyy-mm-dd hh:mm:ss
export function getCurrentTime(date) {
  let result = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " ";
  result += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return result;
}

// get user name header
// Adam Geoge -> AG
export function getNameHeader (firstName, lastName) {
  return firstName[0].toUpperCase() + lastName[0].toUpperCase();
}

// extract values from an object
// obj -> []
export function getObjValues (obj) {
  return Object.values(obj);
}

export function goToUrl (func, url) {
  // func.push(url);
  func(url);
}

// turn object key name to separate name
// eg, taskID => Task ID
export function splitKeyName (key) {
  let keyList = key.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1);
  let keyStr = keyList.join(" ");
  return keyStr.charAt(0).toUpperCase() + keyStr.slice(1);
}

// return a string with uppercase first letter
export function uppercaseFirstChar (string="") {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// filter object given fields
// input: ({}, []) => {}
export function filterObjFields (data, filter=[]) {
  let result;
  result = Object.keys(data)
      .filter(key => filter.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});
  return result;
}

// return a list of users who have new messages
// msgId: list of userId who have new messages
export function userHasNewMsg (msgId, userList) {
  return userList.filter(user => msgId.includes(user.userId));
}

// return a list of users who don't have new messages
export function userHasNoMsg (msgId, userList) {
  return userList.filter(user => !msgId.includes(user.userId));
}

// filter messages for selected user based on id
// messages: list of obj; userId: num
export function getChatMessage (messages, userId) {
  return messages.filter(message => message.userId === userId);
}