# Static Array

A static array is an array with a fixed size. The size of the array is determined at the time of creation and cannot be changed. The elements of the array are stored in contiguous memory locations. The elements of the array are accessed using zero-based indexing. The elements of the array are of the same type.

## Implementation

The implementation of a static array is straightforward. We use a fixed-size array to store the elements of the array. We also use a variable to store the size of the array.

## Example

```ts
const staticArray = new StaticArray<number>(5);
staticArray.set(0, 1);
staticArray.set(1, 2);
staticArray.set(2, 3);
staticArray.set(3, 4);
staticArray.set(4, 5);
```

## Performance

The performance of the static array is O(1) for accessing and setting elements.

## Usage

Static arrays are useful when you need an array with a fixed size. They are also useful when you need to ensure that the array is of a specific size.

## Related Data Structures

- [Dynamic Array](../dynamic/README.md)

## References

- [Static Array](https://en.wikipedia.org/wiki/Static_array)
- [Array](https://www.typescriptlang.org/docs/handbook/2/arrays.html)
- [Array - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
