# Read storage

Many important variables are available through the storage API. This example shows how to call a few of those APIs using ApiRx.

**Challenge**: Try refactoring the code to use the RxJS `first()` operator (unsubscribes after the 1st value, potentially with some values being `undefined`, `null`, or `false`) instead of manually unsubscribing (where it actually will not unsubscribe if node errors causing it to `console.log` with one of the returned values being `undefined`, `null`, or `false`, and then waiting for the next value before `console.log` again)

[include](index.js)
