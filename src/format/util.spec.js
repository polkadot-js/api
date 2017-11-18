// ISC, Copyright 2017 Jaco Greeff

const sinon = require('sinon');

const { format, formatArray } = require('./util');

describe('format/util', () => {
  let formatters;
  let addressStub;
  let warnSpy;

  beforeEach(() => {
    addressStub = sinon.stub();
    formatters = {
      'Address': addressStub,
      'Exception': () => {
        throw new Error('something went wrong');
      }
    };
    warnSpy = sinon.spy(console, 'warn');
  });

  afterEach(() => {
    console.warn.restore();
  });

  describe('format', () => {
    it('formats unknown types with a fallback', () => {
      expect(
        format(formatters, 'Unknown', 'test')
      ).to.equal('test');
    });

    it('logs a warning with unknown types', () => {
      format(formatters, 'Unknown', 'test');
      expect(warnSpy).to.have.been.calledWith("Unable to find default formatter for 'Unknown', falling back to noop");
    });

    it('formats known types using the supplied formatter', () => {
      format(formatters, 'Address', '0xaddress');

      expect(addressStub).to.have.been.calledWith('0xaddress');
    });

    it('wraps exceptions with the type', () => {
      expect(
        () => format(formatters, 'Exception', 'test')
      ).to.throw(/Error formatting 'test' as 'Exception'/);
    });
  });

  describe('formatArray', () => {
    it('formats each value in an array', () => {
      expect(
        formatArray(formatters, ['Unknown', 'Unknown'], ['test', 'blah'])
      ).to.deep.equal(['test', 'blah']);
    });
  });
});
