// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg, Constructor, Registry, TypeDef } from '@polkadot/types/types';
import { ContractABIArgBasePre, ContractABIContract, ContractABIContractPre, ContractABIEvent, ContractABIEventPre, ContractABIFn, ContractABIFnArg, ContractABIMessage, ContractABIMessageBase, ContractABIMessagePre, ContractABI, ContractABIMessageCommon, ContractABIPre, ContractABIRange, ContractABIRangePre, ContractABIStorage, ContractABIStorageLayout, ContractABIStorageLayoutPre, ContractABIStoragePre, ContractABIStorageStruct, ContractABIStorageStructPre, ContractABITypePre } from './types';

import { Compact, u32, createClass, encodeType } from '@polkadot/types';
import { assert, hexToU8a, isNumber, isString, isNull, isObject, isUndefined, stringCamelCase, isHex, hexToNumber } from '@polkadot/util';

import MetaRegistry from './MetaRegistry';

// parse a selector, this can be a number (older) or of [<hex>, <hex>, ...]. However,
// just catch everything (since this is now non-standard for u32 anyway)
function parseSelector (registry: Registry, fnname: string, input: ContractABIMessageCommon['selector']): u32 {
  if (isNumber(input)) {
    return registry.createType('u32', input);
  } else if (isHex(input)) {
    return registry.createType('u32', hexToU8a(input));
  } else if (typeof input === 'string') {
    try {
      const array = JSON.parse(input);

      assert(array.length === 4, `${fnname}: Invalid selector length`);

      return registry.createType('u32', Uint8Array.from(
        // the as number[] is here to pacify TS, it doesn't quite know how to handle the cb
        (array as number[]).map((value: string | number): number =>
          isHex(value)
            ? hexToNumber(value.toString())
            : value
        )
      ));
    } catch (e) {
      console.error(e);
    }
  }

  throw new Error(`${fnname}: Unable to parse selector`);
}

function createArgClass (registry: Registry, args: ContractABIFnArg[], baseDef: Record<string, string>): Constructor {
  return createClass(
    registry,
    JSON.stringify(
      args.reduce((base: Record<string, any>, { name, type }): Record<string, any> => {
        base[name] = type.displayName || encodeType(type);

        return base;
      }, baseDef)
    )
  );
}

export default class ContractRegistry extends MetaRegistry {
  // Contract ABI helpers
  public validateArgs (name: string, args: ContractABIArgBasePre[]): void {
    assert(Array.isArray(args), `Expected 'args' to exist on ${name}`);

    args.forEach((arg): void => {
      const unknownKeys = Object.keys(arg).filter((key): boolean => !['name', 'type'].includes(key));

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for ${name}`);
      assert(isNumber(arg.name) && isString(this._stringAt(arg.name)), `${name} args should have valid name `);
      assert(isNumber(arg.type.ty) && isObject(this.typeDefAt(arg.type.ty)), `${name} args should have valid type`);
    });
  }

  public validateConstructors ({ contract: { constructors } }: ContractABIPre): void {
    constructors.forEach((constructor: ContractABIMessagePre, index): void => {
      const unknownKeys = Object.keys(constructor).filter((key): boolean => !['args', 'docs', 'name', 'selector'].includes(key));

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI constructor`);

      this.validateArgs(`constructor ${index}`, constructor.args);
    });
  }

  public validateMessages ({ contract: { messages } }: ContractABIPre): void {
    messages.forEach((message): void => {
      const unknownKeys = Object.keys(message).filter((key): boolean => !['args', 'docs', 'mutates', 'name', 'selector', 'return_type'].includes(key));
      const fnname = `messages.${message.name}`;

      assert(unknownKeys.length === 0, `Unknown keys ${unknownKeys.join(', ')} found in ABI args for messages.${message.name}`);

      const { name, return_type: returnType, selector } = message;

      assert(isNumber(name) && isString(this._stringAt(name)), `Expected name for ${fnname}`);
      assert(isNull(returnType) || (isNumber(returnType.ty) && isObject(this.typeDefAt(returnType.ty))), `Expected return_type for ${fnname}`);

      parseSelector(this.registry, fnname, selector);
      this.validateArgs(fnname, message.args);
    });
  }

  public validateAbi (abi: ContractABIPre): void {
    const unknownKeys = Object.keys(abi.contract).filter((key): boolean => !['constructors', 'docs', 'events', 'messages', 'name'].includes(key));

    assert(unknownKeys.length === 0, `Unknown fields ${unknownKeys.join(', ')} found in ABI`);

    const { contract: { constructors, messages, name } } = abi;

    assert(constructors && messages && isString(this._stringAt(name)), 'ABI should have constructors, messages & name sections');

    this.validateConstructors(abi);
    this.validateMessages(abi);
  }

  public createMessage (name: string, message: Partial<ContractABIMessage> & ContractABIMessageBase): ContractABIFn {
    const args = message.args.map(({ name, type }): ContractABIFnArg => {
      assert(isObject(type), `Invalid type at index ${type}`);

      return {
        name: stringCamelCase(name),
        type
      };
    });

    const Clazz = createArgClass(this.registry, args, isUndefined(message.selector) ? {} : { __selector: 'u32' });
    const baseStruct: { [index: string]: any } = { __selector: isUndefined(message.selector) ? undefined : parseSelector(this.registry, name, message.selector) };

    const encoder = (...params: CodecArg[]): Uint8Array => {
      assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);

      const u8a = new Clazz(
        this.registry,
        args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
          mapped[name] = params[index];

          return mapped;
        }, { ...baseStruct })
      ).toU8a();

      return Compact.addLengthPrefix(u8a);
    };

    const fn = (encoder as ContractABIFn);

    fn.args = args;
    fn.isConstant = !(message.mutates || false);
    fn.type = message.returnType || null;

    return fn;
  }

  public convertAbi ({ contract, storage }: ContractABIPre): ContractABI {
    return {
      contract: this.convertContract(contract),
      storage: this.convertStorage(storage)
    };
  }

  public convertArgs (args: ContractABIArgBasePre[]): any[] {
    return args.map(({ name, type, ...arg }) => ({ ...arg, name: this._stringAt(name), type: this.convertType(type) }));
  }

  public convertType ({ display_name: displayNameIndices, ty }: ContractABITypePre): TypeDef {
    const displayName = this.stringsAt(displayNameIndices).join('::');

    return this.typeDefAt(ty, { displayName });
  }

  public convertContract ({ constructors, events, messages, name, ...contract }: ContractABIContractPre): ContractABIContract {
    return {
      constructors: this.convertConstructors(constructors),
      messages: messages.map((message) => this.convertMessage(message)),
      name: this._stringAt(name),
      ...(events
        ? { events: events.map((event) => this.convertEvent(event)) }
        : {}),
      ...contract
    };
  }

  public convertConstructors (constructors: ContractABIMessagePre[]): ContractABIMessage[] {
    return constructors.map(
      (constructor: ContractABIMessagePre): ContractABIMessage => {
        return this.convertMessage(constructor);
      }
    );
  }

  public convertMessage ({ args, name, return_type: returnType, ...message }: ContractABIMessagePre): ContractABIMessage {
    return {
      ...message,
      args: this.convertArgs(args),
      name: this._stringAt(name),
      returnType: returnType ? this.convertType(returnType) : null
    };
  }

  public convertEvent ({ args }: ContractABIEventPre): ContractABIEvent {
    return {
      args: this.convertArgs(args)
    };
  }

  public convertStorage (storage: ContractABIStoragePre): ContractABIStorage {
    return this.convertStorageStruct(storage);
  }

  public convertStorageLayout (storageLayout: ContractABIStorageLayoutPre): ContractABIStorageLayout {
    if ((storageLayout as ContractABIStorageStructPre)['struct.type']) {
      return this.convertStorageStruct(storageLayout as ContractABIStorageStructPre);
    } else {
      return this.convertStorageRange(storageLayout as ContractABIRangePre);
    }
  }

  public convertStorageStruct ({ 'struct.fields': structFields, 'struct.type': structType }: ContractABIStorageStructPre): ContractABIStorageStruct {
    return {
      'struct.fields': structFields.map(({ layout, name }) => ({
        layout: this.convertStorageLayout(layout),
        name: this._stringAt(name)
      })),
      'struct.type': this.typeDefAt(structType)
    };
  }

  public convertStorageRange ({ 'range.elem_type': type, ...range }: ContractABIRangePre): ContractABIRange {
    return {
      ...range,
      'range.elem_type': this.typeDefAt(type)
    };
  }
}
