const player1 = document.querySelector(".name1");
const player2 = document.querySelector(".name2");
const startbtn = document.querySelector(".start");
const namebox = document.querySelector(".container1");
const timebox = document.querySelector(".container2");
const name1 = document.querySelector("#playerA");
const name2 = document.querySelector("#playerB");
const timeInMinute = document.querySelector("#timeInMinutes");
const start = document.querySelector("#startbtn");
const reset = document.querySelector("#resetbtn");
const minA = document.querySelector(".minA");
const secA = document.querySelector(".secA");
const minB = document.querySelector(".minB");
const secB = document.querySelector(".secB");




var names = {
    playerA : "",
    playerB : "",
    time : 0
}
var minutesA = 0;
var secondsA = 0;
var minutesB = 0;
var secondsB = 0;

startbtn.addEventListener("click",()=>{
    var playerA = player1.value;
    var playerB = player2.value;
    var timer = Number(timeInMinute.value);
    if (playerA.length >= 3 && playerB.length >= 3) {
    namebox.style.display = "none"
    timebox.style.display = "block"
    names.playerA = playerA;
    names.playerB = playerB;
    names.time = timer;
    name1.textContent = names.playerA
    name2.textContent = names.playerB
    minutesA = names.time;
    minutesB = names.time;
    secA.textContent = "00";
    secB.textContent = "00";
    if (minutesA < 10) {
        minA.textContent = `0${minutesA}`;
    }else{
        minA.textContent = minutesA;
    }
    if (minutesB < 10) {
        minB.textContent = `0${minutesB}`;
    }else{
        minB.textContent = minutesB;
    }
    }
})



const timeAUpdate = ()=>{
    if (secondsA == 0 && minutesA >= 0) {
        minutesA -= 1;
        secondsA = 60;
        secA.textContent = secondsA;
        if (minutesA < 10) {
            minA.textContent = `0${minutesA}`;
        }else{
            minA.textContent = minutesA;
        }
       }
       else if(minutesA == -1){
        document.querySelector("#over-left").style.display = "block";
        clearInterval(intervalA);
       }
       else{
        secondsA -= 1;
        if (secondsA < 10) {
            secA.textContent = `0${secondsA}`;
        }else{
          secA.textContent =  secondsA;
        }
        if (minutesA < 10) {
            minA.textContent = `0${minutesA}`;
        }else{
            minA.textContent = minutesA;
        }
        
           }
    
}
const timeBUpdate = ()=>{
    if (secondsB == 0 && minutesB >= 0) {
        minutesB -= 1;
        secondsB = 60;
        secB.textContent = secondsB;
        if (minutesB < 10) {
            minB.textContent = `0${minutesB}`;
        }else{
            minB.textContent = minutesB;
        }
       }
       else if(minutesB == -1){
        document.querySelector("#over-right").style.display = "block";
        clearInterval(intervalB);
       }
       else{
        secondsB -= 1;
        if (secondsB < 10) {
            secB.textContent = `0${secondsB}`;
        }else{
          secB.textContent =  secondsB;
        }   
        if (minutesB < 10) {
            minB.textContent = `0${minutesB}`;
        }else{
            minB.textContent = minutesB;
        }
           }
    
}

let intervalA;
let intervalB;

var flag = false;
start.addEventListener("click",()=>{   
 if (flag == false) {
    intervalA = setInterval(timeAUpdate,1000)
    flag = true;
    res = false;
 }
})

var space = 1;
window.addEventListener("keypress",(e)=>{
    if (e.code == "Space" && flag == true) {
        if (space == 1) {
            clearInterval(intervalA);
            intervalB = setInterval(timeBUpdate,1000)
            space = 0;
        } else if (space == 0 && flag == true) {
            intervalA = setInterval(timeAUpdate,1000)
            clearInterval(intervalB);
            space = 1;
        }
    }
})


var res = false;
reset.addEventListener("click",()=>{
    if(res == false){
    document.querySelector("#over-left").style.display = "none";
    document.querySelector("#over-right").style.display = "none";
    clearInterval(intervalA);
    clearInterval(intervalB);
    minutesA = Number(timeInMinute.value);
    minutesB = Number(timeInMinute.value);
    secondsA = 0;
    secondsB = 0;
   secA.textContent = "00";
    secB.textContent = "00";
    if (minutesA < 10) {
        minA.textContent = `0${minutesA}`;
    }else{
        minA.textContent = minutesA;
    }
    if (minutesB < 10) {
        minB.textContent = `0${minutesB}`;
    }else{
        minB.textContent = minutesB;
    }
    flag = false;
    res = true;
    space = 1;
    }
})




