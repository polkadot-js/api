import { Struct } from "@polkadot/types-codec";
import type { Inspect, Registry } from "@polkadot/types-codec/types";
import type { ExtrinsicPayloadValue } from "@polkadot/types/types";
import { objectSpread } from "@polkadot/util";
import type { HexString } from "@polkadot/util/types";

export class ExtrinsicPayloadV5 extends Struct {


  constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | HexString, includeSignature: boolean = false) {
    const exTypes = registry.getTransactionExtensionTypes();
    console.log(exTypes);
    const exExtra = registry.getTransactionExtensionExtra();
    console.log(exExtra);

    super(registry, objectSpread(
      { method: 'Bytes' },
      exTypes,
      exExtra
    ), value);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return super.inspect({ method: true });
  }
}
