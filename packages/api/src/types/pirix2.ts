import { Length, Tail, Cast, Prev, Pos, Reverse, Iterator, Next, Curry } from './pirix1';

// Pipe executes a sequence of functions one after the other in a way that each
// functions input is the previous functions' output. Its type looks like this:
// pipe<fA, fB, ...fN> => (...Parameters<fA>) => ReturnType<fN>

// Let's test it:
const piped = pipe(
  (name: string, age: number) => ({ name, age }),                // receive parameters
  (info: { name: string, age: number }) => `Welcome, ${info.name}`,      // receive previous return
  (message: string) => ({ message, date: Date.now() }) // receive previous return
);

const test00 = piped('Jane', 28); // {message: 'Welcome, Jane', date: 123456789}

// So `pipe` creates a function from a sequence of functions from `fA` to `fN`:
declare function pipe<Fns extends any[]> (...args: Piper<Fns>):
  (...args: Parameters<First<Fns>>) => ReturnType<Last<Fns>>;

//////////////////////////////////////////////////////////////////////////////////////////
// BASIC TOOLS #3 ////////////////////////////////////////////////////////////////////////

// Before we start, let's just a a few simple tools to our previous collection:

// Optimized the previous `Last`:
type Last<T extends any[]> = T[Length<Tail<T>>];

// An alias for an arrow function:
type Arrow<P extends any[] = any, R extends any = any> = (...args: P) => R;

// Alias for a first tuple element:
type First<T extends any[]> = T[0];

// Is `N` numeric or of type `number`:
type IsInfinite<N extends number> =
  Iterator<N> extends infer I
  ? Length<Cast<I, any[]>> extends 0
  ? true  // number
  : false // 0 | 1 | 2...
  : never;

//////////////////////////////////////////////////////////////////////////////////////////
// PIPE #NUMBERS /////////////////////////////////////////////////////////////////////////

// The technique used for `Curry` solves the problem of variadic types for
// `Curry`. And since we have a different scenario, we'll use mapped types:
type Piper<Fns extends Arrow[]> = {
  [K in keyof Fns]: PipeItem<Fns, K>
};

// But why mapped types? Because TypeScript disallows to do recursive types on
// parameters that could be infinitely long... It's kind of normal, but there
// could be improvements. For instance, this is (logically) impossible:
declare function impossible<Fns extends any[]> (...args: Reverse<Fns>): any;

// Similar to a recursive (iterative) type, mapped types have a counter which is
// called `K`. It's not exactly a counter, but on mapped tuples, it behaves like
// one. As it iterates, `K`'s values change from "0", "1", "2", "3"... Great. So
// we have some kind of index number... But it's a string, and we can't do much
// with it. So we'll create a type that translates a string to a number:
type NumberOf<S extends string | number | symbol> =
  Length<IteratorOf<S>>;

// Let's test it:
type test01 = NumberOf<'35'>; // 35

// Mapped type that gets indexes
type Test02<T extends any[]> = {
  [K in keyof T]: K
};

// Mapped type that gets indexes
type Test03<T extends any[]> = {
  [K in keyof T]: NumberOf<K>
};

type test02 = Test02<['a', 'b', 'c']>; // ["0", "1", "2"]
type test03 = Test03<['a', 'b', 'c']>; // [ 0 ,  1 ,  2 ]

// This will give us full control over the iteration performed by mapped types.
// So now, when using mapped types, we'll know the position of each mapped item.

//////////////////////////////////////////////////////////////////////////////////////////
// PIPE #ITERATORS ///////////////////////////////////////////////////////////////////////

// So what's next? `Pipe` must check for us that the function sequence is valid.
// To do this, our mapped type has to link from functions output to next input.
// Any idea? We'll use our `Iterator` which has features like `Prev` and `Next`.

// We are going to make extensive use of `Iterator`, and in order not to bloat
// TS, I decided to put all `Iterator`s we'll ever need in some sort of cache:
type IteratorOfMap = {
  '_': never,
  '0': Iterator<0>,
  '1': Next<IteratorOfMap['0']>, // Take previous and add
  '2': Next<IteratorOfMap['1']>,
  '3': Next<IteratorOfMap['2']>,
  '4': Next<IteratorOfMap['3']>,
  '5': Next<IteratorOfMap['4']>,
  '6': Next<IteratorOfMap['5']>,
  '7': Next<IteratorOfMap['6']>,
  '8': Next<IteratorOfMap['7']>,
  '9': Next<IteratorOfMap['8']>,

  '10': Next<IteratorOfMap['9']>,
  '11': Next<IteratorOfMap['10']>,
  '12': Next<IteratorOfMap['11']>,
  '13': Next<IteratorOfMap['12']>,
  '14': Next<IteratorOfMap['13']>,
  '15': Next<IteratorOfMap['14']>,
  '16': Next<IteratorOfMap['15']>,
  '17': Next<IteratorOfMap['16']>,
  '18': Next<IteratorOfMap['17']>,
  '19': Next<IteratorOfMap['18']>,

  '20': Next<IteratorOfMap['19']>,
  '21': Next<IteratorOfMap['20']>,
  '22': Next<IteratorOfMap['21']>,
  '23': Next<IteratorOfMap['22']>,
  '24': Next<IteratorOfMap['23']>,
  '25': Next<IteratorOfMap['24']>,
  '26': Next<IteratorOfMap['25']>,
  '27': Next<IteratorOfMap['26']>,
  '28': Next<IteratorOfMap['27']>,
  '29': Next<IteratorOfMap['28']>,

  '30': Next<IteratorOfMap['29']>,
  '31': Next<IteratorOfMap['30']>,
  '32': Next<IteratorOfMap['31']>,
  '33': Next<IteratorOfMap['32']>,
  '34': Next<IteratorOfMap['33']>,
  '35': Next<IteratorOfMap['34']>,
  '36': Next<IteratorOfMap['35']>,
  '37': Next<IteratorOfMap['36']>,
  '38': Next<IteratorOfMap['37']>,
  '39': Next<IteratorOfMap['38']>, // [any x 38]

  '40': Next<IteratorOfMap['39']>,
  '41': Next<IteratorOfMap['40']>,
  '42': Next<IteratorOfMap['41']>,
  '43': Next<IteratorOfMap['42']>,
  '44': Next<IteratorOfMap['43']>,
  '45': Next<IteratorOfMap['44']>,
  '46': Next<IteratorOfMap['45']>,
  '47': Next<IteratorOfMap['46']>,
  '48': Next<IteratorOfMap['47']>,
  '49': Next<IteratorOfMap['48']> // [any x 49]
}; // More impressive than it is... This bulky thing should be kept separate.
// I did try to generate it dynamically, but doing so would limit us to '45'.
// So this solution is more lightweight and allows to create lots of numbers.

// It's a cache, so it will only load once and provide the usual `Iterator`.
// It is a way to pre-compute our usual `Iterator`s and improve performance.

// So that's what we've used earlier to translate a string to a number. Thanks
// to this, we can manipulate the positions of a counter that is a string type:
type IteratorOf<Index extends string | number | symbol> =
  IteratorOfMap[Index extends keyof IteratorOfMap ? Index : '_'];

type test04 = Pos<IteratorOf<'30'>>;       // 30
type test05 = Pos<Prev<IteratorOf<'30'>>>; // 29

// This means that we can plug in onto `K` with the usual iteration tools, nice.
// Remember, we started doing all of this because `K` is a string. Let's finish:
type PipeItem<Fns extends Arrow[], K extends keyof Fns> =
  NumberOf<K> extends 0
  ? Fns[K] // If it's the first item, do nothing to it. Otherwise, pipe them:
  : (arg: ReturnType<Fns[Pos<Prev<IteratorOf<K>>>]>) => ReturnType<Fns[Pos<IteratorOf<K>>]>;

// What happened?
// `Pos<Prev<IteratorOf<K>>>` is the previous item compared to the current one
// `Pos<IteratorOf<K>>` is the current item, the one being iterated right now

// Both of those are positions that we queried `Fns` with. So what we did is:
// (arg: ReturnType<PreviousFunction>) => ReturnType<CurrentFunction>

// Let's test it:

// When it works
const test06 = pipe(
  (a: string) => true,
  (arg: boolean) => new Object(),
  (arg: {}) => 'string'
); // string

const test07 = pipe(
  (a: string) => [],
  (...arg: any[]) => (() => { }),
  (arg: Function) => arg
); // Function

// When it warns
const test08 = pipe(
  (a: string) => true,
  (arg: string) => new Object(),
  (arg: {}) => 'string'
); // error

const test09 = pipe(
  (a: string) => [],
  (...arg: any[]) => (() => { }),
  (arg: []) => arg
); // error

//////////////////////////////////////////////////////////////////////////////////////////
// LAST WORDS ////////////////////////////////////////////////////////////////////////////

// `IteratorOfMap` is not the most beautiful of types, I concede. But patches a
// lack of features when it comes to iteration. So it can help removing variadic
// type overloads that are often a lot of copy-paste (i.e shorter types).

// And we can now know the position we're at when iterating with mapped types.

// `curry` and `pipe` are two different variadic types. This is why they were
// constructed differently, yet they both address variadic type solving. So
// remember this: When operating on parameters, use mapped types like we did.
// Otherwise, in other scenarios like `Curry`, use well-known recursive types.

// Note:
// I first thought that https://github.com/Microsoft/TypeScript/pull/30215 would
// help me to build `pipe` but I could not find a usage for it after reflection.

//////////////////////////////////////////////////////////////////////////////////////////
// BONUS++ ///////////////////////////////////////////////////////////////////////////////

// We did not get so far and leave behind the cousin, `compose`. Because we
// still iterate with mapped types, we just have to invert `pipe`'s logic:
declare function compose<Fns extends any[]> (...args: Composer<Fns>):
  (...args: Parameters<Last<Fns>>) => ReturnType<First<Fns>>;

type Composer<Fns extends Arrow[]> = {
  [K in keyof Fns]: ComposeItem<Fns, K>
};

type ComposeItem<Fns extends Arrow[], K extends keyof Fns> =
  NumberOf<K> extends Length<Tail<Fns>>
  ? Fns[K]
  : (arg: ReturnType<Fns[Pos<Next<IteratorOf<K>>>]>) => ReturnType<Fns[Pos<IteratorOf<K>>]>;

// Let's test it:
const composed = compose(
  (message: string) => ({ message, date: Date.now() }), // receive previous return
  (info: { name: string, age: number }) => `Welcome, ${info.name}`,       // receive previous return
  (name: string, age: number) => ({ name, age })                 // receive parameters
);

const test10 = composed('Jane', 28); // {message: 'Welcome, Jane', date: 123456789}

//////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ////////////////////////////////////////////////////////////////////////////////

// `pipe` and `compose` can also be created from standalone types that can be
// composed with other types like `Curry`. So here we have `Pipe` & `Compose`:
type Pipe<Fns extends Arrow[]> = (...args: Piper<Fns>) =>
  (...args: Parameters<First<Fns>>) => ReturnType<Last<Fns>>;

type Compose<Fns extends Arrow[]> = (...args: Composer<Fns>) =>
  (...args: Parameters<Last<Fns>>) => ReturnType<First<Fns>>;

// They can be combined with `Curry`:
type CurriedPipe<Fns extends Arrow[]> = Curry<ReturnType<Pipe<Fns>>>;
type CurriedCompose<Fns extends Arrow[]> = Curry<ReturnType<Compose<Fns>>>;

// Then we can declare them like so:
declare function curriedPipe<Fns extends Arrow[]> (...fns: Piper<Fns>): CurriedPipe<Fns>;
declare function curriedCompose<Fns extends Arrow[]> (...fns: Composer<Fns>): CurriedCompose<Fns>;

// So let's test our curried pipe:
const curriedPiped = curriedPipe(
  (name: string, age: number) => ({ name, age }),                // receive parameters
  (info: { name: string, age: number }) => `Welcome, ${info.name}`,      // receive previous return
  (message: string) => ({ message, date: Date.now() }) // receive previous return
);

const test11 = curriedPiped('Jane')(28);

// Let's test a curried compose:
const curriedComposed = curriedCompose(
  (message: string) => ({ message, date: Date.now() }), // receive previous return
  (info: { name: string, age: number }) => `Welcome, ${info.name}`,       // receive previous return
  (name: string, age: number) => ({ name, age })                  // receive parameters
);

const test12 = curriedComposed('Jane')(28);

export default {};
