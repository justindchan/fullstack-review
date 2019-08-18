const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  login: String,
  url: String,
  description: String,


});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoSchema, callback) => {
  // TODO: Your code here
  var file = new Repo(repoSchema)
  // This function should save a repo or repos to
  // the MongoDB
  file.save(function (err, file) {
    if (err) {
      return console.error(err);
    } else {
      callback();
      console.log(`${file.login} was added`)
    }
  });
}

module.exports.save = save;