import { Enum } from "@polkadot/types-codec";
import type { PalletVerifySignatureExtensionVerifySignature } from "@polkadot/types/lookup";
import { hexToU8a, isHex, isObject, isU8a } from "@polkadot/util";

export class GenericVerifySignature extends Enum {
  constructor (registry: Registry, value?: unknown) {
    super(registry, {}, decodeVerifySignature(value as string))
  }
}


/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
function decodeVerifySignature (value:  Uint8Array | string = new Uint8Array()): Uint8Array | Object | undefined {
  if (isU8a(value)) {
    return (!value.length || value[0] === 0)
      ? new Uint8Array([0])
      : new Uint8Array([1, value[0], value[1]]);
  } else if (!value) {
    return new Uint8Array([0]);
  } else if (value instanceof GenericVerifySignature) {
    return decodeVerifySignature(value.toU8a());
  } else if (isHex(value)) {
    return decodeVerifySignature(hexToU8a(value));
  } else if (isObject(value)) {
    //TODO:
  }

  throw new Error('Invalid data passed');
}
