//Robinson

//Mardelys

//Bryan

//Angela

let tL = gsap.timeline ({
    repeat: Infinity,
    yoyo: true,
});

tL.to('.spectators-shadow',{
    duration: 2,
    y: 25,
    borderBottom: 10 ,
})

gsap.to('.blade',{
    duration:.8,
    y : 200,
    ease: Expo.easeIn
})

gsap.to('.head-sacrifice',{
    duration:.7,
    y : 105,
    delay: .5,
    ease: Expo.easeIn
})

gsap.fromTo('.blade-blood', {
    opacity:0,
},{
    opacity:1,
    delay:.7,
    duration:.3,
})


//Andres