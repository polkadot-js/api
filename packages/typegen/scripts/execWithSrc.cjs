// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

module.exports = function (file) {
  let main;

  try {
    main = require(`../cjs/${file}.js`).main;
  } catch (error) {
    // required for dev-only setups
    process.env.JEST_WORKER_ID = '123';

    // register aliases
    require('@babel/register')({
      extensions: ['.js', '.ts'],
      plugins: [
        ['module-resolver', {
          alias: {
            '^@polkadot/api-(augment|base|derive)(.*)': './packages/api-\\1/src\\2',
            // eslint-disable-next-line sort-keys
            '^@polkadot/api(.*)': './packages/api/src/\\1',
            '^@polkadot/rpc-(augment|core|provider)(.*)': './packages/rpc-\\1/src\\2',
            '^@polkadot/types-(augment|codec|create|known|metadata|support)(.*)': './packages/types-\\1/src\\2',
            // eslint-disable-next-line sort-keys
            '^@polkadot/types(.*)': './packages/types/src\\1'
          }
        }]
      ]
    });

    // get ts source
    main = require(`../src/${file}.ts`).main;
  }

  main();
};
