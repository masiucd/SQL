# Dynamic Array

A dynamic array is an array that can grow or shrink in size. The size of the array is determined at the time of creation and can be changed at runtime. The elements of the array are stored in contiguous memory locations. The elements of the array are accessed using zero-based indexing. The elements of the array are of the same type.

## Implementation

The implementation of a dynamic array is more complex than that of a static array. We use a fixed-size array to store the elements of the array. We also use a variable to store the size of the array.

```ts
const dynamicArray = new DynamicArray<number>(5);
dynamicArray.set(0, 1);
dynamicArray.set(1, 2);
dynamicArray.set(2, 3);
dynamicArray.set(3, 4);
dynamicArray.set(4, 5);
```

## Performance

The performance of the dynamic array is O(1) for accessing and setting elements.

## Usage

Dynamic arrays are useful when you need an array that can grow or shrink in size. They are also useful when you need to ensure that the array is of a specific size.

## Related Data Structures

- [Static Array](../static/README.md)

## References

- [Dynamic Array](https://en.wikipedia.org/wiki/Dynamic_array)
- [Array](https://www.typescriptlang.org/docs/handbook/2/arrays.html)
- [Array - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
