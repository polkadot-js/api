// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../../codec';
import json3 from '../../json/Header.003.json';
import block1 from '../../json/SignedBlock.003.00.json';
import Digest from './Digest';

describe('Digest', (): void => {
  const registry = new TypeRegistry();

  it('decodes logs with consensus', (): void => {
    const digest = new Digest(registry, json3.result.digest);

    expect(digest.logs.length).toEqual(1);

    const log = digest.logs[0];

    expect(log.type).toBe('Consensus');
    expect(log.value.toJSON()).toEqual([
      1634891105,
      '0x69c97e0f00000000479c09f7ace12ed3e1af2dba6cca6831e257e80feef56c7474d6c69bae6f4e8a6e0045a87afe14296992c38b7d55abcbe617c441cd35e8667abbcb1678f31802'
    ]);
  });

  it('filters logs, excluding items', (): void => {
    const logs = new Digest(registry, block1.result.block.header.digest).logsWith('PreRuntime');

    expect(logs.length).toEqual(1);
    expect(logs[0].type).toEqual('PreRuntime');
  });

  it('filters logs, including items', (): void => {
    const logs = new Digest(registry, block1.result.block.header.digest).logsWithout('PreRuntime');

    expect(logs.length).toEqual(1);
    expect(logs[0].type).toEqual('Seal');
  });
});
