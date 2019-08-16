// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV0 } from '../../interfaces/metadata/types';

import Struct from '../../codec/Struct';
import Tuple from '../../codec/Tuple';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';

export class OuterEventEventMetadata extends Tuple {
  public constructor (value?: any) {
    super(['Text', 'Vec<EventMetadataV0>'], value);
  }

  /**
   * @description The [[EventMetadata]]
   */
  public get events (): Vec<EventMetadataV0> {
    return this[1] as Vec<EventMetadataV0>;
  }

  /**
   * @description The name of the section
   */
  public get name (): Text {
    return this[0] as Text;
  }
}

export class OuterEventMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      events: Vec.with(OuterEventEventMetadata)
    }, value);
  }

  /**
   * @description The [[OuterEventEventMetadata]]
   */
  public get events (): Vec<OuterEventEventMetadata> {
    return this.get('events') as Vec<OuterEventEventMetadata>;
  }

  /**
   * @description The name of the event
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
