import { Struct } from "@polkadot/types-codec";
import type { ExtrinsicPayloadValue, ICompact, IExtrinsicSignature, IKeyringPair, INumber, IOption, Registry, SignatureOptions } from "@polkadot/types/types";
import type { ExtrinsicSignatureOptions } from "../types.js";
import { isU8a, objectProperties, objectSpread, stringify, u8aToHex } from "@polkadot/util";
import { EMPTY_U8A } from "../constants.js";
import type { Address, Call, EcdsaSignature, Ed25519Signature, ExtrinsicEra, ExtrinsicSignature, MultiLocation, Sr25519Signature } from "@polkadot/types/interfaces";
import type { HexString } from "@polkadot/util/types";

// Ensure we have enough data for all types of signatures
const FAKE_SIGNATURE = new Uint8Array(256).fill(1);

function toAddress (registry: Registry, address: Address | Uint8Array | string): Address {
  return registry.createTypeUnsafe('Address', [isU8a(address) ? u8aToHex(address) : address]);
}

export class ExtrinsicSignatureV5 extends Struct implements IExtrinsicSignature {
  #signKeys: string[];

  constructor (registry: Registry, value?: ExtrinsicSignatureV5 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    const signTypes = registry.getTransactionExtensionTypes();

    super(
      registry,
      objectSpread(
          // eslint-disable-next-line sort-keys
          { signer: 'Address', signature: 'ExtrinsicSignature', transactionExtensionVersion: 'u8' },
          signTypes
        ),
        ExtrinsicSignatureV5.decodeExtrinsicSignature(value, isSigned)
    );

    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value?: ExtrinsicSignatureV5 | Uint8Array, isSigned = false): ExtrinsicSignatureV5 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof ExtrinsicSignatureV5) {
      return value;
    }

    return isSigned
      ? value
      : EMPTY_U8A;
  }

    /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.isSigned
      ? super.encodedLength
      : 0;
  }

    /**
   * @description `true` if the signature is valid
   */
  public get isSigned (): boolean {
    return !this.signature.isEmpty;
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    // the second case here is when we don't have an enum signature, treat as raw
    return (this.multiSignature.value || this.multiSignature) as Sr25519Signature;
  }

  /**
    * @description The [[Address]] that signed
    */
  public get signer (): Address {
    return this.getT('signer');
  }

  /**
   * @description The raw [[ExtrinsicSignature]]
   */
  public get multiSignature (): ExtrinsicSignature {
    return this.getT('signature');
  }

  //TODO:
  public addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicSignature {
    return this._injectSignature(
      toAddress(this.registry, signer),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [signature]),
      new ExtrinsicPayloadV5(this.registry, payload)
    );
  }

  //TODO:
  public sign(method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    if (!account?.addressRaw) {
      throw new Error(`Expected a valid keypair for signing, found ${stringify(account)}`);
    }

    //TODO: Payload creation
    const payload = this.createPayload(method, options);

    return this._injectSignature(
      toAddress(this.registry, account.addressRaw),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [payload.sign(account)]),
      payload
    );

  }

  //TODO:
  public signFake(method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    if (!address) {
      throw new Error(`Expected a valid address for signing, found ${stringify(address)}`);
    }


    //TODO: Payload creation
    const payload = this.createPayload(method, options);

    return this._injectSignature(
      toAddress(this.registry, address),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [FAKE_SIGNATURE]),
      payload
    );
  }


  protected _injectSignature (_signer: Address, _signature: ExtrinsicSignature, _payload: GenericExtrinsicPayloadV5): IExtrinsicSignature {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The [[Balance]] tip
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The [[u32]] or [[MultiLocation]] assetId
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description The [[u8]] for the TransactionExtension version
   */
  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }

  /**
   * @description the [[u32]] mode
   */
  public get mode (): INumber {
    return this.getT('mode');
  }
}
