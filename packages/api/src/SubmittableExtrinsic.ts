// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Extrinsic, ExtrinsicStatus, EventRecord, Index, Method, SignedBlock, Text } from '@polkadot/types/index';
import { AnyNumber, AnyU8a, CodecCallback } from '@polkadot/types/types';
import { ApiInterface$Rx, OnCallDefinition } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Struct, Vector } from '@polkadot/types/codec';

import filterEvents from './util/filterEvents';

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

  private trackStatus (status: ExtrinsicStatus): Observable<SubmittableResult> {
    if (status.type !== 'Finalised') {
      return this._onCall(
        () => of(
          new SubmittableResult({
            status,
            type: status.type
          })
        )
      ) as unknown as Observable<SubmittableResult>;
    }

    const blockHash = status.asFinalised;

    return this._onCall(
      () => combineLatest(
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
      )
    ) as unknown as Observable<SubmittableResult>;
  }

  send (statusCb?: (result: SubmittableResult) => any): Observable<SubmittableResult> {
    return this._onCall(
      () => (this._api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(switchMap((status) =>
          this.trackStatus(status)
        )),
      [],
      statusCb as CodecCallback
    ) as unknown as Observable<SubmittableResult>;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash?: AnyU8a): SubmittableExtrinsic<CodecResult, SubscriptionResult> {
    super.sign(signerPair, nonce, blockHash || this._api.genesisHash);

    return this;
  }

  signAndSend (signerPair: KeyringPair, statusCb?: (result: SubmittableResult) => any): Observable<SubmittableResult> {
    return this._onCall(
      () => (this._api.query.system
        .accountNonce(signerPair.address()) as Observable<Index>)
        .pipe(
          first(),
          switchMap((nonce) =>
            this.sign(signerPair, nonce as Index).send(statusCb)
          )
        )
    ) as unknown as Observable<SubmittableResult>;
  }
}
