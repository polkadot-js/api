// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Address, ExtrinsicStatus, EventRecord, getTypeRegistry, Hash, Index, Method, SignedBlock, Struct, Vector } from '@plugnet/types';
import { Codec, CodecCallback, IExtrinsic, IKeyringPair, SignatureOptions } from '@plugnet/types/types';
import { ApiInterface$Rx, ApiType, OnCallDefinition, Signer } from './types';

import { Observable, of, combineLatest } from 'rxjs';
import { first, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { assert, isBn, isFunction, isNumber, isUndefined } from '@plugnet/util';

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
      status: ExtrinsicStatus
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
   * @description Finds an EventRecord for the specified method & section
   */
  findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }) =>
      event.section === section && event.method === method
    );
  }
}

export interface SubmittableExtrinsic<CodecResult, SubscriptionResult> extends IExtrinsic {
  send (): SumbitableResultResult<CodecResult, SubscriptionResult>;

  send (statusCb: (result: SubmittableResult) => any): SumbitableResultSubscription<CodecResult, SubscriptionResult>;

  sign (account: IKeyringPair, _options: Partial<SignatureOptions>): this;

  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<Partial<SignatureOptions>>): SumbitableResultResult<CodecResult, SubscriptionResult>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: StatusCb): SumbitableResultSubscription<CodecResult, SubscriptionResult>;
}

export default function createSubmittableExtrinsic<CodecResult, SubscriptionResult> (type: ApiType, api: ApiInterface$Rx, onCall: OnCallDefinition<CodecResult, SubscriptionResult>, extrinsic: Method | Uint8Array | string, trackingCb?: (result: SubmittableResult) => any): SubmittableExtrinsic<CodecResult, SubscriptionResult> {
  const _extrinsic = new (getTypeRegistry().getOrThrow('Extrinsic'))(extrinsic) as SubmittableExtrinsic<CodecResult, SubscriptionResult>;
  const _noStatusCb = type === 'rxjs';

  function updateSigner (updateId: number, status: Hash | SubmittableResult): void {
    if ((updateId !== -1) && api.signer && api.signer.update) {
      api.signer.update(updateId, status);
    }
  }

  function statusObservable (status: ExtrinsicStatus): Observable<SubmittableResult> {
    if (!status.isFinalized) {
      const result = new SubmittableResult({ status });

      trackingCb && trackingCb(result);

      return of(result);
    }

    const blockHash = status.asFinalized;

    return combineLatest([
      api.rpc.chain.getBlock(blockHash) as Observable<SignedBlock>,
      api.query.system.events.at(blockHash) as Observable<Vector<EventRecord>>
    ]).pipe(
      map(([signedBlock, allEvents]) => {
        const result = new SubmittableResult({
          events: filterEvents(_extrinsic.hash, signedBlock, allEvents),
          status
        });

        trackingCb && trackingCb(result);

        return result;
      })
    );
  }

  function sendObservable (updateId: number = -1): Observable<Hash> {
    return (api.rpc.author
      .submitExtrinsic(_extrinsic) as Observable<Hash>)
      .pipe(
        tap((hash) => {
          updateSigner(updateId, hash);
        })
      );
  }

  function subscribeObservable (updateId: number = -1): Observable<SubmittableResult> {
    return (api.rpc.author
      .submitAndWatchExtrinsic(_extrinsic) as Observable<ExtrinsicStatus>)
      .pipe(
        switchMap((status) =>
          statusObservable(status)
        ),
        tap((status) => {
          updateSigner(updateId, status);
        })
      );
  }

  function expandOptions (options: Partial<SignatureOptions>): SignatureOptions {
    return {
      blockHash: api.genesisHash,
      version: api.runtimeVersion,
      ...options
    } as SignatureOptions;
  }

  const signOrigin = _extrinsic.sign;
  Object.defineProperties(
    _extrinsic,
    {
      send: {
        value: function (statusCb?: (result: SubmittableResult) => any): SumbitableResultResult<CodecResult, SubscriptionResult> | SumbitableResultSubscription<CodecResult, SubscriptionResult> {
          const isSubscription = _noStatusCb || !!statusCb;

          return onCall(
            () => isSubscription
              ? subscribeObservable()
              : sendObservable(),
            [],
            statusCb as CodecCallback,
            isSubscription
          ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
        }
      },
      sign: {
        value: function (account: IKeyringPair, _options: Partial<SignatureOptions>): SubmittableExtrinsic<CodecResult, SubscriptionResult> {
          // HACK here we actually override nonce if it was specified (backwards compat for
          // the previous signature - don't let userspace break, but allow then time to upgrade)
          const options: Partial<SignatureOptions> = isBn(_options) || isNumber(_options)
            ? { nonce: _options as any as number }
            : _options;

          signOrigin.apply(_extrinsic, [account, expandOptions(options)]);

          return this;
        }
      },
      signAndSend: {
        value: function (account: IKeyringPair | string | AccountId | Address, _options?: Partial<Partial<SignatureOptions>> | StatusCb, statusCb?: StatusCb): SumbitableResultResult<CodecResult, SubscriptionResult> | SumbitableResultSubscription<CodecResult, SubscriptionResult> {
          let options: Partial<Partial<SignatureOptions>> = {};

          if (isFunction(_options)) {
            statusCb = _options;
          } else {
            options = _options || {};
          }

          const isSubscription = _noStatusCb || !!statusCb;
          const isKeyringPair = isFunction((account as IKeyringPair).address) && isFunction((account as IKeyringPair).sign);
          const address = isKeyringPair ? (account as IKeyringPair).address() : account.toString();
          let updateId: number | undefined;

          return onCall(
            () => ((
              isUndefined(options.nonce)
                ? api.query.system.accountNonce(address) as Observable<Index>
                : of(new Index(options.nonce))
            ).pipe(
              first(),
              mergeMap(async (nonce) => {
                if (isKeyringPair) {
                  this.sign(account as IKeyringPair, { ...options, nonce });
                } else {
                  assert(api.signer, 'no signer exists');

                  updateId = await (api.signer as Signer).sign(_extrinsic, address, {
                    ...expandOptions({ ...options, nonce }),
                    genesisHash: api.genesisHash
                  });
                }
              }),
              switchMap(() => {
                return isSubscription
                  ? subscribeObservable(updateId)
                  : sendObservable(updateId) as any; // ???
              })
            ) as Observable<Codec>),
            [],
            statusCb as CodecCallback,
            isSubscription
          ) as unknown as SumbitableResultSubscription<CodecResult, SubscriptionResult>;
        }
      }
    }
  );

  return _extrinsic;
}
