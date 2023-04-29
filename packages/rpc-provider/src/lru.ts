// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Assuming all 1.5MB responses, we apply a default allowing for 192MB
// cache space (depending on the historic queries this would vary, metadata
// for Kusama/Polkadot/Substrate falls between 600-750K, 2x for estimate)
const DEFAULT_CAPACITY = 128;

class LRUNode {
  readonly key: string;

  public next: LRUNode;
  public prev: LRUNode;

  constructor (key: string) {
    this.key = key;
    this.next = this.prev = this;
  }
}

// https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
export class LRUCache {
  readonly capacity: number;

  readonly #data: Map<string, unknown> = new Map();
  readonly #refs: Map<string, LRUNode> = new Map();

  #length = 0;
  #head: LRUNode;
  #tail: LRUNode;

  constructor (capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.#head = this.#tail = new LRUNode('<empty>');
  }

  get length (): number {
    return this.#length;
  }

  get lengthData (): number {
    return this.#data.size;
  }

  get lengthRefs (): number {
    return this.#refs.size;
  }

  entries (): [string, unknown][] {
    const keys = this.keys();
    const count = keys.length;
    const entries = new Array<[string, unknown]>(count);

    for (let i = 0; i < count; i++) {
      const key = keys[i];

      entries[i] = [key, this.#data.get(key)];
    }

    return entries;
  }

  keys (): string[] {
    const keys: string[] = [];

    if (this.#length) {
      let curr = this.#head;

      while (curr !== this.#tail) {
        keys.push(curr.key);
        curr = curr.next;
      }

      keys.push(curr.key);
    }

    return keys;
  }

  get <T> (key: string): T | null {
    const data = this.#data.get(key);

    if (data) {
      this.#toHead(key);

      return data as T;
    }

    return null;
  }

  set <T> (key: string, value: T): void {
    if (this.#data.has(key)) {
      this.#toHead(key);
    } else {
      const node = new LRUNode(key);

      this.#refs.set(node.key, node);

      if (this.length === 0) {
        this.#head = this.#tail = node;
      } else {
        this.#head.prev = node;
        node.next = this.#head;
        this.#head = node;
      }

      if (this.#length === this.capacity) {
        this.#data.delete(this.#tail.key);
        this.#refs.delete(this.#tail.key);

        this.#tail = this.#tail.prev;
        this.#tail.next = this.#head;
      } else {
        this.#length += 1;
      }
    }

    this.#data.set(key, value);
  }

  #toHead (key: string): void {
    const ref = this.#refs.get(key);

    if (ref && ref !== this.#head) {
      ref.prev.next = ref.next;
      ref.next.prev = ref.prev;
      ref.next = this.#head;

      this.#head.prev = ref;
      this.#head = ref;
    }
  }
}
