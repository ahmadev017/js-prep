type Resolve<T> = (value: T) => void;
type Reject<E> = (reason: E) => void;

type Executor<T, E> = (
  resolve: Resolve<T>,
  reject: Reject<E>
) => void;

type ThenCallback<T> = (value: T) => void;
type CatchCallback<E> = (reason: E) => void;
type FinallyCallback = () => void;

enum PromiseState {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

class MyPromise<T, E = unknown> {
  private state: PromiseState = PromiseState.PENDING;

  private value?: T;
  private reason?: E;

  private thenCallbacks: ThenCallback<T>[] = [];
  private catchCallbacks: CatchCallback<E>[] = [];
  private finallyCallbacks: FinallyCallback[] = [];

  constructor(executor: Executor<T, E>) {
    try {
      executor(
        this.resolve.bind(this),
        this.reject.bind(this)
      );
    } catch (error) {
      this.reject(error as E);
    }
  }

  public then(callback: ThenCallback<T>): MyPromise<T, E> {
    if (this.state === PromiseState.FULFILLED) {
      callback(this.value as T);
    }

    if (this.state === PromiseState.PENDING) {
      this.thenCallbacks.push(callback);
    }

    return this;
  }

  public catch(callback: CatchCallback<E>): MyPromise<T, E> {
    if (this.state === PromiseState.REJECTED) {
      callback(this.reason as E);
    }

    if (this.state === PromiseState.PENDING) {
      this.catchCallbacks.push(callback);
    }

    return this;
  }

  public finally(callback: FinallyCallback): MyPromise<T, E> {
    if (this.state !== PromiseState.PENDING) {
      callback();
    }

    if (this.state === PromiseState.PENDING) {
      this.finallyCallbacks.push(callback);
    }

    return this;
  }

  private resolve(value: T): void {
    if (this.state !== PromiseState.PENDING) return;

    this.state = PromiseState.FULFILLED;
    this.value = value;

    this.thenCallbacks.forEach((callback) => {
      callback(value);
    });

    this.runFinallyCallbacks();
  }

  private reject(reason: E): void {
    if (this.state !== PromiseState.PENDING) return;

    this.state = PromiseState.REJECTED;
    this.reason = reason;

    this.catchCallbacks.forEach((callback) => {
      callback(reason);
    });

    this.runFinallyCallbacks();
  }

  private runFinallyCallbacks(): void {
    this.finallyCallbacks.forEach((callback) => {
      callback();
    });
  }
}

const promise = new MyPromise<number, string>((resolve, reject) => {
  console.log("Promise started...");

  setTimeout(() => {
    resolve(500);
  }, 2000);
});

promise.then((value) => {
  console.log("First then:", value);
});

promise.then((value) => {
  console.log("Second then:", value);
});

promise.finally(() => {
  console.log("First finally");
});

promise.finally(() => {
  console.log("Second finally");
});

console.log("Waiting for promise...");