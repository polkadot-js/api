// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Tuple from '../../codec/Tuple';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';

export class EventMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      args: Vector.with(Type),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The arguments of [[Type]]
   */
  public get args (): Vector<Type> {
    return this.get('args') as Vector<Type>;
  }

  /**
   * @description The arguments of [[Type]]
   * @deprecated Use `.args` instead
   */
  public get arguments (): Vector<Type> {
    return this.args;
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The [[Text]] documentation
   * @deprecated Use `.documentation` instead.
   */
  public get docs (): Vector<Text> {
    return this.documentation;
  }

  /**
   * @description The name for the event
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}

export class OuterEventEventMetadata extends Tuple {
  public constructor (value?: any) {
    super({
      Text,
      'Vec<EventMetadata>': Vector.with(EventMetadata)
    }, value);
  }

  /**
   * @description The [[EventMetadata]]
   */
  public get events (): Vector<EventMetadata> {
    return this[1] as Vector<EventMetadata>;
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
      events: Vector.with(OuterEventEventMetadata)
    }, value);
  }

  /**
   * @description The [[OuterEventEventMetadata]]
   */
  public get events (): Vector<OuterEventEventMetadata> {
    return this.get('events') as Vector<OuterEventEventMetadata>;
  }

  /**
   * @description The name of the event
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
