// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Extrinsic from './Extrinsic';
import Method from './Method';

describe('Extrinsic', () => {
  beforeAll(() => {
    Method.injectExtrinsics(extrinsics);
  });

  it('decodes a non-signed properly via fromJSON', () => {
    const extrinsic = new Extrinsic('0x010200ea51b75b00000000');

    expect(extrinsic.isSigned).toEqual(false);
    expect(extrinsic.callIndex).toEqual(new Uint8Array([2, 0]));
    expect(extrinsic.data).toEqual(new Uint8Array([234, 81, 183, 91, 0, 0, 0, 0]));
  });

  it('decodes an actual transaction with indexes', () => {
    const extrinsic = new Extrinsic('0x8110f8e1ebdd3cdef7423d24fe68f3863945ea21c190907d7f3394ddf153f633c77b894af36f7a36e7ec767f4593bfd8d084b66d805605905054327a08ff604187080100000000000000270e0100ff0e6422725af0e9aede3bef6eba77bc87afadf60b9735057ae93801f4c472ad7b00407a10f35a00000000000000000000');

    expect(extrinsic.isSigned).toEqual(true);
    expect(extrinsic.signature.signer.toU8a()).toEqual(new Uint8Array([0x10]));
    expect(extrinsic.signature.signature.toHex()).toEqual('0xf8e1ebdd3cdef7423d24fe68f3863945ea21c190907d7f3394ddf153f633c77b894af36f7a36e7ec767f4593bfd8d084b66d805605905054327a08ff60418708');
    expect(extrinsic.signature.nonce.toNumber()).toEqual(1);
    expect(extrinsic.signature.era.toU8a()).toEqual(new Uint8Array([0x27, 0x0e]));
    expect(extrinsic.callIndex).toEqual(new Uint8Array([1, 0]));
    expect(extrinsic.method.args[0].toHex()).toEqual('0xff0e6422725af0e9aede3bef6eba77bc87afadf60b9735057ae93801f4c472ad7b');
  });
});
