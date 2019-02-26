// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash, Index, Method, SignedBlock, Struct, Text, Vector } from '@polkadot/types/index';
import { Codec, CodecCallback, ExtrinsicLike, SignatureOptions } from '@polkadot/types/types';
import getRegistry from '@polkadot/types/codec/typeRegistry';
import { ApiInterface$Rx, ApiType, OnCallDefinition, Signer } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { assert, isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import filterEvents from './util/filterEvents';

type StatusCb = (result: SubmittableResult) => any;

type SumbitableResultResult<CodecResult, SubscriptionResult> =
  CodecResult extends Observable<any>
    ? Observable<SubmittableResult>
     : Promise<Hash>;

type SumbitableResultSubscription<CodecResult, SubscriptionResult> =
  SubscriptionResult extends Observable<any>
    ? Observable<SubmittableResult>
    : Promise<() => void>;

export class SubmittableResult extends Struct {
  constructor (value?: any) {
    super({
      events: Vector.with(EventRecord),
      status: ExtrinsicStatus,
      type: Text
    }, value);
  }

  /**
   * @description the contained events
   */
  get events (): Array<EventRecord> {
    return this.get('events') as Vector<EventRecord>;
  }

  /**
   * @description the status
   */
  get status (): ExtrinsicStatus {
    return this.get('status') as ExtrinsicStatus;
  }

  /**
   * @description the type
   */
  get type (): string {
    return (this.get('type') as Text).toString();
  }
}

export default class SubmittableExtrinsic<CodecResult, SubscriptionResult> {
  private _extrinsic: ExtrinsicLike;
  private _api: ApiInterface$Rx;
  private _onCall: OnCallDefinition<CodecResult, SubscriptionResult>;
  private _noStatusCb?: boolean;

  get extrinsic () {
    return this._extrinsic;
  }

  constructor (type: ApiType, api: ApiInterface$Rx, onCall: OnCallDefinition<CodecResult, SubscriptionResult>, extrinsic: Method) {
    this._extrinsic = new (getRegistry().getOrThrow('Extrinsic'))(extrinsic) as ExtrinsicLike;
    this._noStatusCb = type === 'rxjs';
    this._api = api;
    this._onCall = onCall;
  }

  private updateSigner (updateId: number, status: Hash | SubmittableResult): void {
    if ((updateId !== -1) && this._api.signer && this._api.signer.update) {
      this._api.signer.update(updateId, status);
    }
  }

  private statusObservable (status: ExtrinsicStatus): Observable<SubmittableResult> {
    if (status.type !== 'Finalised') {
      return of(
        new SubmittableResult({
          status,
          type: status.type
        })
      );
    }

    const blockHash = status.asFinalised;

    return combineLatest(
      this._api.rpc.chain.getBlock(blockHash) as Observable<SignedBlock>,
      this._api.query.system.events.at(blockHash) as Observable<Vector<EventRecord>>
    ).pipe(
      map(([signedBlock, allEvents]) =>
        new SubmittableResult({
          events: filterEvents(this.extrinsic.hash, signedBlock, allEvents),
          status,
          type: status.type
        })
      )
    );
  }

  private sendObservable (updateId: number = -1): Observable<Hash> {
    return (this._api.rpc.author
      .submitExtrinsic(this.extrinsic) as Observable<Hash>)
      .pipe(
        tap((hash) => {
          this.updateSigner(updateId, hash);
        })
      );
  }

  private subscribeObservable (updateId: number = -1): Observable<SubmittableResult> {
    return (this._api.rpc.author
      .submitAndWatchExtrinsic(this.extrinsic) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status) =>
          this.statusObservable(status)
        ),
        tap((status) => {
          this.updateSigner(updateId, status);
        })
      );
  }

  private expandOptions (options: Partial<SignatureOptions>): SignatureOptions {
    return {
      blockHash: this._api.genesisHash,
      version: this._api.runtimeVersion,
      ...options
    } as SignatureOptions;
  }

  send (): SumbitableResultResult<CodecResult, SubscriptionResult>;
  send (statusCb: (result: SubmittableResult) => any): SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  send (statusCb?: (result: SubmittableResult) => any): SumbitableResultResult<CodecResult, SubscriptionResult> | SumbitableResultSubscription<CodecResult, SubscriptionResult> {
    const isSubscription = this._noStatusCb || !!statusCb;

    return this._onCall(
      () => isSubscription
        ? this.subscribeObservable()
        : this.sendObservable(),
      [],
      statusCb as CodecCallback,
      isSubscription
    ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  }

  // NOTE with the nonce hack, we don't add a signature overload for 2 reasons -
  //   - it makes it incompatible with the base Extrinsic
  //   - for those using TS, we would like to move them towards the new version
  sign (account: KeyringPair, _options: Partial<SignatureOptions>): SubmittableExtrinsic<CodecResult, SubscriptionResult> {
    // HACK here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let userspace break, but allow then time to upgrade)
    const options: Partial<SignatureOptions> = isBn(_options) || isNumber(_options)
      ? { nonce: _options as any as number }
      : _options;

    this.extrinsic.sign(account, this.expandOptions(options));

    return this;
  }

  signAndSend (account: KeyringPair | string | AccountId | Address, options?: Partial<Partial<SignatureOptions>>): SumbitableResultResult<CodecResult, SubscriptionResult>;
  signAndSend (account: KeyringPair | string | AccountId | Address, statusCb: StatusCb): SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  signAndSend (account: KeyringPair | string | AccountId | Address, _options?: Partial<Partial<SignatureOptions>> | StatusCb, statusCb?: StatusCb): SumbitableResultResult<CodecResult, SubscriptionResult> | SumbitableResultSubscription<CodecResult, SubscriptionResult> {
    let options: Partial<Partial<SignatureOptions>> = {};

    if (isFunction(_options)) {
      statusCb = _options;
    } else {
      options = _options || {};
    }

    const isSubscription = this._noStatusCb || !!statusCb;
    const isKeyringPair = isFunction((account as KeyringPair).address) && isFunction((account as KeyringPair).sign);
    const address = isKeyringPair ? (account as KeyringPair).address() : account.toString();
    let updateId: number | undefined;

    return this._onCall(
      () => ((
        isUndefined(options.nonce)
          ? this._api.query.system.accountNonce(address) as Observable<Index>
          : of(new Index(options.nonce))
      ).pipe(
        first(),
        mergeMap(async (nonce) => {
          if (isKeyringPair) {
            this.sign(account as KeyringPair, { ...options, nonce });
          } else {
            assert(this._api.signer, 'no signer exists');

            updateId = await (this._api.signer as Signer).sign(this.extrinsic, address, this.expandOptions({ ...options, nonce }));
          }
        }),
        switchMap(() => {
          return isSubscription
            ? this.subscribeObservable(updateId)
            : this.sendObservable(updateId) as any; // ???
        })
      ) as Observable<Codec>),
      [],
      statusCb as CodecCallback,
      isSubscription
    ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  }
}
