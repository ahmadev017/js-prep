class TaskScheduler {
    constructor(concurrency){
       this.concurrency = Number (concurrency);
       this.runningTask = 0;
       this.waitingTasks = [];
    }

getNextTask(){
    if(this.waitingTasks.length > 0 && this.runningTask < this.concurrency){
        const nextTask = this.waitingTasks.shift();
        nextTask();
    }
}

addTask(task){
  return new Promise((resolve ,reject) =>{
    async function _taskRunner(){
        this.runningTask++;
        try{
           const result = await task()
           console.log(result);
           resolve(result);
        }catch(err){
            console.log(err);
            reject(err);
        }finally{
            this.runningTask--;
            this.getNextTask();
        }
    }
    
    if(this.runningTask < this.concurrency){
        _taskRunner.call(this);
    }else{
        this.waitingTasks.push(_taskRunner.bind(this));    
    }

  })
}

}



//test examples
const scheduler = new TaskScheduler(2); // Allow 2 concurrent tasks

async function exampleTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 2000);
    });
}

scheduler.addTask(exampleTask);
scheduler.addTask(exampleTask);
scheduler.addTask(exampleTask);