const express = require('express');
const github = require('../helpers/github.js')
const bodyparser = require('body-parser')
const db = require('../database/index.js')
let app = express();

app.use(express.urlencoded())
app.use(bodyparser.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log(req.body.username)
  github.getReposByUsername(req.body.username, (err, data) => {
    if (err) {
      callback (err);
    } else {
      console.log(data)
      data.forEach((repo, index) => {
        db.save({
          login: repo.owner.login,
          url: repo.html_url,
          description: repo.description
        }, () => {index === data.length -1 ? res.sendStatus(200): null})
        console.log(repo)
      })



      // for (const repo of data) {
        //   db.save({
        //     login: repo.owner.login,
        //     url: repo.html_url,
        //     description: repo.description
        //   }, res.send(200))
        // }
    }
  })
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

