// Node in Doubly Linked List
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> node
    // Dummy head and tail to simplify insert/delete
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    // Remove node from DLL
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    // Add node right before tail (most recently used)
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._remove(node); // move it to the end
    this._add(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const existing = this.map.get(key);
      this._remove(existing);
    }

    const node = new Node(key, value);
    this._add(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
      // remove least recently used (head.next)
      const lru = this.head.next;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}

// Example usage
const cache = new LRUCache(2);

cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1)); // 10
cache.put(3, 30);           // evicts key 2
console.log(cache.get(2)); // -1
cache.put(4, 40);           // evicts key 1
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40