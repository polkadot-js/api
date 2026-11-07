// Copyright 2017-2026 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { HttpProvider } from './index.js';

// The build dependency checker does not yet recognize node:http as a built-in.
const { createServer } = await import('node:http');

interface RequestOptions {
  headers?: Record<string, string>;
  rpcError?: { code: number; message: string };
  status?: number;
}

interface CapturedRequest {
  body: string;
  contentLength: string | undefined;
  customHeader: string | string[] | undefined;
}

interface RequestOutcome {
  error?: Error;
  result?: unknown;
}

async function sendRequest (text: string, options: RequestOptions = {}): Promise<RequestOutcome & CapturedRequest> {
  const captured: CapturedRequest[] = [];
  const server = createServer((request, response) => {
    const chunks: Buffer[] = [];

    request.on('data', (chunk: Buffer) => chunks.push(chunk));
    request.on('error', () => response.destroy());
    request.on('end', () => {
      try {
        const body = Buffer.concat(chunks).toString('utf8');
        const parsed = JSON.parse(body) as { id: number; params: string[] };

        captured.push({
          body,
          contentLength: request.headers['content-length'],
          customHeader: request.headers['x-custom']
        });

        response.writeHead(options.status ?? 200, { Connection: 'close', 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
          id: parsed.id,
          jsonrpc: '2.0',
          ...(options.rpcError ? { error: options.rpcError } : { result: parsed.params })
        }));
      } catch {
        response.destroy();
      }
    });
  });

  server.on('clientError', (_error, socket) => socket.destroy());
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));

  const address = server.address();

  if (!address || typeof address === 'string') {
    throw new Error('Expected a local TCP server');
  }

  const provider = new HttpProvider(`http://127.0.0.1:${address.port}`, options.headers, 0);
  const request: Promise<RequestOutcome> = provider.send('test_echo', [text]).then(
    (result) => ({ result }),
    (error: Error) => ({ error })
  );
  let timer: ReturnType<typeof setTimeout> | undefined;

  try {
    const result = await Promise.race([
      request,
      new Promise<never>((_resolve, reject) => {
        timer = setTimeout(() => reject(new Error('HTTP request did not complete')), 3000);
      })
    ]);
    const received = captured[0];

    if (!received) {
      throw new Error('Expected a complete HTTP request');
    }

    return { ...received, ...result };
  } finally {
    clearTimeout(timer);
    server.closeAllConnections();
    await request;
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
}

describe('HTTP UTF-8 request bodies', (): void => {
  for (const [name, text] of [
    ['ASCII', 'password'],
    ['Hangul', '비밀번호'],
    ['accented text', 'pässword'],
    ['surrogate pairs', '🔐'],
    ['combining characters', 'e\u0301'],
    ['empty text', '']
  ]) {
    it(`sends ${name} with its UTF-8 byte length`, async (): Promise<void> => {
      const { body, contentLength, error, result } = await sendRequest(text);

      expect(error).toEqual(undefined);
      expect(result).toEqual([text]);
      expect(contentLength).toEqual(String(Buffer.byteLength(body)));
      expect(JSON.parse(body)).toEqual({ id: 1, jsonrpc: '2.0', method: 'test_echo', params: [text] });
    });
  }

  it('preserves custom headers', async (): Promise<void> => {
    const { customHeader, error, result } = await sendRequest('한글', { headers: { 'x-custom': 'test-header' } });

    expect(error).toEqual(undefined);
    expect(customHeader).toEqual('test-header');
    expect(result).toEqual(['한글']);
  });

  it('preserves an explicit correct Content-Length header', async (): Promise<void> => {
    const body = JSON.stringify({ id: 1, jsonrpc: '2.0', method: 'test_echo', params: ['🔐'] });
    const contentLength = String(Buffer.byteLength(body));
    const received = await sendRequest('🔐', { headers: { 'Content-Length': contentLength } });

    expect(received.error).toEqual(undefined);
    expect(received.contentLength).toEqual(contentLength);
    expect(received.result).toEqual(['🔐']);
  });

  it('retains HTTP error handling for a Unicode request', async (): Promise<void> => {
    const { error } = await sendRequest('한글', { status: 503 });

    expect(error?.message.includes('[503]')).toEqual(true);
  });

  it('retains RPC error handling for a Unicode request', async (): Promise<void> => {
    const { error } = await sendRequest('한글', { rpcError: { code: -32602, message: 'invalid params' } });

    expect(error?.message.includes('-32602: invalid params')).toEqual(true);
  });
});
