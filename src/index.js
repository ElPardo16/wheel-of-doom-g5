//variables globales
var lista = document.getElementById("info")
var inputName = document.getElementById("name")
var btnAdd = document.getElementById("add")
var btnPlay = document.getElementById("play")
var ready = false
var lastIndexAnim = 0
var saveListNames = [
    {
        name: "profe juliana",
        sacrificado: false
    },
    {
        name: "profe jimmy",
        sacrificado: false
    }
]
var listNamesGame = [...saveListNames]
var deads = 0;
var animationTime = 2000;
//Robinson

var tl = gsap.timeline();
const $playAnimation = document.querySelector('#iniciar_animacion');

/* $playAnimation.addEventListener('click', (e) => {
   e.preventDefault();
   document.value = true;
   for(i = 0;document.value === true;i++) {
      tl.restart(false,false)
      return playAnimation();
   };
}); */

function playAnimation() {
    /* tl.from('.cuerpos', {
        duration: 2.5, ease: "elastic.out(1, 0.3)", x: 500
    }, 2.5) */
    tl.to("#sierra_girar", { rotation: 1800, duration: 5, ease: "none" }, 0);
    tl.to('.cuerpos', {
        duration: 1.2, ease: "elastic.out(1, 0.3)", x: 0
    }, 1.2)
    tl.to("#img_hacha", {
        rotation: -750,
        x: "-130%",
        y: "-210%",
        delay: 1.5,
        ease: "none",
    }, 1);

    tl.to(".cuerpo_dospartes", {
        ease: "power4.out",
        y: 180,
        delay: .8,
    }, 2.5);

    tl.to(".parte_1_cuerpo", {
        rotation: 45,
        duration: 1,
        delay: 2.5,
    }, 1);

    tl.to(".parte_2_cuerpo", {
        rotation: -65,
        duration: .2,
        delay: 2.5,
        display: 'none'
    }, 1);

};
//Mardelys

//const $playRuleta = document.querySelector('#play-ruleta');

/* $playRuleta.addEventListener('click', (e) => {
   e.preventDefault();
   document.value = true;
   for(i = 0;document.value === true;i++) {
      tl.restart(false,false)
      return playRuleta();
   };
}); */

function playRuleta() {
    tl.to('.ruleta', {
        duration: 1,
        rotate: '359deg',
        x: 0,
        repeat: 2,
        ease: "linear"
    }, '0')


    tl.to('.cuerpo-ruleta', {
        duration: 1,
        rotate: '359deg',
        repeat: 2,
        display: 'none',
        ease: "linear"
    }, '0')



    tl.to('.hacha', {
        duration: 0.9,
        rotate: '-740deg',
        x: '-70%',
        y: '-130%',
        scale: 0.7,
        ease: "linear"
    }, '+2')
    tl.from('.hacha', {
        duration: 0.9,
        ease: "linear"
    }, '+3.5')

    tl.to('.cuerpo-ruleta2', {
        duration: 0.4,
        rotate: '-12deg',
        repeat: 0,
        display: 'block',
    }, '+3')

    tl.to('.cuerpo-ruleta1', {
        duration: 0.4,
        rotate: '15deg',
        repeat: 0,
        display: 'block',
    }, '+3')
    tl.to('.sangre-ruleta', {
        duration: 0.3,
        rotate: '15deg',
        repeat: 0,
        display: 'block',
    }, '+3')
};

//Bryan
function saw() {
    gsap.config({ trialWarn: false });

    let mm = gsap.matchMedia();
    gsap.fromTo('.saw', {
        //left: 0,
        rotation: 0,
    },{
        rotation: 2000,
        ease: 'linear',
        duration: 5,
    });
    gsap.fromTo('.saw-b', {
        rotation: 0,
        opacity: 0,
    },{
        rotation: 2000,
        ease: 'linear',
        opacity: 1,
        delay: 1,
        duration: 4,
    });

    gsap.fromTo('.bodysuit', {
        y:  0 ,
        rotation: 0
    },{
        ease: 'none',
        y:  500 ,
        delay: 1,
        duration: 2,
    });
   
    gsap.from('.body-right', {
        rotation: 0,
    });
    gsap.to('.body-right', {
        rotation: 90,
        delay: 2,
        duration: 5,
    });
    gsap.from('.body-left', {
        rotation: 0,
    });
    gsap.to('.body-left', {
        rotation: -90,
        delay: 2,
        duration: 5,
    });

    gsap.from('.b1', {
        scale: 0,
        duration: 3,
        delay: 2,
    })

    gsap.to('.b1', {
        duration: 3,
        scale: 1,
        delay: 2,
        y:  50 ,
        x:  150,
    });

    gsap.from('.b2', {
        scale: 0,
        duration: 3,
        delay: 2,
    })

    gsap.to('.b2', {
        duration: 3,
        scale: 1,
        delay: 2,
        y:  50 ,
        x:  -150,
    });

    gsap.from('.b3', {
        scale: 0,
        duration: 3,
        delay: 2,
    });

    gsap.to('.b3', {
        duration: 3,
        scale: 1,
        delay: 2,
        rotation: -30,
        y: 150,
    });

    gsap.from('.b4', {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        y: 100,
        x: -70,
    })

    gsap.to('.b4', {
        ease: 'none',
        delay: 4,
        duration: 2,
        opacity: 1,
    });

    gsap.to('.lung-l', {
        ease: 'none',
        x:  -200 ,
        y:  150,
        rotation: 245,
        delay: 4,
        duration: 5,
        opacity: 1,
    });

    gsap.to('.lung-r', {
        ease: 'none',
        x: 200 ,
        y: 150 ,
        rotation: 255,
        delay: 4,
        duration: 5,
        opacity: 1,
    });

    gsap.to('.brain-l', {
        ease: 'none',
        x: -100 ,
        y:  250 ,
        rotation: 255,
        delay: 5,
        duration: 6,
        opacity: 1,
    });

    gsap.to('.brain-r', {
        ease: 'none',
        x: 100,
        y:  250 ,
        rotation: 260,
        delay: 5,
        duration: 6,
        opacity: 1,
    })

   
}

//Angela

function guillotina() {

    //const guillotine = document.getElementById('container-guillotine')
    //guillotine.classList.replace('hide', 'show')

    let tL = gsap.timeline({
        repeat: Infinity,
        yoyo: true,
    });

    tL.to('.spectators-shadow', {
        duration: 2,
        y: 25,
    });

    gsap.fromTo('.blade', {
        y: 0,
    }, {
        duration: .8,
        y: 180,
        ease: Expo.easeIn
    })


    gsap.fromTo('.head-sacrifice', {
        y: 0,
        x: 0,
    }, {
        duration: .7,
        y: 105,
        x: 20,
        delay: .5,
        ease: Expo.easeIn
    })

    gsap.fromTo('.blade-blood', {
        opacity: 0,
    }, {
        opacity: 1,
        delay: .7,
        duration: .3,
    })

    gsap.fromTo('.sprite', {
        opacity: 0,
    }, {
        opacity: .8,
        delay: 2,
        duration: .3,
    })

    //sprite
    function sprite() {
        let movement = screen.width < 1000 ? 300 : 330;
        let step = 1
        const maxStep = 6

        setTimeout(() => {
            setInterval(() => {
                const sprite = document.querySelector('.sprite')
                if (step >= maxStep) {
                    return
                }
                const x = step * movement
                step = step > maxStep ? 1 : step + 1
                sprite.style.backgroundPosition = `-${x}px 0px`
            }, 70)
            gsap.to('.head-sacrifice', {
                duration: .8,
                x: 1000,
                y: -300,
                delay: .5,
                ease: Expo.Out
            })
        }, 2000)

    }

    sprite()

}

//guillotina()


//Andres
function delay(seconds) {
    seconds = seconds || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, seconds);
    });
}
function drawArray(names) {
    lista.innerHTML = ""
    names.forEach(({ name, sacrificado }) => {
        if (!sacrificado) {
            lista.innerHTML += `<li><span>${name}</span><a href="javascript:void(0)" onclick="deleteName(this)"><span class="material-symbols-outlined">delete</span></a></li>`
        } else {
            lista.innerHTML += `<li><span class="dead">${name}</span><a href="javascript:void(0)" onclick="deleteName(this)"><span class="material-symbols-outlined">delete</span></a></li>`
        }
    })
}
function addName() {
    if (!listNamesGame.some(({ name }) => name == inputName.value.toLowerCase())) {
        if (inputName.value != "") {
            listNamesGame.push({
                name: inputName.value.toLowerCase(),
                sacrificado: false
            })
            drawArray(listNamesGame)
        } else {
            //console.log("vacio")
            Swal.fire({
                icon: 'error',
                heightAuto: false,
                title: 'Campo vacío',
                text: 'No es posible sacrificar una persona si no sabemos su nombre',
            })
        }
    } else {
        //console.log("repite")
        Swal.fire({
            icon: 'error',
            heightAuto: false,
            title: 'Nombre repetido',
            text: 'Esta persona ya se encuentra en la lista, ¡prueba con otra!',
        })
    }
}
function deleteName(element) {
    let txtName = element.previousElementSibling.innerHTML
    listNamesGame = listNamesGame.filter(({ name }) => name != txtName)
    drawArray(listNamesGame)
}
async function sacrifice() {
    let indexRandom = Math.floor(Math.random() * listNamesGame.length)
    while (!ready) {
        if (deads < listNamesGame.length) {
            if (listNamesGame[indexRandom].sacrificado) {
                indexRandom = Math.floor(Math.random() * listNamesGame.length)
            } else {
                /* ready = true */
                //console.log("1 menos")
                let n = listNamesGame[indexRandom].name
                Swal.fire({
                    title: 'Proximo Sacrificado...',
                    imageUrl: 'https://i.postimg.cc/bw91g8N3/homero-lista.png',
                    imageHeight: 150,
                    text: listNamesGame[indexRandom].name,
                    confirmButtonColor: "red",
                    confirmButtonText: 'Ok',
                    showConfirmButton: false,
                    timer: 2500,
                    heightAuto: false,
                    timerProgressBar: true,
                })
                await delay(3000)
                await animationRandom()
                if(!ready){
                    listNamesGame.forEach((item) =>{
                        if(item.name == n){
                            item.sacrificado = true
                        }
                    })
                    drawArray(listNamesGame)
                    deads++
                }else{
                    break
                }
            }
        } else {
            ready = true
            //dialogo
            //console.log("se acabaron Game over")
            Swal.fire({
                title: 'Juego terminado',
                imageUrl: 'https://i.postimg.cc/wjMg3jNN/homero-parca.png',
                imageHeight: 150,
                text: "No quedan más sacrificios",
                confirmButtonColor: "red",
                confirmButtonText: 'Ok',
                showConfirmButton: false,
                timer: 4000,
                heightAuto: false,
                timerProgressBar: true
            })
            await delay(4100)
            //alert("perdio")
            document.location.href = "game-over.html"
        }
        //drawArray(listNamesGame)
    }
    //console.log(listNamesGame.length)
}
async function animationRandom() {
    let indexAnimation = Math.floor(Math.random() * 8)
    //let indexAnimation = 0
    while(true){
        if(lastIndexAnim == indexAnimation){
            indexAnimation = Math.floor(Math.random() * 8)
        }else{
            break
        }
    }
    switch (indexAnimation) {
        case 0:
        case 5:
            //hace algo
            animationTime = 5000
            anim2.classList.remove("animHide")
            tl.restart(false, false)
            playRuleta()
            await delay(animationTime)
            anim2.classList.add("animHide")
            break;
        case 1:
        case 6:
            animationTime = 5000
            anim1.classList.remove("animHide")
            tl.restart(false, false)
            playAnimation()
            await delay(animationTime)
            anim1.classList.add("animHide")
            break;
        case 2:
        case 4:
            animationTime = 5000
            anim4.classList.remove("animHide")
            guillotina()
            await delay(animationTime)
            anim4.classList.add("animHide")
            break;
        case 3:
        case 7:
            animationTime = 7000
            anim3.classList.remove("animHide")
            saw()
            await delay(animationTime)
            anim3.classList.add("animHide")
            break;
        // terminar
    }
    lastIndexAnim = indexAnimation
}
function restartGame() {
    ready = true
    deads = 0
    Swal.fire({
        title: 'Reseteando...',
        imageUrl: 'https://i.postimg.cc/wjMg3jNN/homero-parca.png',
        imageHeight: 150,
        confirmButtonColor: "red",
        confirmButtonText: 'Ok',
        showConfirmButton: false,
        timer: 5000,
        heightAuto: false,
        timerProgressBar: true
    })
    anim1.classList.add("animHide")
    anim2.classList.add("animHide")
    anim3.classList.add("animHide")
    anim4.classList.add("animHide")
    delay(5000)
    listNamesGame.forEach(item => {
        item.sacrificado = false
    })
    drawArray(listNamesGame)
    btnPlay.classList.remove("disable")
}
function playGame() {
    ready = false
    sacrifice(listNamesGame)
    btnPlay.classList.add("disable")
}
drawArray(listNamesGame)
restart.addEventListener('click', _ => {
    restartGame()
})
//guillotina()
//setTimeout(() => sacrifice(listNamesGame), 2000)
/* setTimeout(() => sacrifice(listNamesGame), 4000)
setTimeout(() => sacrifice(listNamesGame), 6000)
setTimeout(() => sacrifice(listNamesGame), 12000) */
//btnAdd.addEventListener("click" , addName)
