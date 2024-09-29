/**
 * Represents a node in a singly linked list.
 * @template T The type of value stored in the node.
 */
export class Node<T> {
  /** The value stored in the node. */
  value: T;
  /** Reference to the next node in the list, or null if it's the last node. */
  next: Node<T> | null;

  /**
   * Creates a new Node instance.
   * @param value The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a node in a doubly linked list.
 * @template T The type of value stored in the node.
 */
export class DoubleNode<T> {
  /** The value stored in the node. */
  value: T;
  /** Reference to the next node in the list, or null if it's the last node. */
  next: DoubleNode<T> | null;
  /** Reference to the previous node in the list, or null if it's the first node. */
  prev: DoubleNode<T> | null;

  /**
   * Creates a new DoubleNode instance.
   * @param value The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Interface representing a generic list data structure.
 * @template T The type of elements stored in the list.
 */
export interface List<T> {
  /**
   * Returns the first node in the list.
   * @returns The head node or null if the list is empty.
   */
  getHead(): Node<T> | null;

  /**
   * Returns the last node in the list.
   * @returns The tail node or null if the list is empty.
   */
  getTail(): Node<T> | null;

  /**
   * Returns the number of elements in the list.
   * @returns The length of the list.
   */
  getLength(): number;

  /**
   * Checks if the list is empty.
   * @returns True if the list is empty, false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Adds a new element to the end of the list.
   * @param value The value to be appended.
   */
  append(value: T): void;

  /**
   * Adds a new element to the beginning of the list.
   * @param value The value to be prepended.
   */
  prepend(value: T): void;

  /**
   * Removes the first occurrence of a specific value from the list.
   * @param value The value to be removed.
   */
  remove(value: T): void;

  /**
   * Removes the element at the specified index from the list.
   * @param index The index of the element to be removed.
   */
  removeAt(index: number): void;

  /**
   * Removes the first element from the list.
   */
  removeHead(): void;

  /**
   * Removes the last element from the list.
   */
  removeTail(): void;
}
