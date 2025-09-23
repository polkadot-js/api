import { Struct } from "@polkadot/types-codec";
import type { Address, Call, ExtrinsicSignature, ExtrinsicSignatureV5 } from "@polkadot/types/interfaces";
import type { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, Registry, SignatureOptions } from "@polkadot/types/types";
import { isU8a } from "@polkadot/util";
import type { HexString } from "@polkadot/util/types";
import type { ExtrinsicOptions } from "../types.js";

export const EXTRINSIC_VERSION = 5;

export interface ExtrinsicValueV5 {
  method?: Call;
  signature?: ExtrinsicSignatureV5;
}

export class GenericExtrinsicV5R extends Struct implements IExtrinsicImpl {
  constructor(registry: Registry, value: Uint8Array, { isSigned }: Partial<ExtrinsicOptions> = {}){
    super(registry, {
      signature: 'ExtrinsicSignatureV5',
      method: 'Call',
    }, GenericExtrinsicV5R.decodeExtrinsic(registry, value, isSigned))
  }

  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array, isSigned = false): ExtrinsicValueV4 {
    if (value instanceof GenericExtrinsicV5R) {
      return value;
    } else if (value instanceof registry.createClassUnsafe<Call>('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createTypeUnsafe<ExtrinsicSignatureV5>('ExtrinsicSignatureV4', [value, { isSigned }]);
      const method = registry.createTypeUnsafe<Call>('Call', [value.subarray(signature.encodedLength)]);
      return {
        method,
        signature
      };
    }

      return value || {};
    }

  public get method (): Call {
    throw new Error("Not implemented");
  }

  public get signature (): ExtrinsicSignatureV5 {
    throw new Error("Not implemented");
  }

  public get version (): number {
    return EXTRINSIC_VERSION;
  }

  addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicImpl {
    throw new Error("Not implemented");
  }

  signFake(address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicImpl {
    throw new Error("Not implemented");
  }

  sign(account: IKeyringPair, options: SignatureOptions): IExtrinsicImpl {
    throw new Error("Not implemented");
  }
}
