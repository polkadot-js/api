# Keyring

This section will give a quick introduction into the Keyring, including the addition of accounts, retrieving pairs and the signing of any data. Unlike the rest of the API, only the core concepts will be covered with the most-used-functions. However, what is covered is enough for 99.9 of the use-cases ... or rather, that is the aim.

## Installation

They [@polkadot/keyring](https://github.com/polkadot-js/common/tree/master/packages/keyring) keyring is included directly with the API as a dependency, so it is directly importable (since the 0.92 version) alongside the API.

If you do opt to install it separately, ensure that the version of `@polkadot/util-crypto` that is included with the API matches with the version of `@polkadot/keyring` installed. So if the API depends on `util-crypto 1.4.1`, it would make sense to include `keyring 1.4.1` as the installed version. (This helps in making sure extra versions of the libraries are not included as duplicates, especially in the case where bundles are created. Additionally, this makes sure that weird side-effects in the WASM initialization is avoided.)

## Creating a keyring instance

Once installed, you can create an instance by just creating an instance of the `Keyring` class -

```js
// Import the keyring as required
import { Keyring } from '@polkadot/api';

// Initialize the API as we would normally do
...

// Create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });
```

In the above example, the import is self-explanatory. Upon creation we pass through a `type` which can have a value of either `ed25519` or `sr25519`, when not specified this would default to `ed25519`. This type parameter only applies to the default type of account created when no type is specified, it does not mean that the keyring can only store that type of account.

So effectively, when creating an account and not specifying a type, it will be `sr25519` by default based on the above construction params, however we can also add an `ed25519` account and use it transparently in the same keyring.

One "trick" that is done implicitly in the above sample is that that keyring is only initialized after the API. In the case of `sr25519` the keyring relies on a [WASM build](https://github.com/polkadot-js/wasm) of the [schnorrkel libraries](https://github.com/w3f/schnorrkel). Since the API inlitialization is already async, it initializes the WASM libraries are part of the setup.

However, this initialization can also be done explicitly, mostly for more advances use-cases, or in cases where the API won't be attached until much later -

```js
// Crypto promise, package used by keyring internally
import { cryptoWaitReady } from '@polkadot/util-crypto';

// Wait for the promise to resolve, async WASM or `cryptoWaitReady().then(() => { ... })`
await cryptoWaitReady();

// Create a keyring instance
const keyring = new Keyring({ type: 'sr25519' });
```

## Adding accounts

The recommended catch-all approach to adding accounts is via `.addFromUri(<suri>, [meta], [type])` function, where only the `suri` param is required. For instance to add an account via mnemonic, you would do the following -

```js
...

// Some mnemonic phrase
const PHRASE = 'entire material egg meadow latin bargain dutch coral blood melt acoustic thought';

// Add an account, straight mnemonic
const newPair = keyring.addFromUri(PHRASE);

// (Advanced) add an account with a derivation path (hard & soft)
const newDeri = keyring.addFromUri(`${PHRASE}//hard-derived/soft-derived`);

// (Advanced, development-only) add with an implied dev seed and hard derivation
const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
```

The above additions cater for most of the use cases and aligns with the you would find in the Substrate `subkey`. Be very wary of the last "dev-seed" option, it is explicitly added for `subkey` compatibility and implies using the "known-everywhere" dev seed. It is however useful when running Polkadot/Substrate with a `--dev` flag.

## Adding accounts with raw seeds

Since mnemonics are recommended and the defacto standard for current Polkadot/Substrate generations, the only mentioned way of adding keys thus far has been via mnemonic. However, the `addFromUri` method on the keyring is intelligent enough to detect and add from inputs specified as mnemonics, hex seeds and string seeds (appropriately padded).

With the above in mind, we could extend our examples above for custom raw seed. For instance to add both a hex and string seed, we can follow the following approach -

```js
...
// add a hex seed, 32-characters in length
const hexPair = keyring.addFromUri('0x1234567890123456789012345678901234567890123456789012345678901234');

// add a string seed, internally this is padded with ' ' to 32-bytes in length
const strPair = keyring.addFromUri('Janice');
```

You could extend derivation from these specified seeds with derivation paths if applicable, i.e. `Janice//hard` will perform a hard derivation with the path `hard` on the pair that is generated from the `Janice` seed. As far as possible, try to stick with mnemonics in your applications, unless you have a good reason to not do so. Humans are generally bad at generating their own entropy and mnemonics has additional properties such as built-in checksums.

## Working with pairs

In the previous examples we added a pair to the keyring (and we actually immediately got access to the pair). From this pair there is some information we can retrieve -

```js
...

// Add our Alice dev account
const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

// Log some info
console.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);
```

Additionally you can sign and verify using the pairs. This is the same internally to the API when constructing transactions -

```js
// Some helper functions used here
import { stringToU8a, u8aToHex } from '@polkadot/util';

...

// Convert message, sign and then verify
const message = stringToU8a('this is our message');
const signature = alice.sign(message);
const isValid = alice.verify(message, signature);

// Log info
console.log(`The signature ${u8aToHex(signature)}, is ${isValid ? '' : 'in'}valid`);
```

This covers the keyring basics, however there are two additional functions here of interest, `keyring.getPairs()` to retrieve a list of all pairs in the keyring and `keyring.getPair(<address or publicKey>)` to retrieve a pair where we have an identifier.

## Back to transactions

Now that we have short introduction to the keyring, we can move back to API transactions and find out [how to subscribe and track events](api.tx.subs.md), taking our management of transactions to the next level.
