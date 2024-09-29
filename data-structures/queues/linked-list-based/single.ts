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
    throw new Error("Method not implemented.");
  }
  getTail(): Node<T> | null {
    throw new Error("Method not implemented.");
  }
  getLength(): number {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  append(value: T): void {
    throw new Error("Method not implemented.");
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
