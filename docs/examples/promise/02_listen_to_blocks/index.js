const exampleApiPromise = require('./exampleApiPromise').default;
const exampleApiRx = require('./exampleApiRx').default;

exampleApiPromise().catch(console.error);
exampleApiRx().catch(console.error);
