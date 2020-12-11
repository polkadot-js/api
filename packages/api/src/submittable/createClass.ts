// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-dupe-class-members */

import type { Address, ApplyExtrinsicResult, Call, Extrinsic, ExtrinsicEra, ExtrinsicStatus, Hash, Header, Index, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import type { Callback, Codec, Constructor, IKeyringPair, ISubmittableResult, Registry, SignatureOptions } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { ApiInterfaceRx, ApiTypes, SignerResult } from '../types';
import type { AddressOrPair, SignerOptions, SubmittableDryRunResult, SubmittableExtrinsic, SubmittablePaymentResult, SubmittableResultResult, SubmittableResultSubscription, SubmittableThis } from './types';

import { assert, isBn, isFunction, isNumber, isString, isU8a } from '@polkadot/util';
import { of } from '@polkadot/x-rxjs';
import { first, map, mapTo, mergeMap, switchMap, tap } from '@polkadot/x-rxjs/operators';

import { ApiBase } from '../base';
import { filterEvents, isKeyringPair } from '../util';
import { SubmittableResult } from './Result';

interface SubmittableOptions<ApiType extends ApiTypes> {
  api: ApiInterfaceRx;
  apiType: ApiTypes;
  decorateMethod: ApiBase<ApiType>['_decorateMethod'];
}

const identity = <T> (input: T): T => input;

export function createClass <ApiType extends ApiTypes> ({ api, apiType, decorateMethod }: SubmittableOptions<ApiType>): Constructor<SubmittableExtrinsic<ApiType>> {
  // an instance of the base extrinsic for us to extend
  const ExtrinsicBase = api.registry.createClass('Extrinsic');

  class Submittable extends ExtrinsicBase implements SubmittableExtrinsic<ApiType> {
    readonly #ignoreStatusCb: boolean;

    #transformResult: (input: ISubmittableResult) => ISubmittableResult = identity;

    constructor (registry: Registry, extrinsic: Call | Extrinsic | Uint8Array | string) {
      super(registry, extrinsic, { version: api.extrinsicType });

      this.#ignoreStatusCb = apiType === 'rxjs';
    }

    // dry run an extrinsic
    public dryRun (account: AddressOrPair, optionsOrHash?: Partial<SignerOptions> | Uint8Array | string): SubmittableDryRunResult<ApiType> {
      if (isString(optionsOrHash) || isU8a(optionsOrHash)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return decorateMethod(
          () => api.rpc.system.dryRun(this.toHex(), optionsOrHash)
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
      if (isString(optionsOrHash) || isU8a(optionsOrHash)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return decorateMethod(
          (): Observable<RuntimeDispatchInfo> => api.rpc.payment.queryInfo(this.toHex(), optionsOrHash)
        );
      }

      const [allOptions] = this.#makeSignAndSendOptions(optionsOrHash);
      const address = isKeyringPair(account) ? account.address : account.toString();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<RuntimeDispatchInfo> =>
          api.derive.tx.signingInfo(address, allOptions.nonce, allOptions.era).pipe(
            first(),
            switchMap((signingInfo): Observable<RuntimeDispatchInfo> => {
              // setup our options (same way as in signAndSend)
              const eraOptions = this.#makeEraOptions(allOptions, signingInfo);
              const signOptions = this.#makeSignOptions(eraOptions, {});

              this.signFake(address, signOptions);

              return api.rpc.payment.queryInfo(this.toHex());
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
     * @description Sign a transaction, returning the this to allow chaining, i.e. .sign(...).send(). When options, e.g. nonce/blockHash are not specified, it will be inferred. To retrieve eg. nonce use `signAsync` (the preferred interface, this is provided for backwards compatibility)
     * @deprecated
     */
    public sign (account: IKeyringPair, optionsOrNonce?: Partial<SignerOptions>): this {
      super.sign(account, this.#makeSignOptions(this.#optionsOrNonce(optionsOrNonce), {}));

      return this;
    }

    /**
     * @description Signs a transaction, returning `this` to allow chaining. E.g.: `sign(...).send()`. Like `.signAndSend` this will retrieve the nonce and blockHash to send the tx with.
     */
    public signAsync (account: AddressOrPair, optionsOrNonce?: Partial<SignerOptions>): SubmittableThis<ApiType, this> {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<this> =>
          this.#observeSign(account, optionsOrNonce).pipe(mapTo(this))
      )();
    }

    // signAndSend with an immediate Hash result
    public signAndSend (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

    // signAndSend with a subscription, i.e. callback provided
    public signAndSend (account: AddressOrPair, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // signAndSend with options and a callback
    public signAndSend (account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // signAndSend implementation for all 3 cases above
    public signAndSend (account: AddressOrPair, optionsOrStatus?: Partial<SignerOptions> | Callback<ISubmittableResult>, optionalStatusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const [options, statusCb] = this.#makeSignAndSendOptions(optionsOrStatus, optionalStatusCb);
      const isSubscription = api.hasSubscriptions && (this.#ignoreStatusCb || !!statusCb);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
      return decorateMethod(
        (): Observable<Codec> => (
          this.#observeSign(account, options).pipe(
            switchMap((updateId: number | undefined): Observable<ISubmittableResult> | Observable<Hash> =>
              isSubscription
                ? this.#observeSubscribe(updateId)
                : this.#observeSend(updateId)
            )
          ) as Observable<Codec>) // FIXME This is wrong, SubmittableResult is _not_ a codec
      )(statusCb);
    }

    // adds a transform to the result, applied before result is returned
    withResultTransform (transform: (input: ISubmittableResult) => ISubmittableResult): this {
      this.#transformResult = transform;

      return this;
    }

    #makeEraOptions = (options: Partial<SignerOptions>, { header, mortalLength, nonce }: { header: Header | null; mortalLength: number; nonce: Index }): SignatureOptions => {
      if (!header) {
        if (isNumber(options.era)) {
          // since we have no header, it is immortal, remove any option overrides
          // so we only supply the genesisHash and no era to the construction
          delete options.era;
          delete options.blockHash;
        }

        return this.#makeSignOptions(options, { nonce });
      }

      return this.#makeSignOptions(options, {
        blockHash: header.hash,
        era: this.registry.createType('ExtrinsicEra', {
          current: header.number,
          period: options.era || mortalLength
        }),
        nonce
      });
    }

    #makeSignOptions = (options: Partial<SignerOptions>, extras: { blockHash?: Hash; era?: ExtrinsicEra; nonce?: Index }): SignatureOptions => {
      return {
        blockHash: api.genesisHash,
        genesisHash: api.genesisHash,
        ...options,
        ...extras,
        runtimeVersion: api.runtimeVersion,
        signedExtensions: api.registry.signedExtensions,
        version: api.extrinsicType
      } as SignatureOptions;
    }

    #makeSignAndSendOptions = (optionsOrStatus?: Partial<SignerOptions> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>): [Partial<SignerOptions>, Callback<ISubmittableResult>?] => {
      let options: Partial<SignerOptions> = {};

      if (isFunction(optionsOrStatus)) {
        statusCb = optionsOrStatus;
      } else {
        options = { ...optionsOrStatus };
      }

      return [options, statusCb];
    }

    #observeSign = (account: AddressOrPair, optionsOrNonce?: Partial<SignerOptions>): Observable<number | undefined> => {
      const address = isKeyringPair(account) ? account.address : account.toString();
      const options = this.#optionsOrNonce(optionsOrNonce);
      let updateId: number | undefined;

      return api.derive.tx.signingInfo(address, options.nonce, options.era).pipe(
        first(),
        mergeMap(async (signingInfo): Promise<void> => {
          const eraOptions = this.#makeEraOptions(options, signingInfo);

          if (isKeyringPair(account)) {
            this.sign(account, eraOptions);
          } else {
            updateId = await this.#signViaSigner(address, eraOptions, signingInfo.header);
          }
        }),
        mapTo(updateId)
      );
    }

    #observeStatus = (hash: Hash, status: ExtrinsicStatus): Observable<ISubmittableResult> => {
      if (!status.isFinalized && !status.isInBlock) {
        return of(this.#transformResult(new SubmittableResult({ status })));
      }

      const blockHash = status.isInBlock
        ? status.asInBlock
        : status.asFinalized;

      return api.derive.tx.events(blockHash).pipe(
        map(({ block, events }): ISubmittableResult =>
          this.#transformResult(new SubmittableResult({
            events: filterEvents(hash, block, events, status),
            status
          }))
        )
      );
    }

    #observeSend = (updateId = -1): Observable<Hash> => {
      return api.rpc.author.submitExtrinsic(this).pipe(
        tap((hash): void => {
          this.#updateSigner(updateId, hash);
        })
      );
    }

    #observeSubscribe = (updateId = -1): Observable<ISubmittableResult> => {
      const hash = this.hash;

      return api.rpc.author.submitAndWatchExtrinsic(this).pipe(
        switchMap((status): Observable<ISubmittableResult> =>
          this.#observeStatus(hash, status)
        ),
        tap((status): void => {
          this.#updateSigner(updateId, status);
        })
      );
    }

    // NOTE here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let user space break, but allow then time to upgrade)
    #optionsOrNonce = (optionsOrNonce: Partial<SignerOptions> = {}): Partial<SignerOptions> => {
      return isBn(optionsOrNonce) || isNumber(optionsOrNonce)
        ? { nonce: optionsOrNonce }
        : optionsOrNonce;
    }

    #signViaSigner = async (address: Address | string | Uint8Array, options: SignatureOptions, header: Header | null): Promise<number> => {
      const signer = options.signer || api.signer;

      assert(signer, 'No signer specified, either via api.setSigner or via sign options. You possibly need to pass through an explicit keypair for the origin so it can be used for signing.');

      const payload = this.registry.createType('SignerPayload', {
        ...options,
        address,
        blockNumber: header ? header.number : 0,
        method: this.method
      });
      let result: SignerResult;

      if (signer.signPayload) {
        result = await signer.signPayload(payload.toPayload());
      } else if (signer.signRaw) {
        result = await signer.signRaw(payload.toRaw());
      } else {
        throw new Error('Invalid signer interface, it should implement either signPayload or signRaw (or both)');
      }

      // Here we explicitly call `toPayload()` again instead of working with an object
      // (reference) as passed to the signer. This means that we are sure that the
      // payload data is not modified from our inputs, but the signer
      super.addSignature(address, result.signature, payload.toPayload());

      return result.id;
    }

    #updateSigner = (updateId: number, status: Hash | ISubmittableResult): void => {
      if ((updateId !== -1) && api.signer && api.signer.update) {
        api.signer.update(updateId, status);
      }
    }
  }

  return Submittable;
}
