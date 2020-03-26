/* eslint-disable no-dupe-class-members */
// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Call, Extrinsic, ExtrinsicEra, ExtrinsicStatus, Hash, Header, Index, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { Callback, Codec, Constructor, IKeyringPair, Registry, SignatureOptions, ISubmittableResult } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes, SignerResult } from '../types';
import { AddressOrPair, SignerOptions, SubmittableExtrinsic, SubmittablePaymentResult, SubmittableResultResult, SubmittableResultSubscription, SubmittableThis } from './types';

import { Observable, combineLatest, of } from 'rxjs';
import { first, map, mapTo, mergeMap, switchMap, tap } from 'rxjs/operators';
import { assert, isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import { filterEvents, isKeyringPair } from '../util';
import ApiBase from '../base';
import SubmittableResult from './Result';

interface SubmittableOptions<ApiType extends ApiTypes> {
  api: ApiInterfaceRx;
  apiType: ApiTypes;
  decorateMethod: ApiBase<ApiType>['decorateMethod'];
}

// The default for 6s allowing for 5min eras. When translating this to faster blocks -
//   - 4s = (10 / 15) * 5 = 3.33m
//   - 2s = (10 / 30) * 5 = 1.66m
const BLOCKTIME = 6;
const ONE_MINUTE = 60 / BLOCKTIME;
const DEFAULT_MORTAL_LENGTH = 5 * ONE_MINUTE;

export default function createClass <ApiType extends ApiTypes> ({ api, apiType, decorateMethod }: SubmittableOptions<ApiType>): Constructor<SubmittableExtrinsic<ApiType>> {
  // an instance of the base extrinsic for us to extend
  const ExtrinsicBase = api.registry.createClass('Extrinsic');

  return class Submittable extends ExtrinsicBase implements SubmittableExtrinsic<ApiType> {
    readonly #ignoreStatusCb: boolean;

    constructor (registry: Registry, extrinsic: Call | Extrinsic | Uint8Array | string) {
      super(registry, extrinsic, { version: api.extrinsicType });

      this.#ignoreStatusCb = apiType === 'rxjs';
    }

    // calculate the payment info for this transaction (if signed and submitted)
    public paymentInfo (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType> {
      const [allOptions] = this.#makeSignAndSendOptions(options);
      const address = isKeyringPair(account) ? account.address : account.toString();

      return decorateMethod(
        (): Observable<RuntimeDispatchInfo> =>
          this.#getPrelimState(address, allOptions).pipe(
            first(),
            switchMap(([nonce, header]): Observable<RuntimeDispatchInfo> => {
              // setup our options (same way as in signAndSend)
              const eraOptions = this.#makeEraOptions(allOptions, { header, nonce });
              const signOptions = this.#makeSignOptions(eraOptions, {});

              // add a fake signature to the extrinsic
              this.signFake(address, signOptions);

              return api.rpc.payment.queryInfo(this.toHex());
            })
          )
      )();
    }

    // sign a transaction, returning the this to allow chaining, i.e. .sign(...).send()
    public sign (account: IKeyringPair, optionsOrNonce: Partial<SignerOptions>): this {
      super.sign(account, this.#makeSignOptions(this.#optionsOrNonce(optionsOrNonce), {}));

      return this;
    }

    // signs a transaction, returning `this` to allow chaining. E.g.: `sign(...).send()`
    //
    // also supports signing through external signers
    public signAsync (account: AddressOrPair, optionsOrNonce: Partial<SignerOptions>): SubmittableThis<ApiType, this> {
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

    // send with an immediate Hash result
    public send (): SubmittableResultResult<ApiType>;

    // send with a status callback
    public send (statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    // send implementation for both immediate Hash and statusCb variants
    public send (statusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const isSubscription = api.hasSubscriptions && (this.#ignoreStatusCb || !!statusCb);

      return decorateMethod(
        isSubscription
          ? this.#observeSubscribe
          : this.#observeSend
      )(statusCb);
    }

    #getPrelimState = (address: string, options: Partial<SignerOptions>): Observable<[Index, Header | null]> => {
      return combineLatest([
        // if we have a nonce already, don't retrieve the latest, use what is there
        isUndefined(options.nonce)
          ? api.derive.balances.account(address).pipe(
            map(({ accountNonce }): Index => accountNonce)
          )
          : of(this.registry.createType('Index', options.nonce)),
        // if we have an era provided already or eraLength is <= 0 (immortal)
        // don't get the latest block, just pass null, handle in mergeMap
        (isUndefined(options.era) || (isNumber(options.era) && options.era > 0))
          ? api.rpc.chain.getHeader()
          : of(null)
      ]);
    }

    #makeEraOptions = (options: Partial<SignerOptions>, { header, nonce }: { header: Header | null; nonce: Index }): SignatureOptions => {
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
          period: options.era || DEFAULT_MORTAL_LENGTH
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

    #observeSign = (account: AddressOrPair, optionsOrNonce: Partial<SignerOptions>): Observable<number | undefined> => {
      const address = isKeyringPair(account) ? account.address : account.toString();
      const options = this.#optionsOrNonce(optionsOrNonce);
      let updateId: number | undefined;

      return this.#getPrelimState(address, options).pipe(
        first(),
        mergeMap(async ([nonce, header]): Promise<void> => {
          const eraOptions = this.#makeEraOptions(options, { header, nonce });

          if (isKeyringPair(account)) {
            this.sign(account, eraOptions);
          } else {
            updateId = await this.#signViaSigner(address, eraOptions, header);
          }
        }),
        mapTo(updateId)
      );
    }

    #observeStatus = (status: ExtrinsicStatus): Observable<ISubmittableResult> => {
      if (!status.isFinalized && !status.isInBlock) {
        return of(new SubmittableResult({ status }));
      }

      const blockHash = status.isInBlock
        ? status.asInBlock
        : status.asFinalized;

      return combineLatest([
        api.rpc.chain.getBlock(blockHash),
        api.query.system.events.at(blockHash)
      ]).pipe(
        map(([signedBlock, allEvents]): ISubmittableResult =>
          new SubmittableResult({
            events: filterEvents(this.hash, signedBlock, allEvents, status),
            status
          })
        )
      );
    }

    #observeSend = (updateId = -1): Observable<Hash> => {
      return api.rpc.author
        .submitExtrinsic(this)
        .pipe(
          tap((hash): void => {
            this.#updateSigner(updateId, hash);
          })
        );
    }

    #observeSubscribe = (updateId = -1): Observable<ISubmittableResult> => {
      return api.rpc.author
        .submitAndWatchExtrinsic(this)
        .pipe(
          switchMap((status): Observable<ISubmittableResult> =>
            this.#observeStatus(status)
          ),
          tap((status): void => {
            this.#updateSigner(updateId, status);
          })
        );
    }

    // NOTE here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let userspace break, but allow then time to upgrade)
    #optionsOrNonce = (optionsOrNonce: Partial<SignerOptions>): Partial<SignerOptions> => {
      return isBn(optionsOrNonce) || isNumber(optionsOrNonce)
        ? { nonce: optionsOrNonce }
        : optionsOrNonce;
    }

    #signViaSigner = async (address: Address | string | Uint8Array, options: SignatureOptions, header: Header | null): Promise<number> => {
      const signer = options.signer || api.signer;

      assert(signer, 'No signer specified, either via api.setSigner or via sign options');

      const payload = this.registry.createType('SignerPayload', {
        ...options,
        address,
        method: this.method,
        blockNumber: header ? header.number : 0
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
  };
}
