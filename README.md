# Philadelphia Internation Airport - Parking Availability

Displays live parking availability for the Philadelphia Internation Airport garages and lots.

# Building

Requires Node.js (>=4.5.0) and optionally Docker

```sh
$ npm install       # install dependencies
$ npm run dev       # run the development server
$ npm run deploy    # output build to ./dist
$ docker build .    # build a static nginx webserver image from ./dist
$ docker-compose up # build/run the static app image
```

# License

The project is licensed under the MIT license.
