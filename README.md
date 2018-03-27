# GeekBears MEAN Stack BoilerPlate
> A MEAN Stack starter kit

* Note: Be sure to update the boilerplate npm packages constantly for security

## Setup

#### Install: Main Repository
1. `git clone git@github.com:menabrena/Geekbears-Boilerplate.git`
2. `cd Geekbears-Boilerplate`
3. `npm install`
4. Make a copy of the .env file and then run 'git rm --cached', this will ensure that you do not upload the .env file to the repo
5. Double check to remove the .env file from the repo, this file should not be uploaded

## Usage
1. Make sure MongoDB is running (`mongod` from MongoDB bin directory)

### Development
2. Make sure you set the APP_ENVIRONMENT is set to 'development'
3. `node server.js`

### Production/Deployment
2. Make sure you set the APP_ENVIRONMENT is set to 'live'
3. `node server.js`

## Contributing
Contributions/improvements are welcome!

**VERY IMPORTANT**

**As long as you have cloned this repo, you should edit the .gitignore to ignore the .env file since this contains sensitive data from the app, db, etc.**
