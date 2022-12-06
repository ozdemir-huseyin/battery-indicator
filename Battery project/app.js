//initalisation
let battery = 0
doldur()
/// bataryayi 0 dan 100 e doldurur
function doldur() {
    const interval = setInterval(() => {
        battery++
        document.getElementById("percentage").style.width = battery + "%"
        detectColor()
    if (battery === 101) {
        console.log("batarya doldu")
        clearInterval(interval)
        batteryFull = true
        bosalt()
    }
    }, 50);
    
}
function detectColor() {
    if (battery > 0 && battery <= 50) { //0 -49
        document.getElementById("percentage").style.background="green"
   }else if(battery >= 50  && battery <= 70){ // 50 - 70
       document.getElementById("percentage").style.background="orange"
   }else{
       document.getElementById("percentage").style.background="red"
   }
}
function bosalt() {
    const interval = setInterval(() => { 
        battery--
        document.getElementById("percentage").style.width =battery + "%"
        detectColor()
    if (battery === 0) {
        console.log("batarya bitti")
        clearInterval(interval)
       doldur()
    }
}, 100);}