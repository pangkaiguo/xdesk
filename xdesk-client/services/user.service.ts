import { fetchWrapper } from "helpers";
import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import lodash from "lodash";
import { nextLocalStorage } from "utils";
import Router from "next/router";

const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.apiUrl;
const LOCALSTORAGE_USER_KEY: string = 'user';
const userSubject = new BehaviorSubject(JSON.parse(nextLocalStorage()?.getItem(LOCALSTORAGE_USER_KEY) || '{}'));

export const userService = {
  user: userSubject.asObservable(),
  get userValue() { return userSubject.value },
  login,
  logout,
  signup,
  getAll,
  getById,
  update,
  delete: _delete
};
function login(email: string, password: string) {
  return fetchWrapper.post(`${baseUrl}/auth/login`, { email, password })
    .then(user => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      nextLocalStorage()?.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user));
      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  nextLocalStorage()?.removeItem(LOCALSTORAGE_USER_KEY);
  userSubject.next(null);
  Router.push('/');
}

function signup(user: object) {
  return fetchWrapper.post(`${baseUrl}/auth/signup`, user);
}

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id: number) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id: number, params: BodyInit) {
  return fetchWrapper.patch(`${baseUrl}/${id}`, params)
    .then(x => {
      // update stored user if the logged in user updated their own record
      if (id === userSubject.value.id) {
        // update local storage
        let _user = { ...userSubject.value };
        if (lodash.isObject(params)) {
          _user = { ...params, ...userSubject.value };
        }
        nextLocalStorage()?.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(_user));
        // publish updated user to subscribers
        userSubject.next(_user);
      }
      return x;
    });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: number) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
