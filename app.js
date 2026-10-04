let start = document.getElementById("start")
let store = document.getElementById("store")
let stop = document.getElementById("stop")
let clear = document.getElementById("clear")
let display = document.getElementById("timer")
let ul = document.getElementById("listlap")
let second = 0;
let timer = null;
let array = [];

store.addEventListener("click", function () {
    array.push(display.innerText)
    console.log(array)
    ul.innerHTML = ""
    for (var value of array) {
        ul.innerHTML += `
        <li>${value}</li>
        `
    }
    if (array.length == 5) {
        second = 0;
        clearInterval(timer)
        start.disabled = false
        array = []
        store.disabled = true
         display.innerText = "00:00:00"


    }

})

clear.addEventListener("click", function () {
    second = 0;
    clearInterval(timer)
    start.disabled = false;
    display.innerText = "00:00:00"
})

// setTimeout: run only one
// setInterval : run every second 

// setTimeout(()=>{
//     alert("test")
// },3000)

start.addEventListener("click", function () {
    timer = setInterval(() => {
        store.disabled=false
        updateTime()
        start.disabled = true
    }, 1000)

})

stop.addEventListener("click", function () {
    clearInterval(timer)
    start.disabled = false
})
// 3700=>1
// 100/60: 1 mint: 40 second 

function updateTime() {
    second = second + 1
    let hrs = Math.floor(second / 3600);
    let mins = Math.floor((second % 3600) / 60);
    let sec = second % 60
    console.log(hrs + ":" + mins + ":" + sec)
    display.innerText = hrs.toString().padStart(2, "00") + ":" + mins.toString().padStart(2, "00") + ":" + sec.toString().padStart(2, "00")
}