# Binary search

Binary search is a search algorithm that finds the position of a target value within a sorted array. It is also known as half-interval search, logarithmic search, or binary chop.

## Time Complexity

- Best Case: O(1)
- Average Case: O(log n)
- Worst Case: O(log n)

## Space Complexity

O(1)

## Implementation

```ts
export function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

## Example

```ts
binarySearch([1, 2, 3, 4], 3); // 2
binarySearch([1, 2, 3, 4], 33); // -1
```

## When to use

- When the list is sorted
- When the list is large
- When the list is frequently updated

## When to avoid

- When the list is unsorted
- When the list is small
- When the list is not frequently updated

## How it works

1. Compare the target value to the middle element of the array
2. If the target value is less than the middle element, narrow the search to the left half of the array
3. If the target value is greater than the middle element, narrow the search to the right half of the array
4. Repeat steps 1-3 until the target value is found or the search space is empty

## Example

```ts
binarySearch([1, 2, 3, 4], 3); // 2
binarySearch([1, 2, 3, 4], 33); // -1
```

## How it works

1. Compare the target value to the middle element of the array
2. If the target value is less than the middle element, narrow the search to the left half of the array
3. If the target value is greater than the middle element, narrow the search to the right half of the array
4. Repeat steps 1-3 until the target value is found or the search space is empty
