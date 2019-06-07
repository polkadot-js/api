/* eslint-disable fp/no-arguments */

// How to master advanced TypeScript patterns
// Learn how to create types for curry and Ramda

//////////////////////////////////////////////////////////////////////////////////////////
// UPDATES ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// 24 March 2019

// I added a bonus for `pipe` and `compose` to learn more about complex types.

// ---------------------------------------------------------------------------------------
// 5 March 2019

// I have done a few (minimal) updates to maintain compatibility with TS 3.4.
// What kind of updates? I you run this on TS 3.4, you should see an error:
type Test00<T1 extends any[], T2 extends any[]> =
  Reverse<Cast<Reverse<T1>, any[]>, T2>;
// Type instantiation is excessively deep and possibly infinite. ts(2589)

// It happens when TS decides that types become too complex to compute (ie).
// The solution is to compute the types that cause problems step by step:
type Test01<T1 extends any[], T2 extends any[]> =
  Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>;

// This way, `Reverse<T1>` is computed into `R` and passed on to `Reverse`.

// ---------------------------------------------------------------------------------------
// 4 March 2019

// I did load tests on these types to prove that they're production-ready:

// 101319K: For an empty file
// 121135K: For the tool types

// From here, I pile up series of different load tests:
// 121643K (3.89s): https://gist.github.com/pirix-gh/d817d53dcbfa562efcac16762cfe4fea
// 129241K (3.68s): https://gist.github.com/pirix-gh/fc2e04fd66d0d6597748f8e50992c31f
// 128527K (4.20s): https://gist.github.com/pirix-gh/5d7d90cafa5cb58395b5f24a4346b477
// 127571K (4.05s): https://gist.github.com/pirix-gh/b05f62c455404ecf046ea86a7cd6d21c

// And finally, I doubled all the previous tests:
// 144528K (4.57s): https://gist.github.com/pirix-gh/93e78bfc9ec82633ee324ce76a2b9b86

// And to conclude, I removed Ramda types (leaving functions only):
// 126674K (4.50s): https://gist.github.com/pirix-gh/fcb4fbacd538a7865fe8c3cf5ff3df00

//////////////////////////////////////////////////////////////////////////////////////////
// INTRODUCTION //////////////////////////////////////////////////////////////////////////

// Despite the popularity of currying and the rise of functional programming
// (and of TypeScript), it is still a hassle today to make use of curry and have
// proper type checks. Even famous libraries like Ramda do not provide generic
// types for their curry implementations (but we will).

// However, you need no functional programming background to follow this guide.
// The guide is about currying but it is only a topic of my choice to teach you
// advanced TypeScript techniques. You just need to have practised a bit with
// TypeScript's primitive types. And by the end of this walk-through, you will
// be a real TS wizard 🧙.

// If you're a functional programmer, you are probably already using currying to
// create powerful compositions and partial applications... And if you are a bit
// behind, it's time to take the leap into functional programming, start
// shifting away from the imperative paradigm and solve problems faster, with
// ease, and promote reusability within your codebase.

// At the end of this guide, you will know how to create powerful types:
const toCurry = (name: string, age: number, single: boolean) => true;
const curried = curry(toCurry);

// Generic checks for variadic curry types
const test0 = curried('Jane')('26', true);

// And very powerful type checks for Ramda
const test1 = curried(R.__, 26)('Jane', R.__)(R.__)([true]);

// In fact, Ramda does have some kind of mediocre types for curry. These types
// are not generic, hard-coded, limiting us to a certain amount of parameters.
// As of version 0.26.x, it only follows a maximum of 6 arguments and does not
// allow us to use its famous placeholder feature very easily with TypeScript.
// Why? It's hard, but we agree that we had enough and we're going to fix this!

// But before we start, let's make sure that you have a very basic understanding
// of what currying is. Currying is the process of transforming a function that
// takes multiple arguments into a series of functions that take one argument at
// a time. Well that's the theory.

// I prefer examples much more than words, so let's create a function that takes
// two numbers and that simply returns the result of their addition:
const simpleAdd = (x: number, y: number) => x + y;
const test00 = simpleAdd(4, 6); // 10

// The curried version of `simpleAdd` would be:
const curriedAdd = (x: number) => (y: number) => x + y;
const test01 = curriedAdd(4)(2); // 6
const test02 = curriedAdd(15);   // Function
const test03 = test02(5);        // 20

// In this guide, I will first explain how to create TypeScript types that work
// with a standard curry implementation.
// Then, we will evolve them into more advanced types that can allow curried
// functions to take 0 or more arguments.
// And finally, we will be able to use "gaps" that abstract the fact that we are
// not capable or willing to provide an argument at a certain moment.

// TL;DR: We will create types for "classic curry" & "advanced curry" (Ramda).

//////////////////////////////////////////////////////////////////////////////////////////
// TUPLE TYPES ///////////////////////////////////////////////////////////////////////////

// Before we start learning the most advanced TypeScript techniques, I just want
// to make sure that you know tuples. Tuple types allow you to express an array
// where the type of a fixed number of elements is known. Let's see an example:
type tuple = ['a', number, string[]];

// They can be used to enforce the kind of values inside a fixed size array:
const test04: tuple = ['a', 1, ['b', 'c']];

// And can also be used in combination of rest parameters (or destructuring):
const test05 = (...args: tuple) => true;
const test06 = test05('a', 42, []);

// But before starting to build our awesome curry types, we're going to do a bit
// of a warm-up. We are going to create the first tools that we need to build
// one of the most basic curry types. Let's go ahead.

// Maybe you could guess... We are going to work with tuple types a lot. We'll
// use them as soon as we extracted the parameters from the "original" curried
// function. So for the purpose of an example, let's create a basic function:
const fn00 = (name: string, age: number, single: boolean) => true;
type test07 = Parameters<typeof fn00>; // [string, number, boolean]

// We extracted the parameter types from `fn00` thanks to the magic of
// `Parameters`. But it's not so magical when you recode it:
export type Params<F extends (...args: any[]) => any> =
  F extends ((...args: infer A) => any)
  ? A
  : never;

// Let's test it:
type test08 = Params<typeof fn00>; // [string, number, boolean]

// Good, it works just as `Parameters` does. Don't be scared of `infer`, it is
// one of the most powerful keywords for building types. I will explain it in
// more detail right after we practiced some more:

// ---------------------------------------------------------------------------------------
// HEAD

// Earlier, we learnt that a "classic curried" function takes one argument at a
// time. And we also saw that we can extract the parameter types in the form of
// a tuple type, very convenient.
// So `Head` takes a tuple type `T` and returns the first type that it contains.
// This way, we'll be able to know what argument type has to be taken at a time.
export type Head<T extends any[]> =
  T extends [any, ...any[]]
  ? T[0]
  : never;

// Let's test it:
type test9 = Head<[1, 2, string, number]>; // 1
type test10 = Head<Params<typeof fn00>>;    // string

// ---------------------------------------------------------------------------------------
// TAIL

// A "classic curried" function consumes arguments one by one. This means that
// when we consumed the `Head<Params<F>>`, we somehow need to move on to the
// next parameter that hasn't been consumed yet. This is the purpose of `Tail`,
// it conveniently removes the first entry that a tuple might contain.

// As of TypeScript 3.4, we cannot "simply" remove the first entry of a tuple.
// So, we are going to work around this problem by using one very valid trick:
export type Tail<T extends any[]> =
  ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
  ? TT
  : [];

// Using function types, we were able to tell TypeScript to infer the tuple that
// we wanted. If you do not understand it yet, it is not a problem, this is just
// a warm-up, remember?

// Let's test it:
type test11 = Tail<[1, 2, string, number]>; // [2, string, number]
type test12 = Tail<Params<typeof fn00>>;    // [number, boolean]
type test13 = Tail<test12>;                 // [boolean]

// ---------------------------------------------------------------------------------------
// HASTAIL

// A curried function will return a function until all of it's parameters have
// been consumed. This condition is reached when we called `Tail` enough times
// that there is no tail left, nothing's left to consume:
export type HasTail<T extends any[]> =
  T extends ([] | [any])
  ? false
  : true;

// Let's test it:
type params = [1, 2, string];
type test14 = HasTail<params>;             // true,  [1, 2, string]
type test15 = HasTail<Tail<params>>;       // true,  [   2, string]
type test16 = HasTail<Tail<Tail<params>>>; // false, [      string]

// ---------------------------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////////////////////
// IMPORTANT KEYWORDS ////////////////////////////////////////////////////////////////////

// You have encountered three important keywords: `type`, `extends` and `infer`.
// They can be pretty confusing for beginners, these are the ideas they convey:
//
// - `extends`:
//   To keep it simple, you are allowed to think of it as if it was our dear old
//   JavaScript's `===`. When you do so, you can see an `extends` statement as a
//   simple ternary, and then it becomes much simpler to understand. In this
//   case, `extends` is referred to as a conditional type.
//
// - `type`:
//   I like to think of a type as if it was a function, but for types. It has an
//   input, which are types (called generics) and has an output. The output
//   depends on the "logic" of a type, and `extends` is that block of logic,
//   similar to an `if` clause (or ternary).
//
// - `infer`:
//   It is the magnifying glass of TypeScript, a beautiful inspecting tool that
//   can extract types that are trapped inside different kinds of structures!

// I think that you understand both `extends` & `type` well and this is why we
// are going to practice a bit more with `infer`. We're going to extract types
// that are contained inside of different generic types. This is how you do it:

// ---------------------------------------------------------------------------------------
// Extract a property's type from an object

type ObjectInfer<O> =
  O extends { a: infer A }
  ? A             // If true
  : never;         // If false

// Let's test it:
const object = { a: 'hello' };
type test17 = ObjectInfer<typeof object>; // string
type test18 = ObjectInfer<string>;        // never

// ---------------------------------------------------------------------------------------
// Extract inner types from function types

type FunctionInfer<F> =
  F extends (...args: infer A) => infer R
  ? [A, R]        // If true
  : never;         // If false

// Let's test it:
const fn01 = (a: number, b: any) => true;
type test19 = FunctionInfer<typeof fn01>; // [[number, any], boolean]

// ---------------------------------------------------------------------------------------
// Extract generic types from a class or an interface

type ClassInfer<I> =
  I extends Promise<infer G>
  ? G
  : never;

// Let's test it:
const promise = new Promise<string>(() => { });
type test20 = ClassInfer<typeof promise>; // string

// ---------------------------------------------------------------------------------------
// Extract types from an array

type ArrayInfer<T> =
  T extends (infer U)[]
  ? U
  : never;

// Let's test it:
const array = [0, 'data', 1, 'data'];
type test21 = ArrayInfer<typeof array>; // string | number

// ---------------------------------------------------------------------------------------
// Extract types from a tuple

type TupleInfer<T> =
  T extends [infer A, ...(infer B)[]]
  ? [A, B]
  : never;

// Let's test it:
type test22 = TupleInfer<[string, number, boolean]>; // [string, number | boolean]

// We tried to infer the type of the rest of the tuple into a type `B` but it
// did not work as expected. It is because TypeScript lacks of a feature that
// would allow us to deconstruct a tuple into another one. There is an active
// proposal that tackles these issues and you can expect improved manipulation
// for tuples in the future. This is why `Tail` is constructed the way it is.

// ---------------------------------------------------------------------------------------

// `infer` is very powerful and it will be your main tool for type manipulation.

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V0 //////////////////////////////////////////////////////////////////////////////

// The warm-up 🔥 is over, you have the knowledge to build a "classic curry".
// But before we start, let's summarize (again) what it must be able to do:
const toCurry01 = (name: string, age: number, single: boolean) => true;
const curried01 = (name: string) => (age: number) => (single: boolean) => true;

// Our first curry type must take a tuple of parameters `P` and a return type
// `R`. It is a recursive function type that varies with the length of `P`:
type CurryV0<P extends any[], R> =
  // A "classic curry" takes only a single argument at a time
  (arg0: Head<P>) => HasTail<P> extends true
    // If we did not reach the end of the parameters, recurse
    ? CurryV0<Tail<P>, R>
    // Otherwise, infer the return type of the curried function
    : R;

// If `HasTail` reports `false`, it means that all the parameters were consumed
// and that it is time to return the return type `R` from the original function.
// Otherwise, there's parameters left to consume, and we recurse within our
// type.  Recurse? Yes, `CurryV0` describes a function that has a return type of
// `CurryV0` as long as there is a `Tail` (`HasTail<P> extends true`).

// This is as simple as it is. Here is the proof, without any implementation:
declare function curryV0<P extends any[], R> (f: (...args: P) => R): CurryV0<P, R>;

const toCurry02 = (name: string, age: number, single: boolean) => true;
const curried02 = curryV0(toCurry02);          // CurryV0<[string, number, boolean], boolean>
const test23 = curried02('Jane')(26)(true); // boolean

// But let's rather visualize the recursion that happened above, step by step:
const curried03 = curryV0(toCurry02); // CurryV0<[string, number, boolean], boolean>
const curried04 = curried03('Jane');  // CurryV0<[number, boolean], boolean>
const curried05 = curried04(26);      // CurryV0<[boolean], boolean>
const test24 = curried05(true);    // boolean

// And of course, type hints work for an unlimited amount of parameters 🎉:
const test25 = curried02('Jane')('26')(true); // error

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V1 //////////////////////////////////////////////////////////////////////////////

// Nice, but we forgot to handle the scenario where we pass a rest parameter:
const toCurry06 = (name: string, age: number, ...nicknames: string[]) => true;
const curried06 = curryV0(toCurry06);
const test26 = curried06('Jane')(26)('JJ', 'Jini'); // error

// We tried to use a rest parameter but it won't work because we actually
// expected a single parameter/argument that we earlier called `arg0`. So we
// want to take at least one argument `arg0` and we want to receive any extra
// (optional) arguments inside a rest parameter called `rest`. Let's enable
// taking rest parameters by upgrading it with `Tail` & `Partial`:
type CurryV1<P extends any[], R> =
  (arg0: Head<P>, ...rest: Tail<Partial<P>>) =>
    HasTail<P> extends true
    ? CurryV1<Tail<P>, R>
    : R;

// Let's test it:
declare function curryV1<P extends any[], R> (f: (...args: P) => R): CurryV1<P, R>;

const toCurry07 = (name: string, age: number, ...nicknames: string[]) => true;
const curried07 = curryV1(toCurry07);
const test27 = curried07('Jane', 26, 'JJ', 'Jini');

// But we made a horrible mistake: the arguments are consumed very badly.
// According to what we wrote, this will not produce a single TS error:
const test28 = curried07('Jane', 26, 'JJ')(26, 'JJ'); // should error

// In fact there is a big design problem because we said that we would force
// taking a single `arg0`. Somehow, we are going to need to keep track of the
// arguments that are consumed at a time. So, we will first get rid of `arg0`
// and start tracking consumed parameters
type CurryV2<P extends any[], R> =
  <T extends any[]>(...args: T) =>
    HasTail<P> extends true
    ? CurryV2<Tail<T>, R>
    : R;

// There, we made use of a constrained generic called `T` that is going to track
// any taken arguments. But now, it is completely broken, there is no more type
// checks because we said that we wanted to track `any[]` kind of parameters
// (the constraint). But not only, `Tail` is completely useless because it only
// worked well when we took one argument at a time.

// There is only one solution: some more tools 🔧.

//////////////////////////////////////////////////////////////////////////////////////////
// RECURSIVE TYPES ///////////////////////////////////////////////////////////////////////

// The following tools are going to be used to determine the next parameters to
// be consumed. How? By tracking the consumed parameters with `T` we should be
// able to guess what's left.

// Fasten your seat belt! You are about to learn another powerful technique 🚀:

// ---------------------------------------------------------------------------------------
// LAST

// Take your time to try to understand this complex yet very short type. This
// example takes a tuple as a parameter and it extracts its last entry out:
type Last<T extends any[]> = {
  0: Last<Tail<T>>
  1: Head<T>
}[
  HasTail<T> extends true
  ? 0
  : 1
];

// Let's test it:
type test29 = Last<[1, 2, 3, 4]>; // 4

// ---------------------------------------------------------------------------------------

// This example demonstrates the power of conditional types when used as an
// indexed type's accessor. A what? A conditional type that accesses a type's
// inner types in a command line fashion. For a more visual explanation:

// A Type<X, Y, ...> {      Conditional Accessor
// +---+------------+       +------------------+
// | 0 | Inner Type |       | X extends number |
// +----------------+       | ? 1              |
// | 1 | Inner Type |       | : Y extends ...  |
// +----------------+       |   ? 0            |
// | 2 | Inner Type |       |   : 2            |
// +----------------+       |                  |
// |...|    ...     |       | ...              |
// +----------------+       +------------------+
// }[Conditional Accessor]  ( 0 | 1 | 2 | ... )

// This technique is an ideal approach and a safe way to do recursion like we
// just did. But it is not only limited to recursion, it is a nice and a visual
// way to organise complex conditional types.

//////////////////////////////////////////////////////////////////////////////////////////
// BASIC TOOLS #1 ////////////////////////////////////////////////////////////////////////

// Where were we? We said that we needed tools in order to track arguments. It
// means that we need to know what parameter types we can take, which ones have
// been consumed and which ones are the next to come. Let's get started:

// ---------------------------------------------------------------------------------------
// LENGTH

// To do the analysis mentioned above, we will need to iterate over tuples. As
// of TypeScript 3.4.x, there is no such iteration protocol that could allow us
// to iterate freely (like a `for`). Mapped types can map from a type to
// another, but they are too limiting for what we want to do. So, ideally, we
// would like to be able to manipulate some sort of counter:
export type Length<T extends any[]> =
  T['length'];

// Let's test it:
type test30 = Length<[]>;              // 0
type test31 = Length<[any, any]>;      // 2
type test32 = Length<[any, any, any]>; // 3

// By topping a tuple up with `any`, we created something that could be similar
// to a variable that can be incremented. However, `Length` is just about giving
// the size of a tuple, so it also works with any other kind of tuple:
type test33 = Length<['a', 1, null, string]>; // 4

// ---------------------------------------------------------------------------------------
// PREPEND

// It adds a type `E` at the top of a tuple `T` by using our first TS trick:
export type Prepend<E, T extends any[]> =
  ((head: E, ...args: T) => any) extends ((...args: infer U) => any)
  ? U
  : T;

// Let's test it:
type test34 = Prepend<string, []>;     // [string]
type test35 = Prepend<number, [1, 2]>; // [number, 1, 2]

// In `Length`'s examples, we manually increased a counter. So `Prepend` is the
// ideal candidate to be the base of a counter. Let's see how it would work:
type test36 = [any, any, any];
type test37 = Length<test36>;               // 3
type test38 = Length<Prepend<any, test36>>; // 4

// ---------------------------------------------------------------------------------------
// DROP

// It takes a tuple `T` and drops the first `N` entries. To do so we are going
// to use the same techniques we used in `Last` and our brand new counter type:
export type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<any, I>>
  1: T
}[
  Length<I> extends N
  ? 1
  : 0
];

// Let's test it:
type test39 = Drop<2, [0, 1, 2, 3]>;     // [2, 3]
type test40 = Drop<Length<test39>, [0]>; // []

// ---------------------------------------------------------------------------------------

// What happened?

// The `Drop` type will recurse until `Length<I>` matches the value of `N` that
// we passed. In other words, the type of index `0` is chosen by the conditional
// accessor until that condition is met. And we used `Prepend<any, I>` so that
// we can increase a counter like we would do in a loop. Thus, `Length<I>` is
// used as a recursion counter, and it is a way to freely iterate with TS.

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V3 //////////////////////////////////////////////////////////////////////////////

// It's been long and tough to get here, well done! There's a reward for you 🥇
// Now, let's say that we tracked that 2 parameters were consumed by our curry:
type parameters = [string, number, boolean, string[]];
type consumed = [string, number];

// Because we know the amount of consumed parameters, we can guess the ones that
// are still left to be consumed. Thanks to the help of `Drop`, we can do this:
type toConsume = Drop<Length<consumed>, parameters>; // [boolean, string[]]

// It looks like `Length` and `Drop` are precious tools. So let's revamp our
// previous version of curry, the one that had a broken `Tail`:
type CurryV3<P extends any[], R> =
  <T extends any[]>(...args: T) =>
    Length<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never> extends 0
    ? R
    : CurryV3<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>;

// What did we do here?

// First, `Drop<Length<T>, P>` means that we remove consumed parameters out.
// Then, if the length of `Drop<Length<T>, P>` is not equal to `0`, our curry
// type has to continue recursing with the dropped parameters until...
// Finally, when all of the parameters were consumed, the `Length` of the
// dropped parameters is equal to `0`, and the return type is `R`.

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V4 //////////////////////////////////////////////////////////////////////////////

// But we've got another error above, TS complains that our `Drop` is not of
// type `any[]`. Sometimes, TS will complain that a type is not the one you
// expected, but you know it is! So let's add another tool to the collection:

// ---------------------------------------------------------------------------------------
// CAST

// It requires TS to re-check a type `X` against a type `Y`, and type `Y` will
// only be enforced if it fails. This way, we're able to stop TS's complaints:
export type Cast<X, Y> = X extends Y ? X : Y;

// Let's test it:
type test41 = Cast<[string], any>;    // [string]
type test42 = Cast<[string], number>; // number

// ---------------------------------------------------------------------------------------

// And this is our previous curry, but without any complaint this time:
type CurryV4<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Partial<P>>) =>
    Length<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never> extends 0
    ? R
    : CurryV4<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>;

// Remember earlier, when we lost the type checks because we started tracking
// consumed parameters with `T extends any[]`? Well it has been fixed by casting
// `T` to `Partial<P>`. We added a constraint with `Cast<T, Partial<P>>`!

// Let's test it:
declare function curryV4<P extends any[], R> (f: (...args: P) => R): CurryV4<P, R>;

const toCurry08 = (name: string, age: number, single: boolean) => true;
const curried08 = curryV4(toCurry08);

const test43 = curried08('Jane')(26)(true); // boolean
const test44 = curried08('Jane', 26, true); // boolean
const test45 = curried08('Jane', 26)(4000); // error

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V5 //////////////////////////////////////////////////////////////////////////////

// Maybe you thought that we were able to take rest parameters, I am very sorry
// to inform you that we are not there yet. This is the reason why:
type restargs = [string, number, boolean, ...string[]];
type test46 = Length<restargs>; // number

// Because rest parameters can be unlimited, TS's best guess is that the length
// of our tuple is a `number`, it's kind of clever! So, we cannot make use of
// `Length` while dealing with rest parameters. Don't be sad, it's not so bad:

type CurryV5<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Partial<P>>) =>
    Drop<Length<T>, P> extends [any, ...any[]]
    ? CurryV5<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>
    : R;

// When all the non-rest parameters are consumed, `Drop<Length<T>, P>` can only
// match `[...any[]]`. Thanks to this, we used `[any, ...any[]]` as a condition
// to end the recursion.

// Let's test it:
declare function curryV5<P extends any[], R> (f: (...args: P) => R): CurryV5<P, R>;

const toCurry09 = (name: string, age: number, single: boolean, ...nicknames: string[]) => true;
const curried09 = curryV5(toCurry09);

const test47 = curried09('Jane', 26)(true, 'JJ', 'Jini'); // boolean
const test48 = curried09('Jane')(26, true, 'JJ', 'Jini'); // boolean
const test49 = curried09('Jane')(26)(true, 'JJ', 900000); // error

// Everything works like a charm 🌹. You just got yourself a smart, generic,
// variadic curry type. You will be able play with it very soon... But before
// you do so, what if I told you that our type can get even more awesome?

//////////////////////////////////////////////////////////////////////////////////////////
// PLACEHOLDERS //////////////////////////////////////////////////////////////////////////

// How awesome? We are going give our type the ability to understand partial
// application of any combination of arguments, on any position. According to
// Ramda's documentation, we can do so by using a placeholder called `_`. It
// states that for any curried function `f`, these calls are equivalent:
// f(1, 2, 3)
// f(_, 2, 3)(1)
// f(_, _, 3)(1)(2)
// f(_, 2, _)(1, 3)
// f(_, 2)(1)(3)
// f(_, 2)(1, 3)
// f(_, 2)(_, 3)(1)

// A placeholder or "gap" is an object that abstracts the fact that we are not
// capable or willing to provide an argument at a certain moment. Let's start by
// defining what a placeholder is. We can directly grab the one from Ramda:
import R from 'ramda';

type __ = typeof R.__;

// Earlier, we have learnt how to do our first type iterations by increasing a
// tuple's length. In fact, it is a bit confusing to use `Length` and `Prepend`
// on our counter type. And to make it clearer, we will refer to that counter as
// an iterator from now on. Here's some new aliases just for this purpose:

// ---------------------------------------------------------------------------------------
// POS (Position)

// Use it to query the position of an iterator:
export type Pos<I extends any[]> =
  Length<I>;

// ---------------------------------------------------------------------------------------
// NEXT (+1)

// It brings the position of an iterator up:
export type Next<I extends any[]> =
  Prepend<any, I>;

// ---------------------------------------------------------------------------------------
// PREV (-1)

// It brings the position of an iterator down:
export type Prev<I extends any[]> =
  Tail<I>;

// ---------------------------------------------------------------------------------------

// Let's test them:
type iterator = [any, any];          // 2 items
type test50 = Pos<iterator>;       // 2
type test51 = Pos<Next<iterator>>; // 3
type test52 = Pos<Prev<iterator>>; // 1

// ---------------------------------------------------------------------------------------
// Iterator

// It creates an iterator (our counter type) at a position defined by `Index`
// and is able to start off from another iterator's position by using `From`:
export type Iterator<Index extends number = 0, From extends any[] = [], I extends any[] = []> = {
  0: Iterator<Index, Next<From>, Next<I>>
  1: From
}[
  Pos<I> extends Index
  ? 1
  : 0
];

// Let's test it:
type test53 = Iterator<2>;         // [any, any]
type test54 = Iterator<3, test53>; // [any, any, any, any, any]
type test55 = Pos<test53>;         // 2
type test56 = Pos<test54>;         // 5

// ---------------------------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////////////////////
// BASIC TOOLS #2 ////////////////////////////////////////////////////////////////////////

// Good, so what do we do next? We need to analyze whenever a placeholder is
// passed as an argument. From there, we will be able to tell if an parameter
// has been "skipped" or "postponed". Here's some more tools for this purpose:

// ---------------------------------------------------------------------------------------
// REVERSE

// Believe it or not, we still lack a few basic tools. `Reverse` is going to
// give us the freedom that we needed. It takes a tuple `T` and turns it the
// other way around into a tuple `R`, thanks to our brand new iteration types:
export type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
  0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>
  1: R
}[
  Pos<I> extends Length<T>
  ? 1
  : 0
];

// Let's test it:
type test57 = Reverse<[1, 2, 3]>;      // [3, 2, 1]
type test58 = Reverse<test57>;         // [1, 2, 3]
type test59 = Reverse<[2, 1], [3, 4]>; // [1, 2, 3, 4]

// ---------------------------------------------------------------------------------------
// CONCAT

// And from `Reverse`, `Concat` was born. It simply takes a tuple `T1` and
// merges it with another tuple `T2`. It's kind of what we did in `test59`:
export type Concat<T1 extends any[], T2 extends any[]> =
  Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>;

// Let's test it:
type test60 = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]

// ---------------------------------------------------------------------------------------
// APPEND

// Enabled by `Concat`, `Append` can add a type `E` at the end of a tuple `T`:
export type Append<E, T extends any[]> =
  Concat<T, [E]>;

// Let's test it:
type test61 = Append<3, [1, 2]>; // [1, 2, 3]

// ---------------------------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////////////////////
// GAP ANALYSIS //////////////////////////////////////////////////////////////////////////

// We now have enough tools to perform complex type checks. But it's been a
// while since we discussed this "gap" feature, how does it work again? When a
// gap is specified as an argument, it's matching parameter is carried over to
// the next step (to be taken). So let's define types that understand gaps:

// ---------------------------------------------------------------------------------------
// GAPOF

// It checks for a placeholder in a tuple `T1` at the position described by an
// iterator `I`. If it is found, the matching type is collected at the same
// position in `T2` and carried over (saved) for the next step through `TN`:
type GapOf<T1 extends any[], T2 extends any[], TN extends any[], I extends any[]> =
  T1[Pos<I>] extends __
  ? Append<T2[Pos<I>], TN>
  : TN;

// Let's test it:
type test62 = GapOf<[__, __], [number, string], [], Iterator<0>>; // [number]
type test63 = GapOf<[__, __], [number, string], [], Iterator<1>>; // [string]

// ---------------------------------------------------------------------------------------
// GAPSOF

// Don't be impressed by this one, it calls `Gap` over `T1` & `T2` and stores
// the results in `TN`. And when it's done, it concats the results from `TN` to
// the parameter types that are left to be taken (for the next function call):
type GapsOf<T1 extends any[], T2 extends any[], TN extends any[] = [], I extends any[] = []> = {
  0: GapsOf<T1, T2, GapOf<T1, T2, TN, I> extends infer G ? Cast<G, any[]> : never, Next<I>>
  1: Concat<TN, Drop<Pos<I>, T2> extends infer D ? Cast<D, any[]> : never>
}[
  Pos<I> extends Length<T1>
  ? 1
  : 0
];

// Let's test it:
type test64 = GapsOf<[__, any, __], [number, string, object, string[]]>; // [number, object, string[]]
type test65 = GapsOf<[any, __, any], [number, string, object, string[]]>; // [string, string[]]
type test66 = GapsOf<[__, __, __], []>;                                 // should never happen

// ---------------------------------------------------------------------------------------
// GAPS

// This last piece of the puzzle is to be applied to the tracked parameters `T`.
// We will make use of mapped types to explain that is is possible replace any
// argument with a placeholder:
type PartialGaps<T extends any[]> = {
  [K in keyof T]?: T[K] | __
};

// A mapped type allows one to iterate and alter properties of another type. In
// this case, we altered `T` so that each entry can be of the placeholder type.
// And thanks to `?`, we explained that each entry of `T` is optional. It means
// that we no longer have the need to use `Partial` on the tracked parameters.

// Let's test it:
type test67 = PartialGaps<[number, string]>;
// [(number | __ | undefined)?, (string | __ | undefined)?]

// Ugh, we never said that we could take `undefined`! We just wanted to be able
// to omit a part of `T`. It is a side effect of using the `?` operator. But it
// is not that bad, we can fix this by re-mapping with `NonNullable`:
type CleanedGaps<T extends any[]> = {
  [K in keyof T]: NonNullable<T[K]>
};

// So let's put the two together and get what we wanted:
type Gaps<T extends any[]> = CleanedGaps<PartialGaps<T>>;

// Let's test it:
type test68 = Gaps<[number, string]>;
// [(number | __)?, (string | __)?]

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY V6 //////////////////////////////////////////////////////////////////////////////

// We've built the last tools we will ever need for our curry type. It is now
// time to put the last pieces together. Just to remind you, `Gaps` is our new
// replacement for `Partial`, and `GapsOf` will replace our previous `Drop`:
type CurryV6<P extends any[], R> =
  <T extends any[]>(...args: Cast<T, Gaps<P>>) =>
    GapsOf<T, P> extends [any, ...any[]]
    ? CurryV6<GapsOf<T, P> extends infer G ? Cast<G, any[]> : never, R>
    : R;

// Let's test it:
declare function curryV6<P extends any[], R> (f: (...args: P) => R): CurryV6<P, R>;

// In order to make sure that everything works as intended, I am going to force
// the values that are to be taken by the curried example function:
const toCurry10 = (name: 'Jane', age: 26, single: true) => true;
const curried10 = curryV6(toCurry10);

const test69 = curried10(R.__, 26, R.__)('Jane', true);             // boolean
const test70 = curried10(R.__, R.__, R.__)(R.__, 26, true)('Jane'); // boolean
const test71 = curried10('Jane', R.__, true)(R.__)(R.__)({});       // expected 26

// There is just a little problem, it seems like we're a bit ahead of Ramda! Our
// type can understand very complex placeholder usages. In other words, Ramda's
// placeholders just don't work when they're combined with rest parameters 😱:
const toCurry11 = (name: string, age: number, single: true, ...nicknames: string[]) => true;
const curried11 = curryV6(toCurry11);

const test72 = curried11(R.__, 26)(R.__, true, 'JJ', R.__)('Jane', 'Jini'); // boolean
const test73 = curried11('Jane', 26, true, R.__)('JJ', R.__)('Jini');       // boolean

// However, even if this looks perfectly correct, it will result in a complete
// crash. This happens because the implementation of Ramda's curry does not deal
// well with combinations of placeholders and rest parameters. This is why I
// opened a ticket with Ramda on Github, in the hope that the types we've just
// created could one day work in harmony with the library.

//////////////////////////////////////////////////////////////////////////////////////////
// CURRY /////////////////////////////////////////////////////////////////////////////////

// This is very cute, but we have one last problem to solve: parameter hints. I
// don't know for you, but I use parameter hints a lot. It is very useful to
// know the names of the parameters that you're dealing with. The version above
// does not allow for these kind of hints. Here is the fix:
export type Curry<F extends ((...args: any) => any)> =
  <T extends any[]>(...args: Cast<Cast<T, Gaps<Parameters<F>>>, any[]>) =>
    GapsOf<T, Parameters<F>> extends [any, ...any[]]
    ? Curry<(...args: GapsOf<T, Parameters<F>> extends infer G ? Cast<G, any[]> : never) => ReturnType<F>>
    : ReturnType<F>;

declare function curry<F extends (...args: any) => any> (f: F): Curry<F>;

// I admit, it's completely awful! However, we got hints for Visual Studio Code.
// What did we do here? We just replaced the parameter types `P` & `R` that used
// to stand for parameter types and return type, respectively. And instead, we
// used the function type `F` from which we extracted the equivalent of `P` with
// `Parameters<F>` and `R` with `ReturnType<F>`. Thus, TypeScript is able to
// conserve the name of the parameters, even after currying:
const toCurry12 = (name: string, surname: string, age: number, single: true) => true;
const curried12 = curry(toCurry12);

const test74 = curried12(R.__)(R.__, 'Doe')(/* Ctrl+Shift+Space */);

// There's just one thing, when using gaps, we'll lose the name of a parameter.

// A word for IntelliJ users only: You won't be able to benefit from proper
// hints. I recommend that you switch to Visual Studio Code as soon as possible
// (it was brought by Microsoft after all). And it is community-driven, free,
// much (much) faster, and supports key bindings for IntelliJ users.

//////////////////////////////////////////////////////////////////////////////////////////
// LAST WORDS ////////////////////////////////////////////////////////////////////////////

// Finally, I would like to inform you that there is a current proposal for
// variadic types https://github.com/Microsoft/TypeScript/issues/5453. What
// you've learned here is not going to become obsolete, this proposal aims to
// ease the most common tuple type manipulations, so it is a very good thing for
// us. In a close future, it will enable easier tuple concatenations like the
// `Append`, `Concat`, and `Prepend` we've built, as well as destructuring, and a
// better way to describe variable function parameters.

// That's it. I know that it's a lot to digest at once so that's why I released
// a developer version of this article. You can clone it, test it and change it
// with TypeScript 3.3.x and above. Keep it close to you and learn from it until
// you become more comfortable with the different techniques 📖.
// https://github.com/pirix-gh/medium/blob/master/src/types-curry-ramda/index.ts

//////////////////////////////////////////////////////////////////////////////////////////

// High-five 👏 if you enjoyed this guide, and stay tuned for my next article!

// Thanks for reading. And if you have any questions or remarks, you are more
// than welcome to leave a comment.

//////////////////////////////////////////////////////////////////////////////////////////

export default {};
