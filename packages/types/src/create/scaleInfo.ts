// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableRegistry } from '../interfaces/metadata';
import type { SiLookupTypeId, SiType } from '../interfaces/scaleInfo';

import { assert } from '@polkadot/util';

export function lookupSiType (portable: PortableRegistry, typeIndex: SiLookupTypeId): SiType {
  const type = portable.types[typeIndex.toNumber()];

  assert(type, () => `Unable to find lookupTypeId ${typeIndex.toNumber()} in registry`);

  return type;
}

// export function createSiClass (portable: PortableRegistry, typeIndex: SiLookupTypeId): Constructor {
//   const siType = lookupSiType(portable, typeIndex);
// }

// export function siToTypeDef (portable: PortableRegistry, typeIndex: SiLookupTypeId): TypeDef {
//   const siType = lookupSiType(portable, typeIndex);
//   let typeDef = this.metaTypeDefs[offset];

//   if (!typeDef) {
//     typeDef = this.#extract(this.#getMetaType(typeSpec.type), typeSpec.type);

//     this.metaTypeDefs[offset] = typeDef;
//   }

//   if (typeSpec.displayName && typeSpec.displayName.length) {
//     const displayName = typeSpec.displayName[typeSpec.displayName.length - 1].toString();

//     if (!typeDef.type.startsWith(displayName)) {
//       typeDef = {
//         ...typeDef,
//         displayName,
//         type: PRIMITIVE_ALWAYS.includes(displayName)
//           ? displayName
//           : typeDef.type
//       };
//     }
//   }

//   // Here we protect against the following cases
//   //   - No displayName present, these are generally known primitives
//   //   - displayName === type, these generate circular references
//   //   - displayName Option & type Option<...something...>
//   if (typeDef.displayName && !this.hasType(typeDef.displayName) && !(typeDef.type === typeDef.displayName || typeDef.type.startsWith(`${typeDef.displayName}<`))) {
//     this.register({ [typeDef.displayName]: typeDef.type });
//   }

//   return typeDef;
// }
