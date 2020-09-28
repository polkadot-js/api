**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/interfaces/democracy/definitions"

# Module: "packages/types/src/interfaces/democracy/definitions"

## Index

### Variables

* [AllConvictions](_packages_types_src_interfaces_democracy_definitions_.md#allconvictions)

## Variables

### AllConvictions

• `Const` **AllConvictions**: string[] = [ // 0.1x votes, unlocked. 'None', // 1x votes, locked for an enactment period following a successful vote. 'Locked1x', // 2x votes, locked for 2x enactment periods following a successful vote. 'Locked2x', // 3x votes, locked for 4x... 'Locked3x', // 4x votes, locked for 8x... 'Locked4x', // 5x votes, locked for 16x... 'Locked5x', /// 6x votes, locked for 32x... 'Locked6x']

*Defined in [packages/types/src/interfaces/democracy/definitions.ts:9](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/interfaces/democracy/definitions.ts#L9)*
