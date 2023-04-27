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

  private readonly __$$_data: Map<string, unknown> = new Map();
  private readonly __$$_refs: Map<string, LRUNode> = new Map();

  private __$$_length = 0;
  private __$$_head: LRUNode;
  private __$$_tail: LRUNode;

  constructor (capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.__$$_head = this.__$$_tail = new LRUNode('<empty>');
  }

  get length (): number {
    return this.__$$_length;
  }

  get lengthData (): number {
    return this.__$$_data.size;
  }

  get lengthRefs (): number {
    return this.__$$_refs.size;
  }

  entries (): [string, unknown][] {
    const keys = this.keys();
    const entries = new Array<[string, unknown]>(keys.length);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      entries[i] = [key, this.__$$_data.get(key)];
    }

    return entries;
  }

  keys (): string[] {
    const keys: string[] = [];

    if (this.__$$_length) {
      let curr = this.__$$_head;

      while (curr !== this.__$$_tail) {
        keys.push(curr.key);
        curr = curr.next;
      }

      keys.push(curr.key);
    }

    return keys;
  }

  get <T> (key: string): T | null {
    const data = this.__$$_data.get(key);

    if (data) {
      this.__$$_toHead(key);

      return data as T;
    }

    return null;
  }

  set <T> (key: string, value: T): void {
    if (this.__$$_data.has(key)) {
      this.__$$_toHead(key);
    } else {
      const node = new LRUNode(key);

      this.__$$_refs.set(node.key, node);

      if (this.length === 0) {
        this.__$$_head = this.__$$_tail = node;
      } else {
        this.__$$_head.prev = node;
        node.next = this.__$$_head;
        this.__$$_head = node;
      }

      if (this.__$$_length === this.capacity) {
        this.__$$_data.delete(this.__$$_tail.key);
        this.__$$_refs.delete(this.__$$_tail.key);

        this.__$$_tail = this.__$$_tail.prev;
        this.__$$_tail.next = this.__$$_head;
      } else {
        this.__$$_length += 1;
      }
    }

    this.__$$_data.set(key, value);
  }

  private __$$_toHead (key: string): void {
    const ref = this.__$$_refs.get(key);

    if (ref && ref !== this.__$$_head) {
      ref.prev.next = ref.next;
      ref.next.prev = ref.prev;
      ref.next = this.__$$_head;

      this.__$$_head.prev = ref;
      this.__$$_head = ref;
    }
  }
}
