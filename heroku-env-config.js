const fs = require('fs');
const exec = require('child_process').exec;

function envParser(string) {
  const text = string.toString();
  const splitArray = text.split('\r\n')
  return splitArray.filter(val => val.length).map(val => val.replace(/['"]/g, "").trim("").split('='));
}

function setenv(name, value) {
  exec(`heroku config:set ${name}=${value}`, function (err, stdout, stderr) {
    if (stderr) {
      console.log(stderr)
    } else {
      console.log(stdout);
    }
  })
}

fs.readFile('./variables.env', function (err, data) {
  const env = envParser(data);
  env.forEach((item) => {
    const [name, value] = item;
    setenv(name,value)
  })
})