// =========================
// MY EVENT EMITTER
// =========================

class MyEventEmitter {
  constructor() {
    // This object stores all events and their listeners

    // Example:
    // {
    //   customerEntered: [securityGuard, salesman]
    // }

    this.__event_listeners = {};
  }

  // =========================
  // ON -> Subscribe to an event
  // =========================

  on(event, listener) {
    // If event doesn't exist yet,
    // create an empty array

    if (!this.__event_listeners[event]) {
      this.__event_listeners[event] = [];
    }

    // Add listener to the event

    this.__event_listeners[event].push(listener);

    return true;
  }

  // =========================
  // EMIT -> Trigger an event
  // =========================

  emit(event, ...args) {
    // If nobody is listening
    // return false

    if (!this.__event_listeners[event]) {
      return false;
    }

    // Get all listeners for this event

    const listeners = this.__event_listeners[event];

    // Run each listener

    listeners.forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  // =========================
  // OFF -> Remove a listener
  // =========================

  off(event, listener) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    const index =
      this.__event_listeners[event].indexOf(listener);

    if (index < 0) {
      return false;
    }

    // Remove listener from array

    this.__event_listeners[event].splice(index, 1);

    return true;
  }

  // =========================
  // ONCE -> Run only one time
  // =========================

  once(event, listener) {
    // Wrapper function

    const wrapperFn = (...args) => {
      // Run original listener

      listener(...args);

      // Remove itself after first run

      this.off(event, wrapperFn);
    };

    // Store wrapper instead of listener

    this.on(event, wrapperFn);

    return true;
  }
}

// ======================================
// TEST EXAMPLE
// ======================================

const shop = new MyEventEmitter();

// Security guard listener

function securityGuard(customerName) {
  console.log(
    `👮 Security Guard: Customer ${customerName} entered the shop`
  );
}

// Salesman listener

function salesman(customerName) {
  console.log(
    `🧑‍💼 Salesman: Welcome ${customerName}!`
  );
}

// Free gift listener (ONLY FIRST CUSTOMER)

function giveFreeGift(customerName) {
  console.log(
    `🎁 Free Gift given to ${customerName}`
  );
}

// ======================================
// SUBSCRIBE LISTENERS
// ======================================

shop.on("customerEntered", securityGuard);

shop.on("customerEntered", salesman);

shop.once("customerEntered", giveFreeGift);

// ======================================
// FIRST CUSTOMER
// ======================================
// =========================
// MY EVENT EMITTER
// =========================

class MyEventEmitter {
  constructor() {
    // This object stores all events and their listeners

    // Example:
    // {
    //   customerEntered: [securityGuard, salesman]
    // }

    this.__event_listeners = {};
  }

  // =========================
  // ON -> Subscribe to an event
  // =========================

  on(event, listener) {
    // If event doesn't exist yet,
    // create an empty array

    if (!this.__event_listeners[event]) {
      this.__event_listeners[event] = [];
    }

    // Add listener to the event

    this.__event_listeners[event].push(listener);

    return true;
  }

  // =========================
  // EMIT -> Trigger an event
  // =========================

  emit(event, ...args) {
    // If nobody is listening
    // return false

    if (!this.__event_listeners[event]) {
      return false;
    }

    // Get all listeners for this event

    const listeners = this.__event_listeners[event];

    // Run each listener

    listeners.forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  // =========================
  // OFF -> Remove a listener
  // =========================

  off(event, listener) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    const index =
      this.__event_listeners[event].indexOf(listener);

    if (index < 0) {
      return false;
    }

    // Remove listener from array

    this.__event_listeners[event].splice(index, 1);

    return true;
  }

  // =========================
  // ONCE -> Run only one time
  // =========================

  once(event, listener) {
    // Wrapper function

    const wrapperFn = (...args) => {
      // Run original listener

      listener(...args);

      // Remove itself after first run

      this.off(event, wrapperFn);
    };

    // Store wrapper instead of listener

    this.on(event, wrapperFn);

    return true;
  }
}

// ======================================
// TEST EXAMPLE
// ======================================

const shop = new MyEventEmitter();

// Security guard listener

function securityGuard(customerName) {
  console.log(
    `👮 Security Guard: Customer ${customerName} entered the shop`
  );
}

// Salesman listener

function salesman(customerName) {
  console.log(
    `🧑‍💼 Salesman: Welcome ${customerName}!`
  );
}

// Free gift listener (ONLY FIRST CUSTOMER)

function giveFreeGift(customerName) {
  console.log(
    `🎁 Free Gift given to ${customerName}`
  );
}

// ======================================
// SUBSCRIBE LISTENERS
// ======================================

shop.on("customerEntered", securityGuard);

shop.on("customerEntered", salesman);

shop.once("customerEntered", giveFreeGift);

// ======================================
// FIRST CUSTOMER
// ======================================

console.log("\n---- Ahmad enters ----\n");

shop.emit("customerEntered", "Ahmad");

// ======================================
// SECOND CUSTOMER
// ======================================

console.log("\n---- John enters ----\n");

shop.emit("customerEntered", "John");

// ======================================
// REMOVE SALESMAN
// ======================================

console.log("\n---- Salesman goes home ----\n");

shop.off("customerEntered", salesman);

// ======================================
// THIRD CUSTOMER
// ======================================

console.log("\n---- Ali enters ----\n");

shop.emit("customerEntered", "Ali");