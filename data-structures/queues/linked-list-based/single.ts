import {List, Node} from "./node.ts";

export class SingleLinkedList<T> implements List<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getHead(): Node<T> | null {
    return this.head;
  }
  getTail(): Node<T> | null {
    return this.tail;
  }
  getLength(): number {
    return this.length;
  }
  isEmpty(): boolean {
    return this.getLength() === 0;
  }
  append(value: T): void {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.t;
    }
  }
  prepend(value: T): void {
    throw new Error("Method not implemented.");
  }
  remove(value: T): void {
    throw new Error("Method not implemented.");
  }
  removeAt(index: number): void {
    throw new Error("Method not implemented.");
  }
  removeHead(): void {
    throw new Error("Method not implemented.");
  }
  removeTail(): void {
    throw new Error("Method not implemented.");
  }
}
