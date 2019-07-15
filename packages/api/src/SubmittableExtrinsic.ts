// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable no-dupe-class-members */

import { AccountId, Address, Extrinsic, ExtrinsicStatus, EventRecord, getTypeRegistry, Hash, Header, Index, Method, SignedBlock, Vector, ExtrinsicEra } from '@polkadot/types';
import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes } from './types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { first, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { isBn, isFunction, isNumber, isUndefined } from '@polkadot/util';

import ApiBase from './Base';
import filterEvents from './util/filterEvents';

export interface SubmittableExtrinsic<ApiType> extends IExtrinsic {
  send (): SubmittableResultResult<ApiType>;

  send (statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

  sign (account: IKeyringPair, _options: Partial<SignerOptions>): this;

  signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

  signAndSend (account: IKeyringPair | string | AccountId | Address, options: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ISubmittableResult {
  readonly events: EventRecord[];
  readonly status: ExtrinsicStatus;
  readonly isCompleted: boolean;
  readonly isError: boolean;
  readonly isFinalized: boolean;

  findRecord (section: string, method: string): EventRecord | undefined;
}

interface SubmittableOptions<ApiType> {
  api: ApiInterfaceRx;
  decorateMethod: ApiBase<ApiType>['decorateMethod'];
  type: ApiTypes;
}

export type SubmittableResultResult<ApiType> =
  ApiType extends 'rxjs'
    ? Observable<ISubmittableResult>
    : Promise<Hash>;

export type SubmittableResultSubscription<ApiType> =
  ApiType extends 'rxjs'
    ? Observable<ISubmittableResult>
    : Promise<() => void>;

interface SubmittableResultValue {
  events?: EventRecord[];
  status: ExtrinsicStatus;
}

interface SignerOptions {
  blockHash: AnyU8a;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber;
}

// pick a default - in the case of 4s blocktimes, this translates to 60 seconds
const ONE_MINUTE = 15;
const DEFAULT_MORTAL_LENGTH = 5 * ONE_MINUTE;

export class SubmittableResult implements ISubmittableResult {
  public readonly events: EventRecord[];

  public readonly status: ExtrinsicStatus;

  public constructor ({ events, status }: SubmittableResultValue) {
    this.events = events || [];
    this.status = status;
  }

  public get isCompleted (): boolean {
    return this.isError || this.isFinalized;
  }

  public get isError (): boolean {
    return this.status.isDropped || this.status.isInvalid || this.status.isUsurped;
  }

  public get isFinalized (): boolean {
    return this.status.isFinalized;
  }

  /**
   * @description Finds an EventRecord for the specified method & section
   */
  public findRecord (section: string, method: string): EventRecord | undefined {
    return this.events.find(({ event }): boolean =>
      event.section === section && event.method === method
    );
  }
}

export default function createSubmittableExtrinsic<ApiType> (
  type: ApiTypes,
  api: ApiInterfaceRx,
  decorateMethod: ApiBase<ApiType>['decorateMethod'],
  extrinsic: Method | Uint8Array | string
): SubmittableExtrinsic<ApiType> {
  const DynamicExtrinsic = getTypeRegistry().getOrThrow('Extrinsic') as typeof Extrinsic;

  return new class extends DynamicExtrinsic {
    private _api: ApiInterfaceRx;

    private _decorateMethod: ApiBase<ApiType>['decorateMethod'];

    private _noStatusCb: boolean;

    public constructor (value: Method | Uint8Array | string, options: SubmittableOptions<ApiType>) {
      super(value);
      this._api = options.api;
      this._noStatusCb = options.type === 'rxjs';
      this._decorateMethod = options.decorateMethod;
    }

    private subscribeObservable (updateId?: number): Observable<ISubmittableResult> {
      return (this._api.rpc.author
        .submitAndWatchExtrinsic(this) as Observable<ExtrinsicStatus>)
        .pipe(
          switchMap((status): Observable <ISubmittableResult> =>
            this.statusObservable(status)
          ),
          tap((status): void => {
            if (updateId) {
              this.updateSigner(updateId, status);
            }
          })
        );
    }

    private statusObservable (status: ExtrinsicStatus): Observable<ISubmittableResult> {
      if (!status.isFinalized) {
        const result = new SubmittableResult({ status });

        return of(result);
      }

      const blockHash = status.asFinalized;

      return combineLatest([
        this._api.rpc.chain.getBlock(blockHash) as Observable<SignedBlock>,
        this._api.query.system.events.at(blockHash) as Observable<Vector<EventRecord>>
      ]).pipe(
        map(([signedBlock, allEvents]): SubmittableResult => {
          const result = new SubmittableResult({
            events: filterEvents(this.hash, signedBlock, allEvents),
            status
          });

          return result;
        })
      );
    }

    private sendObservable (updateId?: number): Observable<Hash> {
      return (this._api.rpc.author
        .submitExtrinsic(this) as Observable<Hash>)
        .pipe(
          tap((hash): void => {
            if (updateId) {
              this.updateSigner(updateId, hash);
            }
          })
        );
    }

    private updateSigner (updateId: number, status: Hash | ISubmittableResult): void {
      if (this._api.signer && this._api.signer.update) {
        this._api.signer.update(updateId, status);
      }
    }

    private expandOptions (options: Partial<SignerOptions>): SignatureOptions {
      return {
        blockHash: api.genesisHash,
        version: api.runtimeVersion,
        ...options
      } as unknown as SignatureOptions;
    }

    private setupEraOptions (header: Header | null, options: Partial<SignerOptions>): Partial<SignatureOptions> {
      if (!header) {
        if (isNumber(options.era)) {
          // since we have no header, it is immortal, remove any option overrides
          // so we only supply the genesisHash and no era to the construction
          delete options.era;
          delete options.blockHash;
        }

        return {};
      }

      const { blockNumber, hash } = header;

      return {
        blockHash: hash,
        era: new ExtrinsicEra({
          current: blockNumber,
          period: options.era || DEFAULT_MORTAL_LENGTH
        })
      };
    }

    public send (): SubmittableResultResult<ApiType>;

    public send (statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    public send (statusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      const isSubscription = this._noStatusCb || statusCb;
      return this._decorateMethod(isSubscription ? this.subscribeObservable.bind(this) : this.sendObservable.bind(this))(statusCb);
    }

    public sign (account: IKeyringPair, _options: Partial<SignerOptions>): this {
      // HACK here we actually override nonce if it was specified (backwards compat for
      // the previous signature - don't let userspace break, but allow then time to upgrade)
      const options: Partial<SignerOptions> = isBn(_options) || isNumber(_options)
        ? { nonce: _options as any as number }
        : _options;

      super.sign(account, this.expandOptions(options));

      return this;
    }

    public signAndSend (account: IKeyringPair | string | AccountId | Address, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;

    public signAndSend (account: IKeyringPair | string | AccountId | Address, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    public signAndSend (account: IKeyringPair | string | AccountId | Address, options: Partial<SignerOptions>, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;

    public signAndSend (account: IKeyringPair | string | AccountId | Address, _optionsOrStatus?: Partial<SignerOptions> | Callback<ISubmittableResult>, statusCb?: Callback<ISubmittableResult>): SubmittableResultResult<ApiType> | SubmittableResultSubscription<ApiType> {
      let options: Partial<SignerOptions> = {};

      if (isFunction(_optionsOrStatus)) {
        statusCb = _optionsOrStatus;
      } else {
        options = _optionsOrStatus || {};
      }

      const isSubscription = this._noStatusCb || statusCb;
      const isKeyringPair = isFunction((account as IKeyringPair).sign);
      const address = isKeyringPair ? (account as IKeyringPair).address : account.toString();
      let updateId: number | undefined;

      return this._decorateMethod(
        (): Observable<Codec> => ((
          combineLatest([
            // if we have a nonce already, don't retrieve the latest, use what is there
            isUndefined(options.nonce)
              ? api.query.system.accountNonce<Index>(address)
              : of(new Index(options.nonce)),
            // if we have an era provided already or eraLength is <= 0 (immortal)
            // don't get the latest block, just pass null, handle in mergeMap
            (isUndefined(options.era) || (isNumber(options.era) && options.era > 0))
              ? api.rpc.chain.getHeader() as Observable<Header>
              : of(null)
          ])
        ).pipe(
          first(),
          mergeMap(async ([nonce, header]): Promise<void> => {
            const eraOptions = this.setupEraOptions(header, options);

            if (isKeyringPair) {
              this.sign(account as IKeyringPair, { ...options, ...eraOptions, nonce });
            } else if (api.signer) {
              updateId = await api.signer.sign(this, address, {
                ...this.expandOptions({ ...options, ...eraOptions, nonce }),
                blockNumber: header ? header.blockNumber : new BN(0),
                genesisHash: api.genesisHash
              });
            } else {
              throw new Error('no signer exists');
            }
          }),
          switchMap((): Observable<ISubmittableResult> | Observable<Hash> => {
            return isSubscription
              ? this.subscribeObservable(updateId)
              : this.sendObservable(updateId) as any; // ???
          })
        ) as Observable<Codec>)
      )(statusCb);
    }
  }(extrinsic, { type, api, decorateMethod }) as SubmittableExtrinsic<ApiType>;
}
