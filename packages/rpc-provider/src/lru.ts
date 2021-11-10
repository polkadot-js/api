// Copyright 2017-2021 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

const DEFAULT_CAPACITY = 2048;

class LRUNode {
  public readonly key: string;

  public next: LRUNode;
  public prev: LRUNode;

  constructor (key: string) {
    this.key = key;
    this.next = this.prev = this;
  }
}

export class LRUCache {
  capacity: number;
  data: Map<string, unknown> = new Map();
  length = 0;
  head: LRUNode = new LRUNode('head');
  tail: LRUNode = new LRUNode('tail');
  refs: Map<string, LRUNode> = new Map();

  constructor (capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
  }

  entries (): [string, unknown][] {
    return [...this.data.entries()];
  }

  entriesOrdered (): [string, unknown][] {
    const entries: [string, unknown][] = [];

    if (this.length) {
      let curr = this.head;

      while (curr !== this.tail) {
        entries.push([curr.key, this.data.get(curr.key)]);
        curr = curr.next;
      }

      entries.push([curr.key, this.data.get(curr.key)]);
    }

    return entries;
  }

  keys (): string[] {
    return [...this.data.keys()];
  }

  values (): unknown[] {
    return [...this.data.values()];
  }

  get <T> (key: string): T | null {
    const data = this.data.get(key);

    if (data) {
      this.#toFront(key);

      return data as T;
    }

    return null;
  }

  set <T> (key: string, value: T): void {
    if (this.data.has(key)) {
      this.#toFront(key);
    } else {
      const node = new LRUNode(key);

      this.refs.set(node.key, node);

      if (this.length === 0) {
        this.head = this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }

      if (this.length === this.capacity) {
        const out = this.tail;

        this.tail = out.prev;
        this.tail.next = this.head;

        this.data.delete(out.key);
        this.refs.delete(out.key);
      } else {
        this.length += 1;
      }
    }

    this.data.set(key, value);
  }

  #toFront (key: string): void {
    const ref = this.refs.get(key);

    if (ref && ref !== this.head) {
      const prefRef = ref.prev;
      const nextRef = ref.next;

      prefRef.next = nextRef;
      nextRef.prev = prefRef;

      this.head.prev = ref;
      ref.next = this.head;
      this.head = ref;
    }
  }
}
