// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Struct, Vector } from '@polkadot/types/codec';
import { Extrinsic, ExtrinsicStatus, EventRecord, Index, Method, RuntimeVersion, SignedBlock, Text } from '@polkadot/types/index';
import { AnyNumber, AnyU8a, CodecCallback } from '@polkadot/types/types';
import { ApiInterface$Rx, OnCallDefinition } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import filterEvents from './util/filterEvents';

type SignatureOptionsPartial = {
  blockHash?: AnyU8a,
  era?: Uint8Array,
  nonce: AnyNumber,
  version?: RuntimeVersion
};

type StatusCb = (result: SubmittableResult) => any;
// Re-introduce once we use submitExtrinsic as well
// type SumbitableResultResult<CodecResult, SubscriptionResult> =
//   CodecResult extends Observable<any>
//     ? Observable<SubmittableResult>
//     : Promise<SubmittableResult>;

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

export default class SubmittableExtrinsic<CodecResult, SubscriptionResult> extends Extrinsic {
  private _api: ApiInterface$Rx;
  private _onCall: OnCallDefinition<CodecResult, SubscriptionResult>;

  constructor (api: ApiInterface$Rx, onCall: OnCallDefinition<CodecResult, SubscriptionResult>, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
    this._onCall = onCall;
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
          events: filterEvents(this.hash, signedBlock, allEvents),
          status,
          type: status.type
        })
      )
    );
  }

  private sendObservable (): Observable<SubmittableResult> {
    return (this._api.rpc.author
      .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status) =>
          this.statusObservable(status)
        )
      );
  }

  // FIXME We currently only cater for callback in Promise-world, submitExtrinsic -> Hash
  // should also be catered for returning SumbitableResultResult
  send (statusCb?: (result: SubmittableResult) => any): SumbitableResultSubscription<CodecResult, SubscriptionResult> {
    return this._onCall(
      () => this.sendObservable(),
      [],
      statusCb as CodecCallback,
      true
    ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  }

  // NOTE with the nonce hack, we don't add a signature overload for 2 reasons -
  //   - it makes it incompatible with the base Extrinsic
  //   - for those using TS, we would like to move them towards the new version
  sign (account: KeyringPair, _options: SignatureOptionsPartial): SubmittableExtrinsic<CodecResult, SubscriptionResult> {
    // HACK here we actually override nonce if it was specified (backwards compat for
    // the previous signature - don't let userspace break, but allow then time to upgrade)
    const options: SignatureOptionsPartial = isBn(_options) || isNumber(_options)
      ? { nonce: _options as any as number }
      : _options;

    super.sign(account, {
      blockHash: this._api.genesisHash,
      version: this._api.runtimeVersion,
      ...options
    });

    return this;
  }

  // FIXME As per previous FIXME on send, same applies
  signAndSend (account: KeyringPair, statusCb?: StatusCb): SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  signAndSend (account: KeyringPair, _options?: Partial<SignatureOptionsPartial> | StatusCb, _statusCb?: StatusCb): SumbitableResultSubscription<CodecResult, SubscriptionResult> {
    let options: Partial<SignatureOptionsPartial> = {};
    let statusCb: StatusCb | undefined;

    if (isFunction(_options)) {
      statusCb = _options;
    } else {
      options = _options || {};
    }

    return this._onCall(
      () => (
        isUndefined(options.nonce)
          ? this._api.query.system.accountNonce(account.address()) as Observable<Index>
          : of(new Index(options.nonce))
        ).pipe(
          first(),
          switchMap((nonce) =>
            this
              .sign(account, { ...options, nonce })
              .sendObservable(statusCb)
          )
        ),
        [],
        statusCb as CodecCallback,
        true
    ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
  }
}
