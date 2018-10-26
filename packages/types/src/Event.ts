// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Constructor, ConstructorDef } from './types';

import { isUndefined, u8aToHex } from '@polkadot/util';

import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import U8aFixed from './codec/U8aFixed';
import { TypeDef, getTypeClass, getTypeDef } from './codec/createType';
import Metadata from './Metadata';

const EventTypes: { [index: string]: Constructor<EventData> } = {};

class EventData extends Tuple {
  private _typeDef: Array<TypeDef>;

  constructor (Types: ConstructorDef, value: Uint8Array, typeDef: Array<TypeDef>) {
    super(Types, value);

    this._typeDef = typeDef;
  }

  get typeDef (): Array<TypeDef> {
    return this._typeDef;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }
}

// like methods, we have the [sectionIndex, methodIndex] pairing
class EventIndex extends U8aFixed {
  constructor (value?: any) {
    super(value, 16);
  }
}

export default class Event extends Struct {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor (_value: Uint8Array) {
    const { DataType, value } = Event.decodeEvent(_value);

    super({
      index: EventIndex,
      data: DataType
    }, value);
  }

  static decodeEvent (_value: Uint8Array) {
    const index = _value.subarray(0, 2);
    const DataType = EventTypes[index.toString()];

    if (isUndefined(DataType)) {
      throw new Error(`Unable to decode event for index ${u8aToHex(index)}`);
    }

    return {
      DataType,
      value: {
        index,
        data: _value.subarray(2)
      }
    };
  }

  // This is called/injected by the API on init, allowing a snapshot of
  // the available system events to be used in lookups
  static injectMetadata (metadata: Metadata): void {
    metadata.events.forEach((section, sectionIndex) => {
      section.events.forEach((event, methodIndex) => {
        const eventIndex = new Uint8Array([sectionIndex, methodIndex]);
        const typeDef = event.arguments.map((arg) => getTypeDef(arg));
        const Types = typeDef.reduce((result, def, index) => {
          result[index] = getTypeClass(def);

          return result;
        }, {} as { [index: string]: Constructor });

        EventTypes[eventIndex.toString()] = class extends EventData {
          constructor (value: Uint8Array) {
            super(Types, value, typeDef);
          }
        };
      });
    });
  }

  get data (): EventData {
    return this.get('data') as EventData;
  }

  get index (): EventIndex {
    return this.get('index') as EventIndex;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }
}
