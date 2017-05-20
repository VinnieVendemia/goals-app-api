# Goals App Api

Backend implementation for the Goals App I'm currently building. RESTFUL api built on node and express.  

Following the instructions in this [Tutorial](https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger) during initial implementation, then adapted to meet use case for my application.

## Usage 

On initial setup, run: 

```
$ npm install
```

To launch the swagger interface: 

```
$ swagger project start -m
```

And to launch the swagger editing interface: 

```
$ swagger project edit
```

Use the DEBUG flag when running locally.  This will update a few configurations to allow the app to run

```
$ DEBUG=true swagger project start
```

You can also specify the NODE_ENV if you want to test against a production/staging database.

```
$ NODE_ENV=true DEBUG=true swagger project start
```

### Configuration 

This application uses a file `config/env.json` locally to configure the DB/etc.  Setup your file as below: 

```json
{
  "dev": {
    "db": {
      "host": "localhost",
      "user": "REDACTED",
      "password": "REDACTED",
      "db": "goalsappdev"
    }
  },
  "prod": {
  }
}
```


### Unit Tests 

This application uses [tape](https://github.com/substack/tape) to run unit-tests found in the `tests` directory.  To run the tests: 

```
$ tape tests/**/*.js | node_modules/.bin/tap-spec
```

### Deploys 

Deploys are currently handled in heroku.  Once a feature has been pushed to master, use the build feature on [heroku](https://dashboard.heroku.com/apps/goals-app-api/deploy/github) to complete the deploy process.

# TODOs 

- Add web-token auth.  Possible [tutorial](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens) to follow.

- Add staging deploy environment
