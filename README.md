# Video Access Token Server for Yo! Test Project

This server-side application is used to generate the access tokens necessary for using Twilio Video API's.

## Running the server locally

The following environment variables must be supplied in the `.env` file:

| Config Value  | Description |
| :-------------  |:------------- |
Account SID | Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
API Key | Used to authenticate - [generate one here](https://www.twilio.com/console/video/runtime/api-keys).
API Secret | Used to authenticate - [just like the above, you'll get one here](https://www.twilio.com/console/video/runtime/api-keys).

Install dependencies with `yarn install`, and run the server with `node .`

To generate a token: [http://localhost:4000?identity=username&room=roomname]().
