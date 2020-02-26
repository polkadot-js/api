// We need to import the augmented definitions "somewhere" in our project, however since we have
// it in tsconfig as an override and the api/types has imports, it is not strictly required here.
// Because of the tsconfig override, we could import from '@polkadot/{api, types}/augment'
import './interfaces/augment-api';
import './interfaces/augment-types';

// all type stuff, the only one we are using here
import type { VoteRecord } from './interfaces';

// external imports
import { ApiPromise } from '@polkadot/api';
import { createType } from '@polkadot/types';

// our local stuff
import * as definitions from './interfaces/definitions';

async function main (): Promise<void> {
  // extract all types from definitions - fast and dirty approach, flatted on 'types'
  const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});

  const api = await ApiPromise.create({
    types: {
      ...types,
      // aliasses that don't do well as part of interfaces
      'voting::VoteType': 'VoteType',
      'voting::TallyType': 'TallyType',
      // chain-specific overrides
      Keys: 'SessionKeys4'
    }
  });

  // get a query
  const recordOpt = await api.query.voting.voteRecords(123);

  // the types match with what we expect here
  let firstRecord: VoteRecord | null = recordOpt.unwrapOr(null);
  console.log(firstRecord?.toHuman());

  // it even does work for arrays & subscriptions
  api.query.signaling.activeProposals((results): void => {
    results.forEach(([hash, blockNumber]): void => {
      console.log(hash.toHex(), ':', blockNumber.toNumber());
    });
  });

  // even createType works, allowing for our types to be used
  console.log(`Balance2 bitLength:`, [
    api.createType('Balance2').bitLength(),
    api.registry.createType('Balance2').bitLength(),
    createType(api.registry, 'Balance2').bitLength()
  ]);
}

await main();
