# FAQ

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.

## I connected to a node and I am getting a "Unknown types found, no types for ..." error

There are 2 caused for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as [Kusama](https://kusama.network/). So for Polkadot public chains, ensure that you are using the latest released API version.

If however you are running against a master branch of either Polkadot or Substrate, you may well be better suited running [a beta version, tracking master](install.md#betas). If you are connected to a customized chain, you would rather want to [register the types](types.extend.md) either on your own, ot via packages that the chain vendor provides.

## I connected to a node an I am getting a "Metadata:: failed on MagicNumber" error

Update your version of the API to the [latest version](install.md). Like types, the [metadata interfaces](basics.md) are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.
