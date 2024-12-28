# Xo count

## Description

Write a function that takes a string and returns true if the number of `x`'s is equal to the number of `o`'s (and false otherwise).

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true

## Note

The string can contain any char.

When no x and no o are in the string, should return true.

```js
// Test cases
Test.assertEquals(XO("xo"), true);
Test.assertEquals(XO("xxOo"), true);
Test.assertEquals(XO("xxxm"), false);
Test.assertEquals(XO("Oo"), false);
Test.assertEquals(XO("ooom"), false);
```
