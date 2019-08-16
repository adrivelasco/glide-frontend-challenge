/**
 * Checks if a network request came back fine, and throws an error if not
 * @param {Object} response - A response from a network request
 * @returns {Object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response) {
  if(response.status >= 200 && response.status < 300)
    return response;

  const error = new Error(response.statusText);
  error.response = await response.json();
  error.statusCode = response.status;
  throw error;
}

/**
 * Parses the JSON returned by a network request
 *
 * @param {object} response - A response from a network request
 * @returns {object} The parsed JSON from the request
 */
function parseJSON(response) {
  return response.status === 204 || response.status === 205 ? null : response.json();
}

/**
 * Pass url query params
 *
 * @param {object} [params]
 */
function queryParams(params) {
  return Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
}

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 *
 * @param {String} url - The URL we want to request
 * @param {Object} [options] - The options we want to pass to "fetch"
 * @returns {Object} The response data
 */
export default function request(url, options) {
  options = {
    body: JSON.stringify(options.body),
    cache: 'default',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  }

  if(options.queryParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
    delete options.queryParams;
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}