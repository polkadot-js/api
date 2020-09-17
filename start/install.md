# Installation

Yes, it really is as simple as [installing from npm](https://www.npmjs.com/package/@polkadot/api), so we are not going to waste too much time with the bare basics, just install the API via

`yarn add @polkadot/api`

And it will be added and ready for use. The above will always install the latest stable release, which should allow you to connect to test networks and local nodes that are tracking versioned releases for [Polkadot](https://github.com/paritytech/polkadot) and [Substrate](https://github.com/paritytech/substrate).

## Betas

For users who have a slightly higher appetite for risk, or are using bleeding-edge master branches of either Polkadot/Substrate, we also publish a beta version as soon as anything is merged into the API master branch. This version really contains all the latest fixes and features and is the version we actually use inside the polkadot-js projects - eating our own dog food.

To install a beta version, either to test or for support of a feature that is available in Substrate master (and has not yet made it to a stable api release), you can install it via the `@beta` tag, i.e.

`yarn add @polkadot/api@beta`

## Other dependencies

In most cases, you don't need to do anything else apart from just installing `@polkadot/api` above. It has dependencies such as `@polkadot/types` which are installed automatically alongside. When using `yarn` the dependencies are installed, flattened, available for use and you will never run into issues with mismatched versions.

This means that by simply installing `@polkadot/api`, you will have access to utilities (crypto and normal), types, providers and even higher-order (derived) API functions. (We will get to all of these in follow-up sections)

If you do however decide to explicitly install other packages (even though they are dependencies), please make sure that the versions inside the api package always match with your versions, i.e. if you installed `@polkadot/api` `0.91.0-beta.22` and you have your own version of `@polkadot/types`, ensure that it is also `0.91.0-beta.22`.

## API basics

So we have it installed. Before we jump into actual real-world usage, [let's understand what the API gives us](basics.md).
