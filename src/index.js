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
});

gsap.to('.blade',{
    duration:.8,
    y : 200,
    ease: Expo.easeIn
})

gsap.to('.head-sacrifice',{
    duration:.7,
    y : 105,
    x : 20,
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

gsap.fromTo('.sprite', {
    opacity:0,
},{
    opacity:.8,
    delay:2,
    duration:.3,
})

//sprite
function sprite () {
    let step = 1
    const movement = 369
    const maxStep = 6

    setTimeout(()=>{
        setInterval(() => {
            const sprite = document.querySelector('.sprite')
            if(step >= maxStep){
                return
            }
            const x = step * movement
            step = step > maxStep ? 1 : step + 1
            sprite.style.backgroundPosition = `-${x}px 0px`
        }, 70)
        gsap.to('.head-sacrifice',{
            duration:1,
            x : 1000,
            y : -300,
            delay: .5,
            ease: Expo.Out
        })
    },2000)

}

sprite ()


//Andres