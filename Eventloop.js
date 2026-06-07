console.log("Start of EventLoop.js")

setTimeout(()=>{
    console.log("This is from task queue (setTimeout)")
},0)

Promise.resolve().then(()=>{
    console.log("This is from microtask queue (Promise)")
})  

console.log("End of EventLoop.js")