// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem } from './types';

import typeToString from './typeToString';

/**
 * @name signature
 * @signature jsonrpcSignature (method: InterfaceMethodDefinition): string
 * @summary Returns a string representation of the method with inputs and outputs.
 * @description
 * Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.
 * @example
 *   import signature from '@polkadot/params/signature';
 *
 *   signature({ name: 'test_method', params: [ { name: 'dest', type: 'Address' } ], type: 'Address' }); // => test_method (dest: Address): Address
 */
export default function signature<T> ({ name, params, type }: SectionItem<T>): string {
  const inputs = params.map(({ name, type }) =>
    `${name}: ${typeToString(type)}`
  ).join(', ');

  return `${name} (${inputs}): ${typeToString(type)}`;
}
