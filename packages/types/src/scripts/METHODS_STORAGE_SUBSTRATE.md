
---

### substrate

_These are keys that are always available to the runtime implementation_

▸ **code**(): `Bytes`
- **summary**: Wasm code of the runtime.

▸ **heapPages**(): `u64`
- **summary**: Number of wasm linear memory pages required for execution of the runtime.

▸ **authorityCount**(): `u32`
- **summary**: Number of authorities.

▸ **authorityPrefix**(): `u32`
- **summary**: Prefix under which authorities are storied.

▸ **extrinsicIndex**(): `u32`
- **summary**: Current extrinsic index (u32) is stored under this key.

▸ **changesTrieConfig**(): `u32`
- **summary**: Changes trie configuration is stored under this key.

---
