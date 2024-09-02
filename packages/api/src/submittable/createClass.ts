// Copyright 2017-2024 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-dupe-class-members */

import type { Observable } from 'rxjs';
import type { Address, ApplyExtrinsicResult, Call, Extrinsic, ExtrinsicEra, ExtrinsicStatus, Hash, Header, Index, RuntimeDispatchInfo, SignerPayload } from '@polkadot/types/interfaces';
import type { Callback, Codec, CodecClass, ISubmittableResult, SignatureOptions } from '@polkadot/types/types';
import type { Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { ApiBase } from '../base/index.js';
import type { ApiInterfaceRx, ApiTypes, PromiseOrObs, SignerResult } from '../types/index.js';
import type { AddressOrPair, SignerOptions, SubmittableDryRunResult, SubmittableExtrinsic, SubmittablePaymentResult, SubmittableResultResult, SubmittableResultSubscription } from './types.js';

import { catchError, first, map, mergeMap, of, switchMap, tap } from 'rxjs';

import { identity, isBn, isFunction, isNumber, isString, isU8a, objectSpread } from '@polkadot/util';

import { filterEvents, isKeyringPair } from '../util/index.js';
import { SubmittableResult } from './Result.js';

interface SubmittableOptions<ApiType extends ApiTypes> {
  api: ApiInterfaceRx;
  apiType: ApiTypes;
  blockHash?: Uint8Array | undefined;
  decorateMethod: ApiBase<ApiType>['_decorateMethod'];
}

interface UpdateInfo {
  options: SignatureOptions;
  updateId: number;
  signedTransaction: HexString | Uint8Array | null;
}

interface SignerInfo {
  id: number;
  signedTransaction?: HexString | Uint8Array;
}

function makeEraOptions (api: ApiInterfaceRx, registry: Registry, partialOptions: Partial<SignerOptions>, { header, mortalLength, nonce }: { header: Header | null; mortalLength: number; nonce: Index }): SignatureOptions {
  if (!header) {
    if (partialOptions.era && !partialOptions.blockHash) {
      throw new Error('Expected blockHash to be passed alongside non-immortal era options');
    }

    if (isNumber(partialOptions.era)) {
      // since we have no header, it is immortal, remove any option overrides
      // so we only supply the genesisHash and no era to the construction
      delete partialOptions.era;
      delete partialOptions.blockHash;
    }

    return makeSignOptions(api, partialOptions, { nonce });
  }

  return makeSignOptions(api, partialOptions, {
    blockHash: header.hash,
    era: registry.createTypeUnsafe<ExtrinsicEra>('ExtrinsicEra', [{
      current: header.number,
      period: partialOptions.era || mortalLength
    }]),
    nonce
  });
}

function makeSignAndSendOptions (partialOptions?: Partial<SignerOptions> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>): [Partial<SignerOptions>, Callback<ISubmittableResult> | undefined] {
  let options: Partial<SignerOptions> = {};

  if (isFunction(partialOptions)) {
    statusCb = partialOptions;
  } else {
    options = objectSpread({}, partialOptions);
  }

  return [options, statusCb];
}

function makeSignOptions (api: ApiInterfaceRx, partialOptions: Partial<SignerOptions>, extras: { blockHash?: Hash; era?: ExtrinsicEra; nonce?: Index }): SignatureOptions {
  return objectSpread(
    { blockHash: api.genesisHash, genesisHash: api.genesisHash },
    partialOptions,
    extras,
    { runtimeVersion: api.runtimeVersion, signedExtensions: api.registry.signedExtensions, version: api.extrinsicType }
  );
}

function optionsOrNonce (partialOptions: Partial<SignerOptions> = {}): Partial<SignerOptions> {
  return isBn(partialOptions) || isNumber(partialOptions)
    ? { nonce: partialOptions }
    : partialOptions;
}

export function createClass <ApiType extends ApiTypes> ({ api, apiType, blockHash, decorateMethod }: SubmittableOptions<ApiType>): CodecClass<SubmittableExtrinsic<ApiType>> {
  // an instance of the base extrinsic for us to extend
  const ExtrinsicBase = api.registry.createClass('Extrinsic');

  class Submittable extends ExtrinsicBase implements SubmittableExtrinsic<ApiType> {
    readonly #ignoreStatusCb: boolean;

    #transformResult = identity<ISubmittableResult>;

    constructor (registry: Registry, extrinsic: Call | Extrinsic | Uint8Array | string) {
      super(registry, extrinsic, { version: api.extrinsicType });

      this.#ignoreStatusCb = apiType === 'rxjs';
    }

    public get hasDryRun (): boolean {
      return isFunction(api.rpc.system?.dryRun);
    }

    public get hasPaymentInfo (): boolean {
      return isFunction(api.call.transactionPaymentApi?.queryInfo);
    }

    // dry run an extrinsic
    public dryRun (account: AddressOrPair, optionsOrHash?: Partial<SignerOptions> | Uint8Array | string): SubmittableDryRunResult<ApiType> {
      if (!this.hasDryRun) {
        throw new Error('The system.dryRun RPC call is not available in your environment');
      }

      if (blockHash || isString(optionsOrHash) || isU8a(optionsOrHash)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return decorateMethod(
          () => api.rpc.system.dryRun(this.toHex(), blockHash || optionsOrHash as string)
        );
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<ApplyExtrinsicResult> =>
          this.#observeSign(account, optionsOrHash).pipe(
            switchMap(() => api.rpc.system.dryRun(this.toHex()))
          )
      )();
    }

    // calculate the payment info for this transaction (if signed and submitted)
    public paymentInfo (account: AddressOrPair, optionsOrHash?: Partial<SignerOptions> | Uint8Array | string): SubmittablePaymentResult<ApiType> {
      if (!this.hasPaymentInfo) {
        throw new Error('The transactionPaymentApi.queryInfo runtime call is not available in your environment');
      }

      if (blockHash || isString(optionsOrHash) || isU8a(optionsOrHash)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return decorateMethod(
          (): Observable<RuntimeDispatchInfo> =>
            api.callAt(blockHash || optionsOrHash as string).pipe(
              switchMap((callAt): Observable<RuntimeDispatchInfo> => {
                const u8a = this.toU8a();

                return callAt.transactionPaymentApi.queryInfo(u8a, u8a.length);
              })
            )
        );
      }

      const [allOptions] = makeSignAndSendOptions(optionsOrHash);
      const address = isKeyringPair(account) ? account.address : account.toString();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<RuntimeDispatchInfo> =>
          api.derive.tx.signingInfo(address, allOptions.nonce, allOptions.era).pipe(
            first(),
            switchMap((signingInfo): Observable<RuntimeDispatchInfo> => {
              // setup our options (same way as in signAndSend)
              const eraOptions = makeEraOptions(api, this.registry, allOptions, signingInfo);
              const signOptions = makeSignOptions(api, eraOptions, {});

              // 1. Don't use the internal objects inside the new tx (hence toU8a)
              // 2. Don't override the data from existing signed extrinsics
              // 3. Ensure that this object stays intact, with no new sign after operation
              const u8a = api.tx(this.toU8a()).signFake(address, signOptions).toU8a();

              return api.call.transactionPaymentApi.queryInfo(u8a, u8a.length);
            })
          )
      )();
    }

    // send with an immediate Hash result
    public send (): SubmittableResultResult<ApiType>;

    // send with a status callback
    public send (statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // send implementation for both immediate Hash and statusCb variants
    public send (statusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const isSubscription = api.hasSubscriptions && (this.#ignoreStatusCb || !!statusCb);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        isSubscription
          ? this.#observeSubscribe
          : this.#observeSend
      )(statusCb);
    }

    /**
     * @description Signs a transaction, returning `this` to allow chaining. E.g.: `signAsync(...).send()`. Like `.signAndSend` this will retrieve the nonce and blockHash to send the tx with.
     */
    public signAsync (account: AddressOrPair, partialOptions?: Partial<SignerOptions>): PromiseOrObs<ApiType, this> {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<this> =>
          this.#observeSign(account, partialOptions).pipe(
            map(() => this)
          )
      )();
    }

    // signAndSend with an immediate Hash result
    public signAndSend (account: AddressOrPair, partialOptions?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

    // signAndSend with a subscription, i.e. callback provided
    public signAndSend (account: AddressOrPair, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // signAndSend with options and a callback
    public signAndSend (account: AddressOrPair, partialOptions: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // signAndSend implementation for all 3 cases above
    public signAndSend (account: AddressOrPair, partialOptions?: Partial<SignerOptions> | Callback<ISubmittableResult>, optionalStatusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const [options, statusCb] = makeSignAndSendOptions(partialOptions, optionalStatusCb);
      const isSubscription = api.hasSubscriptions && (this.#ignoreStatusCb || !!statusCb);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<Codec> => (
          this.#observeSign(account, options).pipe(
            switchMap((info): Observable<ISubmittableResult> | Observable<Hash> =>
              isSubscription
                ? this.#observeSubscribe(info)
                : this.#observeSend(info)
            )
          ) as Observable<Codec>) // FIXME This is wrong, SubmittableResult is _not_ a codec
      )(statusCb);
    }

    // adds a transform to the result, applied before result is returned
    withResultTransform (transform: (input: ISubmittableResult) => ISubmittableResult): this {
      this.#transformResult = transform;

      return this;
    }

    #observeSign = (account: AddressOrPair, partialOptions?: Partial<SignerOptions>): Observable<UpdateInfo> => {
      const address = isKeyringPair(account) ? account.address : account.toString();
      const options = optionsOrNonce(partialOptions);

      return api.derive.tx.signingInfo(address, options.nonce, options.era).pipe(
        first(),
        mergeMap(async (signingInfo): Promise<UpdateInfo> => {
          const eraOptions = makeEraOptions(api, this.registry, options, signingInfo);
          let updateId = -1;
          let signedTx = null;

          if (isKeyringPair(account)) {
            this.sign(account, eraOptions);
          } else {
            const result = await this.#signViaSigner(address, eraOptions, signingInfo.header);

            updateId = result.id;

            if (result.signedTransaction) {
              signedTx = result.signedTransaction;
            }
          }

          return { options: eraOptions, signedTransaction: signedTx, updateId };
        })
      );
    };

    #observeStatus = (txHash: Hash, status: ExtrinsicStatus): Observable<ISubmittableResult> => {
      if (!status.isFinalized && !status.isInBlock) {
        return of(this.#transformResult(new SubmittableResult({
          status,
          txHash
        })));
      }

      const blockHash = status.isInBlock
        ? status.asInBlock
        : status.asFinalized;

      return api.derive.tx.events(blockHash).pipe(
        map(({ block, events }): ISubmittableResult =>
          this.#transformResult(new SubmittableResult({
            ...filterEvents(txHash, block, events, status),
            status,
            txHash
          }))
        ),
        catchError((internalError: Error) =>
          of(this.#transformResult(new SubmittableResult({
            internalError,
            status,
            txHash
          })))
        )
      );
    };

    #observeSend = (info?: UpdateInfo): Observable<Hash> => {
      return api.rpc.author.submitExtrinsic(info?.signedTransaction || this).pipe(
        tap((hash): void => {
          this.#updateSigner(hash, info);
        })
      );
    };

    #observeSubscribe = (info?: UpdateInfo): Observable<ISubmittableResult> => {
      const txHash = this.hash;

      return api.rpc.author.submitAndWatchExtrinsic(info?.signedTransaction || this).pipe(
        switchMap((status): Observable<ISubmittableResult> =>
          this.#observeStatus(txHash, status)
        ),
        tap((status): void => {
          this.#updateSigner(status, info);
        })
      );
    };

    #signViaSigner = async (address: Address | string | Uint8Array, options: SignatureOptions, header: Header | null): Promise<SignerInfo> => {
      const signer = options.signer || api.signer;

      if (!signer) {
        throw new Error('No signer specified, either via api.setSigner or via sign options. You possibly need to pass through an explicit keypair for the origin so it can be used for signing.');
      }

      const payload = this.registry.createTypeUnsafe<SignerPayload>('SignerPayload', [objectSpread({}, options, {
        address,
        blockNumber: header ? header.number : 0,
        method: this.method
      })]);
      let result: SignerResult;

      if (isFunction(signer.signPayload)) {
        result = await signer.signPayload(payload.toPayload());

        if (result.signedTransaction && !options.withSignedTransaction) {
          throw new Error('The `signedTransaction` field may not be submitted when `withSignedTransaction` is disabled');
        }

        if (result.signedTransaction && options.withSignedTransaction) {
          const ext = this.registry.createTypeUnsafe<Extrinsic>('Extrinsic', [result.signedTransaction]);
          const newSignerPayload = this.registry.createTypeUnsafe<SignerPayload>('SignerPayload', [objectSpread({}, {
            address,
            assetId: ext.assetId && ext.assetId.isSome ? ext.assetId.unwrap().toHex() : null,
            blockHash: payload.blockHash,
            blockNumber: header ? header.number : 0,
            era: ext.era.toHex(),
            genesisHash: payload.genesisHash,
            metadataHash: ext.metadataHash ? ext.metadataHash.toHex() : null,
            method: ext.method.toHex(),
            mode: ext.mode ? ext.mode.toHex() : null,
            nonce: ext.nonce.toHex(),
            runtimeVersion: payload.runtimeVersion,
            signedExtensions: payload.signedExtensions,
            tip: ext.tip ? ext.tip.toHex() : null,
            version: payload.version
          })]);

          if (!ext.isSigned) {
            throw new Error(`When using the signedTransaction field, the transaction must be signed. Recieved isSigned: ${ext.isSigned}`);
          }

          this.#validateSignedTransaction(payload, ext);
          // This is only used for signAsync - signAndSend does not need to adjust the super payload or
          // add the signature.
          super.addSignature(address, result.signature, newSignerPayload.toPayload());

          return { id: result.id, signedTransaction: result.signedTransaction };
        }
      } else if (isFunction(signer.signRaw)) {
        result = await signer.signRaw(payload.toRaw());
      } else {
        throw new Error('Invalid signer interface, it should implement either signPayload or signRaw (or both)');
      }

      // Here we explicitly call `toPayload()` again instead of working with an object
      // (reference) as passed to the signer. This means that we are sure that the
      // payload data is not modified from our inputs, but the signer
      super.addSignature(address, result.signature, payload.toPayload());

      return { id: result.id };
    };

    #updateSigner = (status: Hash | ISubmittableResult, info?: UpdateInfo): void => {
      if (info && (info.updateId !== -1)) {
        const { options, updateId } = info;
        const signer = options.signer || api.signer;

        if (signer && isFunction(signer.update)) {
          signer.update(updateId, status);
        }
      }
    };

    /**
     * When a signer includes `signedTransaction` within the SignerResult this will validate
     * specific fields within the signed extrinsic against the original payload that was passed
     * to the signer.
     */
    #validateSignedTransaction = (signerPayload: SignerPayload, signedExt: Extrinsic): void => {
      const payload = signerPayload.toPayload();
      const errMsg = (field: string) => `signAndSend: ${field} does not match the original payload`;

      if (payload.method !== signedExt.method.toHex()) {
        throw new Error(errMsg('call data'));
      }
    };
  }

  return Submittable;
}
