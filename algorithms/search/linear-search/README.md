# Linear search

Linear search is a simple search algorithm that iterates through a list of elements one by one until it finds the target element or reaches the end of the list. It is also known as sequential search.

## Time Complexity

- Best Case: O(1)
- Average Case: O(n)
- Worst Case: O(n)

## Space Complexity

O(1)

## Implementation

```ts
export function linearSearch(nums: number[], target: number) {
  for (let [i, n] of nums.entries()) {
    if (n === target) {
      return i;
    }
  }
  return -1;
}
```

## Example

```ts
linearSearch([1, 2, 3], 2); // 1
linearSearch([1, 2, 3], 3); // 2
linearSearch([1, 2, 3], 4); // -1
```

## When to use

- When the list is unsorted
- When the list is small
- When the list is not frequently updated

## When to avoid

- When the list is large
- When the list is frequently updated
- When the list is sorted
