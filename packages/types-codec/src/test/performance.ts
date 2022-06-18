// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Shamelessly copied from @polkadot/util/test

import { formatDecimal, formatNumber } from '@polkadot/util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExecFn = (...params: any[]) => unknown;

const NUM_PAD = 16;
const PRE_PAD = 32;

function loop (count: number, inputs: unknown[][], exec: ExecFn): [number, unknown[]] {
  const start = Date.now();
  const results = new Array<unknown>(inputs.length);

  for (let i = 0; i < count; i++) {
    const result = exec(...inputs[i % inputs.length]);

    if (i < inputs.length) {
      results[i] = result;
    }
  }

  return [Date.now() - start, results];
}

export function formatFixed (value: number): string {
  const [a, b] = value.toFixed(2).split('.');

  return [formatDecimal(a), b].join('.');
}

export function formatOps (count: number, time: number): string {
  const micro = (time * 1000) / count;
  const ops = 1_000_000 / micro;

  return `
${formatFixed(ops).padStart(NUM_PAD + PRE_PAD + 1)} ops/s
${formatFixed(micro).padStart(NUM_PAD + PRE_PAD + 1)} μs/op`;
}

export function performance (name: string, count: number, inputs: unknown[][], exec: ExecFn): void {
  it(`performance: ${name}`, (): void => {
    const [time] = loop(count, inputs, exec);

    console.log(`
performance run for ${name} completed with ${formatNumber(count)} iterations.

${`${name}:`.padStart(PRE_PAD)} ${time.toString().padStart(NUM_PAD)} ms${formatOps(count, time)}
`);
  });
}

export function performanceCmp (name: string, [first, second]: [string, string], count: number, inputs: unknown[][], exec: ExecFn): void {
  it(`performance: ${name}`, (): void => {
    const pa = inputs.map((values) => [...values, false]);
    const pb = inputs.map((values) => [...values, true]);
    const [ta, ra] = loop(count, pa, exec);
    const [tb, rb] = loop(count, pb, exec);

    console.log(`
performance run for ${name} completed with ${formatNumber(count)} iterations.

${`${first}:`.padStart(PRE_PAD)} ${ta.toString().padStart(NUM_PAD)} ms ${ta < tb ? '(fastest)' : `(slowest, ${(ta / tb).toFixed(2)}x)`}${formatOps(count, ta)}

${`${second}:`.padStart(PRE_PAD)} ${tb.toString().padStart(NUM_PAD)} ms ${ta > tb ? '(fastest)' : `(slowest, ${(tb / ta).toFixed(2)}x)`}${formatOps(count, tb)}
`);

    const unmatched = ra.filter((r, i) =>
      JSON.stringify(r) !== JSON.stringify(rb[i])
    );

    expect(unmatched.length).toEqual(0);
  });
}
