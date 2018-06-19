# heroku-env-config
This node script sets all your heroku config variables automatically for you rather than you having to set them all manually, extremely helpful if you have a lot of variables and can't afford wasting time setting them manually.

### Usage
* Clone or download the repo and copy the `heroku-env-config.js` to the directory of your project, the file should be at the same directory level of your `.env` file
- Rename the file containing your variables(your `.env` file) to `variables.env`
- Run `node heroku-env-config.js` in the command line to set the variables
- You should see a message when each variable has been set

### Requirements
* Node (6+)
* Heroku cli
* A project hosted on heroku
