console.log("Start");

setTimeout(() => {
  console.log("This is from task queue (setTimeout)");
}, 0);

function run() {
  Promise.resolve().then(() => {
    console.log("This is from microtask queue (Promise)");
    run();
  });
}

run();

console.log("End");