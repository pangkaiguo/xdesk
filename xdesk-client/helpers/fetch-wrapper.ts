import getConfig from "next/config";
import { userService } from "services";

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
  get,
  post,
  patch,
  put,
  delete: _delete
};

function get(url: string) {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: _authHeader(url) as HeadersInit
  };
  return fetch(url, requestOptions).then(_handleResponse);
}

function post(url: string, body: any) {
  const requestOptions: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ..._authHeader(url)
    },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(_handleResponse);
}

function patch(url: string, body: BodyInit) {
  const requestOptions: any = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ..._authHeader(url)
    },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(_handleResponse);
}

function put(url: string, body: BodyInit) {
  const requestOptions: any = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ..._authHeader(url)
    },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(_handleResponse);
}


// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string) {
  const requestOptions: any = {
    method: 'DELETE',
    headers: {
      ..._authHeader(url)
    }
  };
  return fetch(url, requestOptions).then(_handleResponse);
}

// helper functions
function _authHeader(url: string) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.access_token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.access_token}` };
  } else {
    return {};
  }
}

function _handleResponse(response: { text: () => Promise<any>; ok: any; status: number; statusText: string; }) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}