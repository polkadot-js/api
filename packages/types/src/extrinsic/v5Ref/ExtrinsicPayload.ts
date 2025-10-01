import { Struct } from "@polkadot/types-codec";
import type { Registry } from "@polkadot/types-codec/types";
import type { ExtrinsicPayloadValue } from "@polkadot/types/types";
import { objectSpread } from "@polkadot/util";
import type { HexString } from "@polkadot/util/types";


export class ExtrinsicPayloadV5 extends Struct {


  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | HexString, includeSignature: boolean = false) {
    console.log("Hi")
    const exTypes = registry.getTransactionExtensionTypes();
    console.log(exTypes);
    const exExtra = registry.getTransactionExtensionExtra();
    console.log(exExtra);

    registry.register(.)



    super(registry, objectSpread(
      { method: 'Bytes' },
      exTypes,
      exExtra
    ), value);
  }
}
