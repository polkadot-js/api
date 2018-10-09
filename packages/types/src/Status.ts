import { AnyU8a } from './types';

import blake2Asu8a from '@polkadot/util-crypto/black2/asU8a';

import EnumType from './codec/EnumType';
import U32 from './U32';

type StatusType = {
  value?: string,
  metadata?: AnyU8a,
  subscriber?: string
};

export default class Status extends EnumType<Hash | BlockHash> {
  constructor (index?: number = 0x00, value?: StatusType) {
    super({
      0x00?: Hash,
      0x12?: BlockHash
    }, index, value);
  }

  get status (): StatusType {
    return new StatusType(
      // blah from the Rust code
    );
  }
}
