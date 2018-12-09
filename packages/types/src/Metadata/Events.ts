// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Vector from '../codec/Vector';
import Text from '../Text';
import Type from '../Type';

class EventMetadataArguments extends Vector.with(Type) {
}

class EventMetadataDocumentation extends Vector.with(Text) {
}

export class EventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      arguments: EventMetadataArguments,
      documentation: EventMetadataDocumentation
    }, value);
  }

  /**
   * @description The arguments of [[Type]]
   */
  get arguments (): Vector<Type> {
    return this.get('arguments') as Vector<Type>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The name for the event
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

class EventMetadataVector extends Vector.with(EventMetadata) {
}

export class OuterEventMetadataEvent extends Tuple {
  constructor (value?: any) {
    super([
      Text,
      EventMetadataVector
    ], value);
  }

  /**
   * @description The [[EventMetadata]]
   */
  get events (): Vector<EventMetadata> {
    return this[1] as Vector<EventMetadata>;
  }

  /**
   * @description The name of the section
   */
  get name (): Text {
    return this[0] as Text;
  }
}

class OuterEventMetadataEvents extends Vector.with(OuterEventMetadataEvent) {
}

export class OuterEventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      events: OuterEventMetadataEvents
    }, value);
  }

  /**
   * @description The [[OuterEventMetadataEvent]]
   */
  get events (): Vector<OuterEventMetadataEvent> {
    return this.get('events') as Vector<OuterEventMetadataEvent>;
  }

  /**
   * @description The name of the event
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}
