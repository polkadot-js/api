# Keyring

This section will give a quick introduction into the Keyring, including the addition of accounts, retrieving pairs and the use thereof for signing. Unlike the rest of the API, only  the core concepts will be covered with the most-used-functions. however, what is covered is enough for 99.9 of the use-cases ... or rather, that is the aim.

## Installation

They [@polkadot/keyring](https://github.com/polkadot-js/common/tree/master/packages/keyring) keyring is not included directly with the API as a dependency, so rather it should be installed seperately, you can do so via

`yarn add @polkadot/keyring`

It is best-practice to ensure that the version of `@polkadot/util-crypto` that is included with the API matches with the version of `@polkadot/keyring` installed. So if the API depends on `1.2.1`, it would make sense to include `1.2.1` as the `@polkadot/keyring` version. (This helps in making  sure extra version of the tools are not included as duplicates, especially in the case where bundles are created.)

## Creating a keyring instance

Once installed, you can create an instance by just creating the class -

```js
// import the keyring as required
import { Keyring } from '@polkadot/keyring';

// initialize the API as we would normally do
...

// create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });
```

In the above example, the import is self-explanatory. Upon creation we pass through a `type` which can have a value of either `ed25519` or `sr25519`, when not specified this would default to `ed25519`. This type parameter only applies to the default type of account created when no type is specified, it does not mean that the keyring can only store that type of account.

So effectively, when creating an account and not specifying a type, it will be `sr25519` by default based on the above construction params, however we can also add an `ed25519` account and use it transparently in the same keyring.

One "trick" that is done implictly in the above sample is that that keyring  is only initialized after the API. In the case of `sr25519` the keyring relies on a [WASM build](https://github.com/polkadot-js/wasm) of the [schnorrkel libraries](https://github.com/w3f/schnorrkel). Since the API inlitialization is already async, it initializes the WASM libraries are part of the setup.

However, this initialization can also be done explicitly, mostly for more advances use-cases, or in cases where the API won't be attached until much later -

```js
// crypto promise, package  used by keyring internally
import { cryptoWaitReady } from '@polkadot/util-crypto';

// wait for the promise to resolve, async WASM or `cryptoWaitReady().then(() => { ... })`
await cryptoWaitReady();

// create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });
```

## Adding accounts
