// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import String from './String';

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends String {
  fromU8a (input: Uint8Array): String {
    super.fromU8a(input);

    // NOTE Hack around the Rust types to make them consistent for actual use
    // FIXME we are still missing quite a bit of cleanups -
    //   - MisbehaviorReport<Hash, BlockNumber> -> MisbehaviorReport
    //   - RawAddress<AccountId, AccountIndex> - as above, strip generics
    //   - More of the same ValidatorPrefs<Balance>
    //   - Actually, anything that is not Box (i.e. wrap) or Vec (i.e. array), should have some magic
    this.raw = this.raw
      // anything `T::<type>` to end up as `<type>`
      .replace(/T::/g, '')
      // `system::` with `` - basically we find `<T as system::Trait>`
      .replace(/system::/g, '')
      // replace `<T as Trait>::` (possibly sanitiused just above)
      .replace(/<T as Trait>::/g, '')
      // `Box<Proposal>` -> `Proposal`
      .replace(/Box<Proposal>/g, 'Proposal');

    return this;
  }

  toU8a (): Uint8Array {
    // Note Since we are mangling what we get in beyond recognition, we really should
    // not allow the re-encoding. Additionally, this is probably more of a decoder-only
    // helper, so treat it as such.
    throw new Error('Type::toU8a: unimplemented');
  }
}
