//callback - function that is passsed as a parameter into another function

function welcome(){
    console.log("welcome")
}

function greet (){
    console.log("Greetings")
}

welcome(greet)

function task1(call) {
    setTimeout(() => {
        console.log("task 1 is running");
        call();
    },1000)
}

function task2(call) {
    setTimeout(() => {
        console.log("task 2 is running");
call()
    },2000)
}

task1(function(){
    task2(function(){
        console.log("end of execution")
    })
})

//solution to callback hell is promises

new Promise((resolve, reject)=> {
    let num=10;
    if(num%2==0){
        res("number is even")
    }
    else{
        rej("number is odd")
    }
})

Promise
.then((msg)=> console.log(msg))
.catch((err)=>console.log(err))
.finally(()=>console.log("Finally method"))