var fs = require('fs');

var exists = false;
try {
    exists = fs.existsSync(fs.realpathSync(__dirname + '/../spotify_key/spotify_appkey.key'));
}
catch(e) {
}
if(!exists) {
    require('colors');
    console.error('You need to add your spotify application key to spotify_key directory in order to run tests'.red.bold);
    process.exit(1);
}

var exists = false;
try {
    exists = fs.existsSync(fs.realpathSync(__dirname + '/../spotify_key/passwd.js'));
}
catch(e) {
}
if(!exists) {
    require('colors');
    console.error('You need to add your passwd.js to spotify_key directory in order to run tests'.red.bold);
    console.error("It should export two variables : `login` and `password`".red.bold);
    process.exit(1);
}
