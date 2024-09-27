# Multiple of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## Examples

```ts
assertEquals(multiplesOf3Or5(10), 23);
assertEquals(multiplesOf3Or5(49), 543);
assertEquals(multiplesOf3Or5(19564), 89301183);
```

## Solution

```ts
export function multiplesOf3Or5(number: number) {
  let xs = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      xs.push(i);
    }
  }
  return xs.reduce((a, b) => a + b, 0);
}
```

## Explanation

We iterate through all the numbers below the given number and check if they are multiples of 3 or 5. If they are, we add them to the array. Finally, we reduce the array to a single value by summing all the elements.
