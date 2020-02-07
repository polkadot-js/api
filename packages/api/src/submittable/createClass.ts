/* eslint-disable no-dupe-class-members */
// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountData, Address, Call, ExtrinsicEra, ExtrinsicStatus, Hash, Header, Index, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { Callback, Codec, Constructor, IKeyringPair, ITuple, Registry, SignatureOptions } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes, SignerResult } from '../types';
import { AddressOrPair, SignerOptions, SubmittableExtrinsic, SubmittablePaymentResult, SubmittableResultImpl, SubmittableResultResult, SubmittableResultSubscription, SubmittableThis } from './types';

import { Observable, combineLatest, of } from 'rxjs';
import { first, map, mapTo, mergeMap, switchMap, tap } from 'rxjs/operators';
import { createType, ClassOf } from '@polkadot/types';
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
  const Extrinsic = ClassOf(api.registry, 'Extrinsic');

  return class Submittable extends Extrinsic implements SubmittableExtrinsic<ApiType> {
    private readonly _api: ApiInterfaceRx;

    private readonly _decorateMethod: ApiBase<ApiType>['decorateMethod'];

    private readonly _ignoreStatusCb: boolean;

    constructor (registry: Registry, extrinsic: Call | Uint8Array | string) {
      super(registry, extrinsic, { version: api.extrinsicType });

      this._api = api;
      this._decorateMethod = decorateMethod;
      this._ignoreStatusCb = apiType === 'rxjs';
    }

    // calculate the payment info for this transaction (if signed and submitted)
    public paymentInfo (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType> {
      const [allOptions] = this._makeSignAndSendOptions(options);
      const address = isKeyringPair(account) ? account.address : account.toString();

      return this._decorateMethod(
        (): Observable<RuntimeDispatchInfo> =>
          this._getPrelimState(address, allOptions).pipe(
            first(),
            switchMap(([nonce, header]): Observable<RuntimeDispatchInfo> => {
              // setup our options (same way as in signAndSend)
              const eraOptions = this._makeEraOptions(allOptions, { header, nonce });
              const signOptions = this._makeSignOptions(eraOptions, {});

              // add a fake signature to the extrinsic
              this.signFake(address, signOptions);

              return this._api.rpc.payment.queryInfo(this.toHex());
            })
          )
      )();
    }

    // sign a transaction, returning the this to allow chaining, i.e. .sign(...).send()
    public sign (account: IKeyringPair, optionsOrNonce: Partial<SignerOptions>): this {
      super.sign(account, this._makeSignOptions(this._optionsOrNonce(optionsOrNonce), {}));

      return this;
    }

    // signs a transaction, returning `this` to allow chaining. E.g.: `sign(...).send()`
    //
    // also supports signing through external signers
    public signAsync (account: AddressOrPair, optionsOrNonce: Partial<SignerOptions>): SubmittableThis<ApiType, this> {
      return this._decorateMethod(
        (): Observable<this> =>
          this._signObservable(account, optionsOrNonce).pipe(mapTo(this))
      )();
    }

    // signAndSend with an immediate Hash result
    public signAndSend (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

    // signAndSend with a subscription, i.e. callback provided
    public signAndSend (account: AddressOrPair, statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

    // signAndSend with options and a callback
    public signAndSend (account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

    // signAndSend implementation for all 3 cases above
    public signAndSend (account: AddressOrPair, optionsOrStatus?: Partial<SignerOptions> | Callback<SubmittableResultImpl>, optionalStatusCb?: Callback<SubmittableResultImpl>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const [options, statusCb] = this._makeSignAndSendOptions(optionsOrStatus, optionalStatusCb);
      const isSubscription = this._api.hasSubscriptions && (this._ignoreStatusCb || !!statusCb);

      return this._decorateMethod(
        (): Observable<Codec> => (
          this._signObservable(account, options).pipe(
            switchMap((updateId: number | undefined): Observable<SubmittableResultImpl> | Observable<Hash> =>
              isSubscription
                ? this._subscribeObservable(updateId)
                : this._sendObservable(updateId)
            )
          ) as Observable<Codec>) // FIXME This is wrong, SubmittableResult is _not_ a codec
      )(statusCb);
    }

    // send with an immediate Hash result
    public send (): SubmittableResultResult<ApiType>;

    // send with a status callback
    public send (statusCb: Callback<SubmittableResultImpl>): SubmittableResultSubscription<ApiType>;

    // send implementation for both immediate Hash and statusCb variants
    public send (statusCb?: Callback<SubmittableResultImpl>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const isSubscription = this._api.hasSubscriptions && (this._ignoreStatusCb || !!statusCb);

      return this._decorateMethod(
        isSubscription
          ? this._subscribeObservable
          : this._sendObservable
      )(statusCb);
    }

    private _makeSignAndSendOptions (optionsOrStatus?: Partial<SignerOptions> | Callback<SubmittableResultImpl>, statusCb?: Callback<SubmittableResultImpl>): [Partial<SignerOptions>, Callback<SubmittableResultImpl>?] {
      let options: Partial<SignerOptions> = {};

      if (isFunction(optionsOrStatus)) {
        statusCb = optionsOrStatus;
      } else {
        options = { ...optionsOrStatus };
      }

      return [options, statusCb];
    }

    private _signObservable (account: AddressOrPair, optionsOrNonce: Partial<SignerOptions>): Observable<number | undefined> {
      const address = isKeyringPair(account) ? account.address : account.toString();
      const options = this._optionsOrNonce(optionsOrNonce);
      let updateId: number | undefined;

      return this._getPrelimState(address, options).pipe(
        first(),
        mergeMap(async ([nonce, header]): Promise<void> => {
          const eraOptions = this._makeEraOptions(options, { header, nonce });

          if (isKeyringPair(account)) {
            this.sign(account, eraOptions);
          } else {
            updateId = await this._signViaSigner(address, eraOptions, header);
          }
        }),
        mapTo(updateId)
      );
    }

    private async _signViaSigner (address: Address | string | Uint8Array, options: SignatureOptions, header: Header | null): Promise<number> {
      const signer = options.signer || this._api.signer;

      assert(signer, 'No signer specified, either via api.setSigner or via sign options');

      const payload = createType(this.registry, 'SignerPayload', {
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

    private _makeSignOptions (options: Partial<SignerOptions>, extras: { blockHash?: Hash; era?: ExtrinsicEra; nonce?: Index }): SignatureOptions {
      return {
        blockHash: this._api.genesisHash,
        ...options,
        ...extras,
        genesisHash: this._api.genesisHash,
        runtimeVersion: this._api.runtimeVersion,
        version: this._api.extrinsicType
      } as SignatureOptions;
    }

    private _makeEraOptions (options: Partial<SignerOptions>, { header, nonce }: { header: Header | null; nonce: Index }): SignatureOptions {
      if (!header) {
        if (isNumber(options.era)) {
          // since we have no header, it is immortal, remove any option overrides
          // so we only supply the genesisHash and no era to the construction
          delete options.era;
          delete options.blockHash;
        }

        return this._makeSignOptions(options, { nonce });
      }

      return this._makeSignOptions(options, {
        blockHash: header.hash,
        era: createType(this.registry, 'ExtrinsicEra', {
          current: header.number,
          period: options.era || DEFAULT_MORTAL_LENGTH
        }),
        nonce
      });
    }

    private _getPrelimState (address: string, options: Partial<SignerOptions>): Observable<[Index, Header | null]> {
      return combineLatest([
        // if we have a nonce already, don't retrieve the latest, use what is there
        isUndefined(options.nonce)
          // FIXME This apparently is having issues on latest Kusama for nonce retrieval,
          // hence we are using the accountNonce only
          // ? this._api.rpc.account.nextIndex
          //   ? this._api.rpc.account.nextIndex(address)
          //   : this._api.query.system.accountNonce(address)
          ? this._api.query.system.account
            ? this._api.query.system.account<ITuple<[Index, AccountData]>>(address).pipe(
              map(([nonce]): Index => nonce)
            )
            : this._api.query.system.accountNonce<Index>(address)
          : of(createType(this.registry, 'Index', options.nonce)),
        // if we have an era provided already or eraLength is <= 0 (immortal)
        // don't get the latest block, just pass null, handle in mergeMap
        (isUndefined(options.era) || (isNumber(options.era) && options.era > 0))
          ? this._api.rpc.chain.getHeader()
          : of(null)
      ]);
    }

    private _updateSigner (updateId: number, status: Hash | SubmittableResultImpl): void {
      if ((updateId !== -1) && this._api.signer && this._api.signer.update) {
        this._api.signer.update(updateId, status);
      }
    }

    private _statusObservable (status: ExtrinsicStatus): Observable<SubmittableResultImpl> {
      if (!status.isFinalized) {
        return of(new SubmittableResult({ status }));
      }

      const blockHash = status.asFinalized;

      return combineLatest([
        this._api.rpc.chain.getBlock(blockHash),
        this._api.query.system.events.at(blockHash)
      ]).pipe(
        map(([signedBlock, allEvents]): SubmittableResultImpl =>
          new SubmittableResult({
            events: filterEvents(this.hash, signedBlock, allEvents),
            status
          })
        )
      );
    }

    private _sendObservable = (updateId = -1): Observable<Hash> => {
      return this._api.rpc.author
        .submitExtrinsic(this)
        .pipe(
          tap((hash): void => {
            this._updateSigner(updateId, hash);
          })
        );
    }

    private _subscribeObservable = (updateId = -1): Observable<SubmittableResultImpl> => {
      return this._api.rpc.author
        .submitAndWatchExtrinsic(this)
        .pipe(
          switchMap((status): Observable<SubmittableResultImpl> =>
            this._statusObservable(status)
          ),
          tap((status): void => {
            this._updateSigner(updateId, status);
          })
        );
    }

    // NOTE here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let userspace break, but allow then time to upgrade)
    private _optionsOrNonce = (optionsOrNonce: Partial<SignerOptions>): Partial<SignerOptions> => {
      return isBn(optionsOrNonce) || isNumber(optionsOrNonce)
        ? { nonce: optionsOrNonce }
        : optionsOrNonce;
    }
  };
}
