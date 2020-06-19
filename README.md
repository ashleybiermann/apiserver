## LAB09- Class 401JS

# HTTP & ReST, API Server

### Author: Ashley Biermann

### Links and Resources

- [submission PR](https://github.com/ashleybiermann/apiserver/pull/5)
- [ci/cd](https://github.com/401-advanced-javascript-ashley-biermann/notes/tree/master/.github/workflows) (GitHub Actions)
- [back-end server url - not yet deployed](http://xyz.com)
- [front-end application - not yet implemented](http://xyz.com)

### Setup

#### `.env` requirements (where applicable)
- `PORT`
- `MONGO_ATLAS_URI`

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use your library (where applicable)
N/A

#### Tests
- Run with `npm test`
- Passing tests: 404.test.js, 500.test.js, middlewares.test.js
- Tests not yet passing: server.test.js

#### UML

day3 - add persistence storage in Mongodb
![added mongo db](/images/apiservermongodb.jpg)

day2 - in memory storage only, using express
![visual](/images/apiserver07-2.jpg)

![overview](/images/apiserver07.jpg)


#### Citations
- Marlene guided me in the DELETE (and consequently the PUT) route functionality
- Garhett and Paul helped me figure out a way to work around type cohersion, so the functionality of :id routes could get started
- Worked with Paul to try to debug the routes that needed :id params
- talked through large concepts with Marlene to gain clarification
- talked with Garhett make sure I understood the more technical parts of Mongodb logic:  I went with a mongo interface and he did not