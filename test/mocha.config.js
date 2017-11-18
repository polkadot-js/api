// ISC, Copyright 2017 Jaco Greeff

require('../src/polyfill');

const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = chai.expect;
