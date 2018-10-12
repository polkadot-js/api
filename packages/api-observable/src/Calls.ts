// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { BlockNumber, Extrinsic, ExtrinsicStatus, Hash, Header, SignedBlock } from '@polkadot/types/index';

import ApiQueries from './Queries';

// Implementation of calls to API endpoints.
export default class ApiCalls extends ApiQueries {
  bestNumber = (): Observable<BlockNumber | undefined> => {
    return this
      .subscribeNewHead()
      .pipe(
        map((header?: Header): BlockNumber | undefined =>
          header && header.blockNumber
            ? header.blockNumber
            : undefined
        )
      );
  }

  chain = (): Observable<Text | undefined> => {
    return this._api.system.chain();
  }

  getBlock = (hash: Uint8Array): Observable<SignedBlock | undefined> => {
    return this._api.chain.getBlock(hash);
  }

  subscribeNewHead = (): Observable<Header | undefined> => {
    return this._api.chain.subscribeNewHead().pipe(
      defaultIfEmpty()
    );
  }

  systemName = (): Observable<Text | undefined> => {
    return this._api.system.name();
  }

  systemVersion = (): Observable<Text | undefined> => {
    return this._api.system.version();
  }

  submitExtrinsic = (extrinsic: Extrinsic): Observable<Hash | undefined> => {
    return this._api.author.submitExtrinsic(extrinsic);
  }

  submitAndWatchExtrinsic = (extrinsic: Extrinsic): Observable<ExtrinsicStatus | undefined> => {
    return this._api.author.submitAndWatchExtrinsic(extrinsic);
  }
}
