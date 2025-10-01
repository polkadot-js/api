import { Struct } from "@polkadot/types-codec";
import type { AnyTuple, IMethod, Registry } from "@polkadot/types-codec/types";
import type { AnyNumber, AnyU8a, ExtrinsicPayloadValue, IExtrinsicEra, IExtrinsicV5Impl, IKeyringPair, SignatureOptions } from "@polkadot/types/types";
import { compactFromU8a, isHex, isObject, isU8a, objectSpread, u8aToU8a } from "@polkadot/util";
import type { HexString } from "@polkadot/util/types";
import { EMPTY_U8A, UNMASK_VERSION } from "../constants.js";
import type { Address, Call } from "@polkadot/types/interfaces";
import type { Preamble } from "../types.js";
import type { ExtrinsicSignatureV5 } from "./ExtrinsicSignature.js";

interface TransactionExtensionValues {
  era: AnyU8a | IExtrinsicEra;
  nonce: AnyNumber;
  tip: AnyNumber;
  transactionVersion: AnyNumber;
  assetId?: HexString;
  mode?: AnyNumber;
  metadataHash?: AnyU8a;
}

interface ExtrinsicPayloadValuesV5 extends TransactionExtensionValues {
  method: AnyU8a | IMethod<AnyTuple>;
}

interface ExtrinsicValueV5 {
  method?: ExtrinsicPayloadValuesV5;
  signature?: ExtrinsicSignatureV5
  transactionExtensionVersion?: number;
}

function decodeU8a (u8a: Uint8Array) {
  if (!u8a.length) {
    return new Uint8Array();
  }

  const [offset, length] = compactFromU8a(u8a);
  const total = offset + length.toNumber();

  if (total > u8a.length) {
    throw new Error(`Extrinsic: length less  than remainder, expected at least ${total}, found ${u8a.length}`);
  }

  const data = u8a.subarray(offset, total);

  //TODO: handle bare
  // 69 denotes 0b01000101 which is the version and preamble for this Extrinsic
  if (data[0] !== 69) {
    throw new Error(`Extrinsic: incorrect version for General Transactions, expected 5, found ${data[0] & UNMASK_VERSION}`);
  }

  return data.subarray(1);
}

export class ExtrinsicV5 extends Struct implements IExtrinsicV5Impl  {
  #version: number;
  #preamble: string;

  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV5 | HexString | Call, opt?: { version: number }, preamble: Preamble = 'bare') {
    const baseDef = { method: 'Call' };

    let types;
    if (preamble === 'general') {
      const txExtensions = registry.getTransactionExtensionTypes();

      types = objectSpread(
        baseDef,
        { transactionExtensionVersion: 'u8' },
        txExtensions['signature'] ? { signature: 'ExtrinsicSignature' } : {}
      );
    } else {
      types = baseDef;
    }

    super(registry, objectSpread(
      types
    ), ExtrinsicV5.decodeExtrinsic(registry, value));

    this.#version = opt?.version || 0b00000101;
    this.#preamble = preamble;
  }

  //TODO: Fix decoding
  public static decodeExtrinsic (registry: Registry, value?: ExtrinsicValueV5 | Uint8Array | HexString | Call) {
    if (!value) {
     return EMPTY_U8A;
    } else if (value instanceof ExtrinsicV5) {
     return value;
    } else if (isU8a(value) || Array.isArray(value) || isHex(value)) {
     return decodeU8a(u8aToU8a(value));
    } else if (value instanceof registry.createClassUnsafe<Call>('Call')){
      return { method: value };
    } else if (isObject(value)) {
      const { method, transactionExtensionVersion, signature } = value;

      return objectSpread(method || {}, {
        transactionExtensionVersion: transactionExtensionVersion || registry.getTransactionExtensionVersion()
      });
     }

    return {};
   }

  /**
   * @description Checks whether the TransactionExtensions support signing.
   * It true it returns all the transactionExtensions.
  */
  public isSignable ()  {
    const transactionExtensionTypes = this.registry.getTransactionExtensionTypes()

    return transactionExtensionTypes['signature'] !== undefined? transactionExtensionTypes : null;
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method (): Call {
    return this.getT('method');
  }

  /**
   * @description The [[ExtrinsicSignatureV4]]
   */
  public get signature (): ExtrinsicSignatureV5 {
    return this.getT('signature');
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return this.#version;
  }

  public addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): ExtrinsicV5 {
    const transactionExtensions = this.isSignable();

    if(!transactionExtensions) throw new Error('Extrinsic: Signed transactions are not supported by the chain');

    if(this.#preamble == 'bare'){
      this.upgradeToGeneral(transactionExtensions)
    }

    this.signature.addSignature(signer, signature, payload);

    return this
  }



  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV5 {
    const transactionExtensions = this.isSignable();

    if(!transactionExtensions) throw new Error('Extrinsic: Signed transactions are not supported by the chain');

    if(this.#preamble == 'bare'){
      this.upgradeToGeneral(transactionExtensions)
    }

    this.signature.sign(this.method, account, options);
    return this;
  }


  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): ExtrinsicV5 {
    const transactionExtensions = this.isSignable();

    if(!transactionExtensions) throw new Error('Extrinsic: Signed transactions are not supported by the chain');

    if(this.#preamble == 'bare'){
      this.upgradeToGeneral(transactionExtensions)
    }

    this.signature.signFake(this.method, signer, options);
    return this;
  }

  /**
   * @describe Rebuilds the struct but as a GeneralExtrinsic.
   * Meaning that it adds the types for the transactionExtensionVersion and
   * Signature (If VerifySignature tx extension is available) and updates
   * the preamble to be 'general'
   */
  private upgradeToGeneral (transactionExtensions: Record<string, string>) {
    const types: Record<string, string> = objectSpread(
      { method: 'Call' },
      { transactionExtensionVersion: 'u8' },
      transactionExtensions['signature'] ? { signature: 'ExtrinsicSignature' } : {}
    );

    const currentBareExtrinsic = Object.fromEntries(this.entries());

    // Reconstruct struct with expanded types
    const generalExtrinsic = new Struct(this.registry, types, currentBareExtrinsic);

    // Replace contents of this with new values from generalExtrinsic
    for (const [k, v] of generalExtrinsic.entries()) {
      this.set(k, v);
    }

    this.#preamble = 'general';
  }
}
