declare module 'mock-socket' {
  export class Server {
    constructor (url: string);

    on (event: 'message', body: {}): void;
    send (message: string): void;
    stop (): void;
  }
}
