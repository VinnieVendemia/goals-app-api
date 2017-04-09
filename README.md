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

# TODOs 

- Add web-token auth.  Possible [tutorial](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens) to follow.

- Swap crypto in-memory database for SQL db. 

- Update interface