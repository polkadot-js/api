# FAQ

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.

## I am getting a "Unknown types found, no types for ..." error

There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as [Kusama](https://kusama.network/). So for Polkadot public chains, ensure that you are using the latest released API version.

If however you are running against a master branch of either Polkadot or Substrate, you may well be better suited running [a beta version, tracking master](install.md#betas). If you are connected to a customized chain, you would rather want to [register the types](types.extend.md) either on your own, or via packages that the chain vendor provides.

## I am getting a "Metadata:: failed on MagicNumber" error

Update your version of the API to the [latest version](install.md). Like types, the [metadata interfaces](basics.md) are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.

## I would like to sign transactions offline

The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the [polkadot-js/apps](https://github.com/polkadot-js/apps) support for signing via extensions and even the [polkadot-js/extension](https://github.com/polkadot-js/extension) support for tools such as the [Parity Signer](https://github.com/paritytech/parity-signer).

As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in [our tests](https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts). Additionally, the [polkadot-js/tools](https://github.com/polkadot-js/tools) has an implementation of [a very basic offline signer](https://github.com/polkadot-js/tools/tree/master/packages/signer-cli) where transactions are generated in one process and signatures in another non-connected process.

## I would like to send a root transaction

Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by `ensure_root(origin)` in the Rust codebase. Root here does not refer to the actual account, i.e. `//Alice` on  a `--dev` chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation.

To submit these transactions, it needs to be send as a [wrapped transaction][api.tx.wrap.md#sudo-use] via either `sudo.sudo` (assuming you have access on your chain) or `democracy.proposal` (which would allow users of the chain to vote on it).
