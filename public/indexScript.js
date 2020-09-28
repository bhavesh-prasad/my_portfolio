const t = gsap.timeline({dafaults : {ease : "power1.out"}});
console.log("Done");
t.to('.textspan' , { y:"0%" , duration : 1});
t.to('#helperSplashWindow',{y:"-100%" , duration :2});
