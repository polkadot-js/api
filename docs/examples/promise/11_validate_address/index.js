const { encodeAddress, decodeAddress } = require('@polkadot/keyring');
const { isHex, hexToU8a } = require('@polkadot/util');

const address = '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE';

const isValidAddressPolkadotAddress = () => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
    return true;
  } catch (error) {
    return false;
  }
};

const isValid = isValidAddressPolkadotAddress();
console.log(isValid);
