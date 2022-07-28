/**
 * @typedef {Object} Options
 * @property {string} url - The url to send the request to.
 * @property {string} [apiKey] - The API key to use for the request.
 */

/**
 * @param {Options} options 
 * @returns {Promise<Response>}
 */
export function request(options) {
  return fetch(`${options.url}${options.apiKey ? `?api_key=${options.apiKey}` : ''}`);
}