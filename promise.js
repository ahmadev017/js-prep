"use strict";
var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["FULFILLED"] = "fulfilled";
    PromiseState["REJECTED"] = "rejected";
})(PromiseState || (PromiseState = {}));
class MyPromise {
    state = PromiseState.PENDING;
    value;
    reason;
    thenCallbacks = [];
    catchCallbacks = [];
    finallyCallbacks = [];
    constructor(executor) {
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        }
        catch (error) {
            this.reject(error);
        }
    }
    then(callback) {
        if (this.state === PromiseState.FULFILLED) {
            callback(this.value);
        }
        if (this.state === PromiseState.PENDING) {
            this.thenCallbacks.push(callback);
        }
        return this;
    }
    catch(callback) {
        if (this.state === PromiseState.REJECTED) {
            callback(this.reason);
        }
        if (this.state === PromiseState.PENDING) {
            this.catchCallbacks.push(callback);
        }
        return this;
    }
    finally(callback) {
        if (this.state !== PromiseState.PENDING) {
            callback();
        }
        if (this.state === PromiseState.PENDING) {
            this.finallyCallbacks.push(callback);
        }
        return this;
    }
    resolve(value) {
        if (this.state !== PromiseState.PENDING)
            return;
        this.state = PromiseState.FULFILLED;
        this.value = value;
        this.thenCallbacks.forEach((callback) => {
            callback(value);
        });
        this.runFinallyCallbacks();
    }
    reject(reason) {
        if (this.state !== PromiseState.PENDING)
            return;
        this.state = PromiseState.REJECTED;
        this.reason = reason;
        this.catchCallbacks.forEach((callback) => {
            callback(reason);
        });
        this.runFinallyCallbacks();
    }
    runFinallyCallbacks() {
        this.finallyCallbacks.forEach((callback) => {
            callback();
        });
    }
}
const promise = new MyPromise((resolve, reject) => {
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
