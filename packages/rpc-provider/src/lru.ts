// Copyright 2017-2025 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Assuming all 1.5MB responses, we apply a default allowing for 192MB
// cache space (depending on the historic queries this would vary, metadata
// for Kusama/Polkadot/Substrate falls between 600-750K, 2x for estimate)

export const DEFAULT_CAPACITY = 1024;
export const DEFAULT_TTL = 30000;

// If the user decides to disable the TTL we set the value
// to a very high number (A year = 365 * 24 * 60 * 60 * 1000).
const DISABLED_TTL = 31_536_000_000;

class LRUNode {
  readonly key: string;
  #expires: number;
  #ttl: number;
  readonly createdAt: number;

  public next: LRUNode;
  public prev: LRUNode;

  constructor (key: string, ttl: number) {
    this.key = key;
    this.#ttl = ttl;
    this.#expires = Date.now() + ttl;
    this.createdAt = Date.now();
    this.next = this.prev = this;
  }

  public refresh (): void {
    this.#expires = Date.now() + this.#ttl;
  }

  public get expiry (): number {
    return this.#expires;
  }
}

// https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
export class LRUCache {
  readonly capacity: number;

  readonly #data = new Map<string, unknown>();
  readonly #refs = new Map<string, LRUNode>();

  #length = 0;
  #head: LRUNode;
  #tail: LRUNode;

  readonly #ttl: number;

  constructor (capacity = DEFAULT_CAPACITY, ttl: number | null = DEFAULT_TTL) {
    this.capacity = capacity;
    ttl ? this.#ttl = ttl : this.#ttl = DISABLED_TTL;
    this.#head = this.#tail = new LRUNode('<empty>', this.#ttl);
  }

  get ttl (): number | null {
    return this.#ttl;
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

      // Evict TTL once data is refreshed
      this.#evictTTL();

      return data as T;
    }

    this.#evictTTL();

    return null;
  }

  set <T> (key: string, value: T): void {
    if (this.#data.has(key)) {
      this.#toHead(key);
    } else {
      const node = new LRUNode(key, this.#ttl);

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

    // Evict TTL once data is refreshed or added
    this.#evictTTL();

    this.#data.set(key, value);
  }

  #evictTTL () {
  // Find last node to keep
    // traverse map to find the expired nodes
    while (this.#tail.expiry && this.#tail.expiry < Date.now() && this.#length > 0) {
      this.#refs.delete(this.#tail.key);
      this.#data.delete(this.#tail.key);
      this.#length -= 1;
      this.#tail = this.#tail.prev;
      this.#tail.next = this.#head;
    }

    if (this.#length === 0) {
      this.#head = this.#tail = new LRUNode('<empty>', this.#ttl);
    }
  }

  #toHead (key: string): void {
    const ref = this.#refs.get(key);

    if (ref && ref !== this.#head) {
      ref.refresh();
      ref.prev.next = ref.next;
      ref.next.prev = ref.prev;
      ref.next = this.#head;

      this.#head.prev = ref;
      this.#head = ref;
    }
  }
}
