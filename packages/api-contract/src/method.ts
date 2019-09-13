// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';
import { ContractABIFnArg } from './types';

import { createClass } from '@polkadot/types';
// import { assert, isNumber, isString, isUndefined, stringCamelCase } from '@polkadot/util';

// export function typeToString (type: ContractABITypes): string {
//   if (isString(type)) {
//     return type;
//   } else if (Array.isArray(type)) {
//     return `(${type.map((type): string => typeToString(type)).join(',')})`;
//   } else if (type['Option<T>']) {
//     return `Option<${typeToString(type['Option<T>'].T)}>`;
//   } else if (type['Result<T,E>']) {
//     return '()'; // Result is not supported, but only applicable for returns
//   } else if (type['Vec<T>']) {
//     return `Vec<${typeToString(type['Vec<T>'].T)}>`;
//   } else if (type['[T;n]']) {
//     return `[${typeToString(type['[T;n]'].T)};${type['[T;n]'].n}]`;
//   }
//
//   throw new Error(`Unknown type specified ${JSON.stringify(type)}`);
// }

export function createArgClass (args: ContractABIFnArg[], baseDef: Record<string, string>): Constructor {
  return createClass(
    JSON.stringify(
      args.reduce((base: Record<string, any>, { name, type }): Record<string, any> => {
        base[name] = type;

        return base;
      }, baseDef)
    )
  );
}

// export function createArgs (_: string, method: Partial<ContractABIMethod> & ContractABIMethodBase): ContractABIFnArg[] {
//   return method.args.map(({ name, type }): ContractABIFnArg => ({
//     name: stringCamelCase(name as string),
//     type: typeToString(type)
//   }));
// }
//
// export function createMethod (name: string, method: Partial<ContractABIMethod> & ContractABIMethodBase, args: ContractABIFnArg[] = createArgs(name, method)): ContractABIFn {
//   const Clazz = createArgClass(args, isUndefined(method.selector) ? {} : { __selector: 'u32' });
//   const baseStruct: { [index: string]: any } = { __selector: method.selector };
//   const encoder = (...params: CodecArg[]): Uint8Array => {
//     assert(params.length === args.length, `Expected ${args.length} arguments to contract ${name}, found ${params.length}`);
//
//     const u8a = new Clazz(
//       args.reduce((mapped, { name }, index): Record<string, CodecArg> => {
//         mapped[name] = params[index];
//
//         return mapped;
//       }, { ...baseStruct })
//     ).toU8a();
//
//     return Compact.addLengthPrefix(u8a);
//   };
//
//   const fn = (encoder as ContractABIFn);
//
//   fn.args = args;
//   fn.isConstant = !(method.mutates || false);
//   if (!isNumber(method.return_type)) {
//     fn.type = method.return_type ? method.return_type) : null;
//   }
//
//   return fn;
// }
