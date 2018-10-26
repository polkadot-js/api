// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Constructor, ConstructorDef } from './types';

import { isUndefined } from '@polkadot/util';

import Base from './codec/Base';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import U8aFixed from './codec/U8aFixed';
import { TypeDef, getTypeClass, getTypeDef } from './codec/createType';
import Metadata from './Metadata';

const EventTypes: { [index: string]: Constructor<EventData> } = {};

// // length 0x10 = 0b100000 = 0b100 << 1 = 4
// 10
// // 1
// // phase: ApplyExtrinsic(0)
// 00
// 00000000
// // event: system.ExtrinsicSuccess
// 0000
// // 2
// // phase: ApplyExtrinsic(1)
// 00
// 01000000
// // event: balances.NewAccount(AccountId, AccountIndex, NewAccountOutcome)
// 0100
// 37e027d776cd005c12bcf6722421374a9037167a0ceaf918f341c4ad68d54e59
// 07
// 00000000
// // 3
// // phase: ApplyExtrinsic(1)
// 00
// 01000000
// // balances.Transfer(AccountId, AccountId, Balance, Balance)
// 0102
// d2de7394ae047a5502ad9adb9cc69ff6fe484033bfce874d775da947487cd832
// 37e027d776cd005c12bcf6722421374a9037167a0ceaf918f341c4ad68d54e59
// e8030000000000000000000000000000
// 00000000000000000000000000000000
// // 4
// // phase: ApplyExtrinsic(1)
// 00
// 01000000
// // event: system.ExtrinsicSuccess
// 0000

class EventData<
  // S & T definitions maps to what we have in Struct (naming documented there)
  S extends ConstructorDef = { [index: string]: Constructor<Base> },
  V extends { [K in keyof S]: any } = { [K in keyof S]: any }
> extends Tuple<S> {
  private _typeDef: Array<TypeDef>;

  constructor (Types: S, value: V | Array<any> = {} as V, typeDef: Array<TypeDef>) {
    super(Types, value);

    this._typeDef = typeDef;
  }

  get typeDef (): Array<TypeDef> {
    return this._typeDef;
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
      throw new Error(`Unable to decode event for index ${index}`);
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
          constructor (value?: any) {
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
}
