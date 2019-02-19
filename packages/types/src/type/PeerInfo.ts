// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import USize from '../primitive/USize';
import BlockNumber from './BlockNumber';
import Hash from './Hash';

const JSON_MAP = new Map([
  ['bestHash', 'best_hash'],
  ['bestNumber', 'best_number'],
  ['protocolVersion', 'protocol_version'],
  ['peerId', 'peer_id']
]);

/**
 * @name PeerInfo
 * @description
 * A system peer info indicator, reported back over RPC
 */
export default class PeerInfo extends Struct {
  constructor (value?: any) {
    super({
      index: USize,
      peerId: Text,
      roles: Text,
      protocolVersion: U32,
      bestHash: Hash,
      bestNumber: BlockNumber
    }, value, JSON_MAP);
  }

  /**
   * @description The best block hash for the peer
   */
  get bestHash (): Hash {
    return this.get('bestHash') as Hash;
  }

  /**
   * @description The best block hash for the peer
   */
  get bestNumber (): BlockNumber {
    return this.get('bestNumber') as BlockNumber;
  }

  /**
   * @description The index of the peer in our list
   */
  get index (): USize {
    return this.get('index') as USize;
  }

  /**
   * @description The p2p network id for the peer
   */
  get peerId (): Text {
    return this.get('peerId') as Text;
  }

  /**
   * @description The index of the peer in our list
   */
  get protocolVersion (): U32 {
    return this.get('protocolVersion') as U32;
  }

  /**
   * @description The roles of the peer on the network
   */
  get roles (): Text {
    return this.get('roles') as Text;
  }
}
