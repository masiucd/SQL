export interface Stackable<T> {
  push(value: T): void;
  pop(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  getSize(): number;
  print(): void;
  isEmpty(): boolean;
  clear(): void;
}
export class Stack<T> implements Stackable<T> {
  #items: T[];
  #size: number;
  constructor() {
    this.#items = [];
    this.#size = 0;
  }
  push(value: T): void {
    this.#items.push(value);
    this.#size++;
  }
  pop(): T | null {
    let item = this.peek();
    if (item) {
      this.#items.pop();
      this.#size--;
    }
    return item;
  }
  peek(): T | null {
    let item = this.#items[this.#items.length - 1];
    if (item) {
      return item;
    }
    return null;
  }

  isEmpty(): boolean {
    return this.#size === 0;
  }
  getSize(): number {
    return this.#size;
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
}
