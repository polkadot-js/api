import Metadata from '@polkadot/api-codec/Metadata';
import json from '@polkadot/api-codec/Metadata.rpc.json';

import { fromMetadata } from './fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata().fromJSON(json.result);
const newStorage = fromMetadata({}, metadata);

describe('fromMetadata', () => {
  it('should throw if the storage function expects an argument', () => {
    expect(() => newStorage.balances.freeBalance()).toThrowError(/expects one argument/);
  });

  it('should return a value if the storage function does not expect an argument', () => {
    expect(() => newStorage.timestamp.now()).not.toThrow();
  });

  // FIXME check again when we have a valid chain/UI
  it('should return the correct storage key', () => {
    expect(newStorage.balances.freeBalance('5GwPuAgYgP6q58uWTXp4uSg6FwfzQv9HfFZwAFEREUrQjCvy')).toEqual(
      Uint8Array.from([237, 14, 33, 216, 167, 215, 237, 69, 175, 111, 52, 40, 57, 42, 106, 40])
    );
  });
});
