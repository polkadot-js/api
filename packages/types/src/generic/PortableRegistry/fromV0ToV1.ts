// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType, Si0Field, Si0LookupTypeId, Si0Path, Si0Type, Si0TypeDefArray, Si0TypeDefBitSequence, Si0TypeDefComposite, Si0TypeDefPrimitive, Si0TypeDefSequence, Si0TypeDefVariant, Si1Field, Si1TypeDef } from '../../interfaces';
import type { Registry } from '../../types';

function convertArray (registry: Registry, { len, type }: Si0TypeDefArray): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Array: {
      len,
      type: type.toNumber()
    }
  });
}

function convertBitSequence (registry: Registry, { bitOrderType, bitStoreType }: Si0TypeDefBitSequence): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    BitSequence: {
      bitOrderType: bitOrderType.toNumber(),
      bitStoreType: bitStoreType.toNumber()
    }
  });
}

function convertCompact (registry: Registry, { type }: Si0TypeDefSequence): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Compact: {
      type: type.toNumber()
    }
  });
}

function convertComposite (registry: Registry, { fields }: Si0TypeDefComposite): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Composite: {
      fields: convertFields(registry, fields)
    }
  });
}

function convertFields (registry: Registry, fields: Si0Field[]): Si1Field[] {
  return fields.map(({ docs, name, type, typeName }) =>
    registry.createType('Si1Field', {
      docs,
      name,
      type: type.toNumber(),
      typeName
    })
  );
}

function convertPhantom (registry: Registry, path: Si0Path): Si1TypeDef {
  console.warn(`Converting phantom type ${path.map((p) => p.toString()).join('::')} to empty tuple`);

  return registry.createType('Si1TypeDef', {
    Tuple: []
  });
}

function convertPrimitive (registry: Registry, prim: Si0TypeDefPrimitive): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Primitive: prim.toString()
  });
}

function convertSequence (registry: Registry, { type }: Si0TypeDefSequence): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Sequence: {
      type: type.toNumber()
    }
  });
}

function convertTuple (registry: Registry, types: Si0LookupTypeId[]): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Tuple: types.map((t) => t.toNumber())
  });
}

function convertVariant (registry: Registry, { variants }: Si0TypeDefVariant): Si1TypeDef {
  return registry.createType('Si1TypeDef', {
    Variant: {
      variants: variants.map(({ discriminant, docs, fields, name }, index) =>
        registry.createType('Si1Variant', {
          docs,
          fields: convertFields(registry, fields),
          index: discriminant.isSome
            ? discriminant.unwrap().toNumber()
            : index,
          name
        })
      )
    }
  });
}

function convertDef (registry: Registry, { def, path }: Si0Type): Si1TypeDef {
  if (def.isArray) {
    return convertArray(registry, def.asArray);
  } else if (def.isBitSequence) {
    return convertBitSequence(registry, def.asBitSequence);
  } else if (def.isCompact) {
    return convertCompact(registry, def.asCompact);
  } else if (def.isComposite) {
    return convertComposite(registry, def.asComposite);
  } else if (def.isPhantom) {
    return convertPhantom(registry, path);
  } else if (def.isPrimitive) {
    return convertPrimitive(registry, def.asPrimitive);
  } else if (def.isSequence) {
    return convertSequence(registry, def.asSequence);
  } else if (def.isTuple) {
    return convertTuple(registry, def.asTuple);
  } else if (def.isVariant) {
    return convertVariant(registry, def.asVariant);
  }

  throw new Error(`Cannot convert type ${def.toString()}`);
}

export function fromV0ToV1 (registry: Registry, types: Si0Type[]): PortableType[] {
  return types.map((t, id) =>
    registry.createType('PortableType', {
      id,
      type: {
        def: convertDef(registry, t),
        docs: [],
        params: t.params.map((p) => p.toNumber()),
        path: t.path.map((p) => p.toString())
      }
    })
  );
}
