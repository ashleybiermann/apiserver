## LAB06 - Class 401JS

# HTTP & ReST, API Server

### Author: Ashley Biermann

### Links and Resources

- [submission PR](https://github.com/ashleybiermann/apiserver/pull/4)
- [ci/cd](https://github.com/401-advanced-javascript-ashley-biermann/notes/tree/master/.github/workflows) (GitHub Actions)
- [back-end server url - not yet deployed](http://xyz.com)
- [front-end application - not yet implemented](http://xyz.com)

### Setup

#### `.env` requirements (where applicable)
- `PORT`
- `MONGODB_URI` - URL to the running mongo instance/db

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use your library (where applicable)
N/A

#### Tests
Not Yet Implemented
- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

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