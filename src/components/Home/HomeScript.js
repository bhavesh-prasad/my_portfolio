import gsap from 'gsap';
const t = gsap.timeline({dafaults : {ease : "power1.out"}});
console.log("error");
    t.to('#text' , { x:"0%" , duration : 0.5});