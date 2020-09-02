# typegen

This is a sample TypeScript project [with full source & config on GithHub](https://github.com/polkadot-js/api/tree/master/docs/examples/promise/90_typegen), that uses `@polkadot/typegen` to generate type definitions that can be used to decorate the `@polkadot/api`. It uses both types defined for the specific chain as well as the chain metadata to generate TypeScript interfaces. This means that interfaces such as `api.query.*`, `api.tx.*` and `api.consts.*` will be decorated based on chain-specific information, instead of an un-augmented catch-all definition.

**NOTE** This is built using the updates in the `1.4.0` api track and as such it uses the latest (at the time of writing) `@polkadot/api 1.4.0`. If you want to play on your own, it is also suggested that you use the `1.4+` series since some generation types have moved around internally, making it easier to augment.

## Packages

For the packages we need from the `@polkadot/*` we have added `@polkadot/api` (we want to do API stuff) and `@polkadot/typegen` (to generate the actual interfaces). So our scripts and dependencies inside `package.json` contain the following -

```json
{
  "scripts": {
    "build": "yarn generate:defs && yarn generate:meta",
    "generate:defs": "ts-node --skip-project node_modules/.bin/polkadot-types-from-defs --package sample-polkadotjs-typegen/interfaces --input ./src/interfaces",
    "generate:meta": "ts-node --skip-project node_modules/.bin/polkadot-types-from-chain --package sample-polkadotjs-typegen/interfaces --endpoint ./edgeware.json --output ./src/interfaces",
    "lint": "tsc --noEmit --pretty"
  },
  "dependencies": {
    "@polkadot/api": "^1.4.0"
  },
  "devDependencies": {
    "@polkadot/typegen": "^1.4.0",
    "ts-node": "^8.6.2",
    "typescript": "^3.8.2"
  }
}
```

We will delve into the setup and running the scripts and what they do in a short bit, but as of now just notice that we are running the scripts via `ts-node`. Since we supply our definitions as `*.ts` files, this is important otherwise they will not be parsable. `build` will just run both the types and meta generators (in that order, so metadata can use the types) and we have a `lint` that can just check that everything is as it is meant to be.

## Metadata setup

The idea here is to use the actual chain metadata to generate the actual api augmented endpoints. The metadata we are adding here (in addition to the user types), is from the Edgeware Berlin testnet. So this is a real-world example of configuring the API for a specific substrate chain. For the metadata retrieval, we just ran a simple curl command to get it from the node -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`

And then add the full JSONPC output as received to the `edgeware.json` file as specified by the generation command. A trimmed version would look like -

```json
{"jsonrpc":"2.0","result":"0x6d6574610b6c185379737....","id":29}
```

The generator can also use a `wss://` as an `--endpoint` param as part of the generation, but in most cases you would want a static metadata to work from in development, hence we are actually adding it here.

## Types setup

The types are defined in the `src/interfaces` folder. While this repo contains a number of generated files in there as well, you basically only need to manually add the following -

- `src/interfaces/definitions.ts` - this just exports all the sub-folder definitions in one go
- `src/interfaces/<module>/definitions.ts` - type definitions for a specific module

This structure fully matches what is available in the `@polkadot/type/interfaces` folder, so the structure is setup based on the convention used in the `@polkadot/types` library. The generating scripts will expect something matching this since the same underlying code is actually used inside `@polkadot/types` as well. The top-level `interfaces/` folder can be name anything, however the internal content structure need to match what is defined above.

For the top-level the definition file has the following contents -

```js
export { default as signaling } from './signaling/definitions';
export { default as treasuryRewards } from './treasuryRewards/definitions';
export { default as voting } from './voting/definitions';
```

As explained above, it really is just a re-export of the definitions, so they are all easily accessible to the outside, i.e. we will use this import inside our own code to use the definitions in API initialization. The generation scripts will load this file to determine which types it needs to import. By the `@polkadot/types` convention, match the export names with the folders (preferably your runtime module names), the generation scripts will use these names to find the correct folders to output the generated `types.ts` to.

For each of the folders, `signaling`, `treasuryRewards` and `voting` another `definitions.ts` file is contained within. Looking at the one from `signaling`, it contains this -

```js
export default {
  types: {
    ProposalRecord: {
      index: 'u32',
      author: 'AccountId',
      stage: 'VoteStage',
      transition_time: 'u32',
      title: 'Text',
      contents: 'Text',
      vote_id: 'u64'
    },
    ProposalContents: 'Vec<u8>',
    ProposalTitle: 'Vec<u8>'
  }
}
```

Just the type definitions (the structure of which you should be familiar with), nested inside a `types: {...}` container. This allows us future extension points, i.e. there is some work to expose the custom RPC types alongside, so that would become another key on a per-module basis.

In the above, you will note that the `ProposalRecord` references a type for `voting`, i.e. `VoteStage`. The type generation and resolution will determine where the type comes from, and provide the required imports on generation.

Looking at the example in this repo, it also has `augment*`, `index.ts` and `types.ts` files in the interfaces folder. These are all generated, and will be re-generated when the generator is run - so all edits to these files will be lost. The only requirement for user-edits are the `definitions.ts` files.

## Generating

Now that both the metadata and types setup is completed, we just run the build command via `yarn build` and magically (assuming you didn't have the `augment*` and other generated files), these files will be added. When running this command, the console should display something like -

```
> yarn build
$ yarn generate:defs && yarn generate:meta
$ ts-node --skip-project \
  node_modules/.bin/polkadot-types-from-defs \
    --package sample-polkadotjs-typegen/interfaces \
    --input ./src/interfaces

sample-polkadotjs-typegen/src/interfaces/types.ts
	Generating
	Extracting interfaces for signaling
	...
	Writing

sample-polkadotjs-typegen/src/interfaces/augment-types.ts
	Generating
	Writing

$ ts-node --skip-project \
  node_modules/.bin/polkadot-types-from-chain \
    --package sample-polkadotjs-typegen/interfaces \
    --endpoint ./edgeware.json \
    --output ./src/interfaces

Generating from metadata, 81,267 bytes
	...

sample-polkadotjs-typegen/src/interfaces/augment-api.ts
	Generating
	Writing

✨  Done in 4.04s.
```

Now if we check the actual output against the source via `yarn lint`, we would see that valid output has been generated -

```
> yarn lint
$ tsc --noEmit --pretty
✨  Done in 2.28s.
```

## Peering at the output

We are ready to use all these generated types this after some TS config. If you take a look at the generated `src/signaling/types.ts`, you would see generated TS interfaces, such as -

```js
import { Struct } from '@polkadot/types/codec';
import { Bytes, Text, u32, u64 } from '@polkadot/types/primitive';
import { AccountId } from '@polkadot/types/interfaces/runtime';
import { VoteStage } from 'sample-polkadotjs-typegen/interfaces/voting';

/** @name ProposalContents */
export interface ProposalContents extends Bytes {}

/** @name ProposalRecord */
export interface ProposalRecord extends Struct {
  readonly index: u32;
  readonly author: AccountId;
  readonly stage: VoteStage;
  readonly transition_time: u32;
  readonly title: Text;
  readonly contents: Text;
  readonly vote_id: u64;
}

/** @name ProposalTitle */
export interface ProposalTitle extends Bytes {}
```

As mentioned earlier, here you will notice the `import { VoteStage }`, the generator has determined that `voting` exports that interface and has added the required imports.

## TypeScript config

Now that we have files generated, it is time to make TypeScript aware of the types and add an explicit override into out `tsconfig.json`. After some changes, the paths in the config looks as follow (comments are in the actual config file here) -

```json
{
  "compilerOptions": {
    "paths": {
      "sample-polkadotjs-typegen/*": ["src/*"],
      "@polkadot/api/augment": ["src/interfaces/augment-api.ts"],
      "@polkadot/types/augment": ["src/interfaces/augment-types.ts"]
    }
  }
}
```

Effectively what we do above is tell the TypeScript compiler to not use the built-in API augmentation, but rather to replace it with our version. This means that all types from these are injected not by the substrate-latest-master version, but rather with what we have defined above.

## Usage

For simple usage, we have added the `src/index.ts` file that show how the metadata and types actually decorate the API. In addition, we also have setup instructions included here.

```js
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
      // aliases that don't do well as part of interfaces
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
```

## And that is a ...

... wrap. Just a really simple walk-through to customizing the API TypeScript definitions for your chain.
