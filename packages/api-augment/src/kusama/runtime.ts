// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { SetId } from '@polkadot/types/interfaces/grandpa';
import type { Observable } from '@polkadot/types/types';

declare module '@polkadot/api-base/types/calls' {
  export interface AugmentedCalls<ApiType extends ApiTypes> {
    grandpaApi: {
      /**
       * Retrieves the current set id
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<SetId>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module
