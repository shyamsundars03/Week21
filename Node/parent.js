const {worker, workerData} = require("worker_threads")
const child = require("./child")
const parent = worker.createWorker({
    workerData:{num:5}
})

parent.on("msg",(msg)=>{
    console.log("from parent",msg)
})
