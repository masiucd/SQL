// Static array is an array with a fixed size.
// The size of the array is determined at the time of creation and cannot be changed.
// The elements of the array are stored in contiguous memory locations.
// The elements of the array are accessed using zero-based indexing.
// The elements of the array are of the same type.

export class StaticArray<T> {
  #size: number;
  #array: T[];

  constructor(size: number) {
    this.#size = size;
    this.#array = new Array(size);
  }

  get(index: number): T | undefined {
    return this.#array[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.#size) {
      throw new Error("Index out of bounds");
    }
    this.#array[index] = value;
  }

  print(): void {
    console.log(this.#array);
  }

  length(): number {
    return this.#array.length;
  }
}
