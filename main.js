let circle = document.querySelector(".circle")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")
let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let anpm = document.querySelector(".anpm")

setInterval(() =>{
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;
circle3.style.transform = `rotateZ(${hh+(mm/12)}deg)`
circle2.style.transform = `rotateZ(${mm}deg)`
circle.style.transform = `rotateZ(${ss}deg)`
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM"

h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

if(h > 12){
    h = h - 12
}

hour.innerHTML = h;
min.innerHTML = m;
sec.innerHTML = s;
anpm.innerHTML = am;
})



