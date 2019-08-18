const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  function cb(err, res, body) {
    if (err) {
      callback (err);
    } else {
      const info = JSON.parse(body);
      callback (null, info);
    }
  }
  request(options, (cb))

// The options object has been provided to help you out,
// but you'll have to fill in the URL

}

module.exports.getReposByUsername = getReposByUsername;

