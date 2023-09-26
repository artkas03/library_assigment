const BASE_URL = 'http://localhost:3000';

const request = (
  url,
  method = 'GET', 
  data = null,
) => {
  const options = { method };
  const fullUrl = BASE_URL + url;

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(fullUrl, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
};

export const client = {
  post: (url, data) => request(url, 'POST', data),
  get: (url) => request(url),
}