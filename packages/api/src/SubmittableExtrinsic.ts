// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { Extrinsic, ExtrinsicStatus, Index, Method, RuntimeVersion, SignedBlock } from '@polkadot/types/index';
import { AnyNumber, AnyU8a } from '@polkadot/types/types';
import { ApiInterface$Rx, OnCallFunction, SubmittableSendResult } from './types';

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

type StatusCb = (result: SubmittableSendResult) => any;

export default class SubmittableExtrinsic<OnCall> extends Extrinsic {
  private _api: ApiInterface$Rx;
  private _onCall: OnCallFunction<OnCall>;

  constructor (api: ApiInterface$Rx, onCall: OnCallFunction<OnCall>, extrinsic: Extrinsic | Method) {
    super(extrinsic);

    this._api = api;
    this._onCall = onCall;
  }

  private trackStatus (status: ExtrinsicStatus, statusCb?: StatusCb): Observable<SubmittableSendResult> {
    if (status.type !== 'Finalised') {
      return this._onCall(
        () => of({
          status,
          type: status.type
        }),
        [statusCb],
        false
      ) as unknown as Observable<SubmittableSendResult>;
    }

    const blockHash = status.asFinalised;

    return this._onCall(
      () => combineLatest(
        this._api.rpc.chain.getBlock(blockHash),
        this._api.query.system.events.at(blockHash)
      ).pipe(
        map(([signedBlock, allEvents]) => ({
          events: filterEvents(this.hash, signedBlock as SignedBlock, allEvents as any),
          status,
          type: status.type
        }))
      ),
      [statusCb],
      false
    ) as unknown as Observable<SubmittableSendResult>;
  }

  send (statusCb?: (result: SubmittableSendResult) => any): Observable<SubmittableSendResult> {
    return this._onCall(
      () => (this._api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(switchMap((status) => this.trackStatus(status, statusCb))),
      [statusCb],
      true
    ) as unknown as Observable<SubmittableSendResult>;
  }

  // NOTE with the nonce hack, we don't add a signature overload for 2 reasons -
  //   - it makes it incompatible with the base Extrinsic
  //   - for those using TS, we would like to move them towards the new version
  sign (account: KeyringPair, _options: SignatureOptionsPartial): SubmittableExtrinsic<OnCall> {
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

  signAndSend (account: KeyringPair, statusCb?: StatusCb): Observable<SubmittableSendResult>;
  signAndSend (account: KeyringPair, _options?: Partial<SignatureOptionsPartial> | StatusCb, _statusCb?: StatusCb): Observable<SubmittableSendResult> {
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
              .send(statusCb)
          )
        ),
      [statusCb],
      false
    ) as unknown as Observable<SubmittableSendResult>;
  }
}
