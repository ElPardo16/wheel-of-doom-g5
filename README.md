<h1 align="center" >SLAUGHTER HOUSE CODERS</h1>

[![Portada - Slaughter house coders](https://i.postimg.cc/ht8McNpZ/slaughter.png "Slaughter house coders")](http://https://i.postimg.cc/ht8McNpZ/slaughter.png "Slaughter house coders")

Slaughter house coders es un juego de sacrificios violentos. Su dinámica resulta básica e intuitiva para los usuarios, en donde estos son quiénes deciden a través de una lista de nombres las personas a las cuales quieren eliminar; una vez desee iniciar el juego, este automáticamente y de manera aleatoria determinará el orden de los sacirficios y el método de tortura para cada uno de ellos.

**Recordatorio**: Esta aplicación es con fines educativos.

- **Fácil de jugar**

> Para este juego se logró crear un entorno para facilitar la usabilidad al usuario, es bastante intuitiva al momento de jugarlo, simplemente se tienen que poner los nombres de la víctima a la cual se quiere ejecutar y el juego realizará todo el trabajo sucio por ti.

- **Propósito**

> Desarrollar una aplicación web para un nuevo evento de sacrificio de coders, la aplicación debe ser un sistema de sacrificios justo y aleatorio, en la que se hará el sorteo de una lista de nombres.

- **Adaptacion**

> La aplicación tendra una adaptación tanto para computador de escritorio, portatiles, celulares y tablets.

- **Despligue**

> Para el despligue de la aplicacion se opto por utilizar **Netlify** es una vuelta gratuita y es muy facil de subir cualquier proyecto, ya que solo hace falta tener dicho proyecto en un repositorio de **GitHub**

- **Librerias**

> Decidimos usar 2 librerias para esta aplicacion.
La primera es la libreria de **GREENSOCK/GSAP** la cual nos permite hacer animaciones con estilos de css basicos, esta libreria cuenta con bastantes propiedades para que al momento de animar un frame sea mas sencillo de lo normal, la segunda es **SWEETALERT** la cual nos permite tener alertas dinamicas, mas interactivas con el usuario y personalizables lo cual nos facilita mucho trabajo.

## Gsap
[![gsap](https://i.postimg.cc/3xbj872B/84c1e40ea0e759e3f1505eb1788ddf3c-greensock-logo.png "gsap")](https://i.postimg.cc/3xbj872B/84c1e40ea0e759e3f1505eb1788ddf3c-greensock-logo.png "gsap")

La Plataforma de Animación GreenSock (GSAP) es un popular conjunto de herramientas JavaScript para crear animaciones en la web. La incorporación de esta misma como librería en el proyecto surge de la facilidad que brinda al momento de generar las animaciones propias del juego.

### Métodos comunes de interpolación
Se introducen objetivos (los objetos a animar), una duración y cualquier propiedad que se desee animar, determina cuáles deberían ser los valores de propiedad en ese punto y los aplica en consecuencia.

- gsap.to()
- gsap.from()
- gsap.fromTo()

Además, se puede hacer una secuenciación básica usando `delay` propiedad especial, la cual aporta un tiempo de espera a la animación.

```javascript
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
```
Este fragmento pretende dar animación a la cabeza que será decapitada en la guillotina la cual hace parte de uno de los posibles sacrificios, en donde `x, y` determinan un sistema de coordenadas asignando una posición inicial y final (es decir, coordenadas de desplazamiento); `duration`, determina el tiempo bajo el cual transcurrirá dicha animación, `delay` el tiempo de espera para iniciar la animación y `ease` el cual establece el efecto que tomará dicho animación.

Por otra parte, también es posible implementar líneas de tiempo, las cuales son como un contenedor para múltiples instancias, en las que se pueden generar intervalos de tiempo y controlar cada uno de ellos de manera diferente si es que se desea.

```javascript
let tL = gsap.timeline({
        repeat: Infinity,
        yoyo: true,
    });

    tL.to('.spectators-shadow', {
        duration: 2,
        y: 25,
    });
```
Siguiendo el ejemplo de la animación de la guillotina, aquí se establece una línea de tiempo para la animación de las manos de los espectadores, en la que se declara e inicializa una variable `let tl`, la cual contiene las propiedades de dicha línea; en donde, `repeat:Infinity` establece que dicha animación se repetirá de manera infinita, y, `yoyo:true` establece que una vez la animación asociada finalice, la reversará.
Es decir, la animación para el elemento asociado a la clase `spectators-shadow`, tendrá una duración de 2s y un desplazamiento en y de 25px (hacia abajo), una vez finalizada, dará lugar a la propiedad 'yoyo' el cual reversará ese desplazamiento `y=-25px` (hacia arriba).

## Sweet alert

A la hora de crear modales, popups y alertas con Javascript, pueden utilizarse diferentes bibliotecas u opciones. Una de esas bibliotecas es SweetAlert2.

SweetAlert2 es una biblioteca que esta pensada para poder utilizarse junto a JavaScript Vanilla. Al estar pensado para usarse de esa manera, también funciona con React, Vue y Angular, aunque en este post se utilizara con React.

```javascript
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
```

En cuanto a estas alertas personalizadas, cada una de ellas sigue una estructura base, la cual contiene un título, imagen, texto (En este caso, trae el nombre de la persona a sacrificar del arreglo `listNamesGame`), botón y una barra que de tiempo, la cual muestra el progreso en tiempo de duración de dicha alerta, en caso de no dar click en el botón.


<h1 align="center" >Funcionalidad</h1>

## Animaciones (funciones)

Cada método de tortura y/o sacrificio fue definido bajo una función. y cada una de ellas está compuesta por los métodos propio de gsap (anteriormente mencionados), los cuales dan vida a cada una de las animaciones que conforman un sacrificio.

- > function playRuleta()
- > function guillotina()
- > function playAnimation()
- > function saw()

## delay

```javascript
function delay(seconds) {
    seconds = seconds || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, seconds);
    });
}
```

Esta función es la encargada de otorgar los espacios de tiempo entre una animación y otra, según lo requiera. Recibe cómo parametro los segundos que se quieran estipular para el retraso; en caso de no asignarse, se le asignará un valor por defecto de 2000ms

## drawArray(names)
```javascript
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
```
Esta función pretende agregar al DOM, más especificamente a la lista de nombres, aquellos datos ingresados por el usuario. Recibe como parámetro esta misma lista, en la cual entra a recorrer mediante el método `forEach` el nombre de cada uno en la lista y el estado asociado `sacrificado`, si corresponde a true o false.
La estructura de control doble `if/else`, establece como condición que si el valor de `sacrificado` es diferente de su estado inicial, agregará al DOM a través del método innerHTML, el nombre ingresado por el usuario junto con unos elementos por defecto para la eliminación del mismo, de lo contrario, es decir, si la persona ya fue sacrificada, se agregará el elemento de igual manera, la diferencia es que le atañe una clase para crear el efecto de tachado con sangre en la lista.

<h2>deleteName()</h2>

```javascript
function deleteName(element) {
    let txtName = element.previousElementSibling.innerHTML
    listNamesGame = listNamesGame.filter(({ name }) => name != txtName)
    drawArray(listNamesGame)
}
```

Esta funcion `deleteName()` es la encargada de borrar los nombres de los jugadores, se crea una variable y le asignamos la propiedad `ElementSibling` esto que significa que son elementos con el mismo padre (en la misma lista de hijos), para el siguiente paso se crea una nueva variable con la cual se utiliza la propiedad `filter()` llama a la función `callback` sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales `callback` devuelve un valor verdadero. `callback` es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición `callback` simplemente los salta, y no son incluidos en el nuevo array, al final le devolvemos como parametro la lista de nombres y se la asignamos a la funcion `drawArray()`.

<h2>sacrifice()</h2>

```javascript
async function sacrifice() {
    let indexRandom = Math.floor(Math.random() * listNamesGame.length)
    while (!ready) {
        if (deads < listNamesGame.length) {
            if (listNamesGame[indexRandom].sacrificado) {
                indexRandom = Math.floor(Math.random() * listNamesGame.length)
            } else {
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
```

Tenemos una variable que nos va a indicar un indice random utilizando el metodo `Marth.random()` en cuanto al tamaño de la lista de personas que esten en la lista de depuracion, tenemos un `While` que nos indica que mientras la variable ready sea diferente al estado inicial se va a ejecutar continuamente, tenemos una condicional `if/else` que nos propone que si el numero de muertos es menor al numero de victimas y que si la lista de victimas con el indice random generado esta sacrificado que nos genere otro numero random aleatorio teniendo encuenta el numero de victimas de lo contrario que nos genere una alerta con el nombre de la persona siguiente a sacrificar

```javascript
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
```

En esta condifional `if/else` nos indica que si el estado ready es diferente a su estado inicial se ejecute un `forEach` que recorre una lista de items que en este caso es el nombre de las victimas y que, en el primer `if anidado` tenemos la condicional de que si el nombre es igual a la variable `n` nos ejecute tiene que cambiar el estado de sacrificado a verdadero le pasamos los cambios realizados como parametros a la funcion `drawArray()` y aumentamos el numero de muertes con `deads++`

```javascript
            }
        } else {
            ready = true
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
            document.location.href = "game-over.html"
        }
    }
}
```

Al terminar con todas las victimas en el juego, nos saldra un `alert` que nos indicara el fin del juego, con la opcion de volver a jugar o salirnos de la aplicacion.

<h2>animationRandom()</h2>

```javascript
async function animationRandom() {
    let indexAnimation = Math.floor(Math.random() * 4)
    while(true){
        if(lastIndexAnim == indexAnimation){
            indexAnimation = Math.floor(Math.random() * 4)
        }else{
            break
        }
    }
}
```

Para esta funcion se crea una variable y le indicamos que nos va a generar un numero aleatorio, utilizamos un `While` para ejecutar la condicion `if/else` donde comparamos si la animacion siguiente es igual a la animacion anterior nos genere una nueva animacion

```javascript
switch (indexAnimation) {
        case 0:
            animationTime = 5000
            anim2.classList.remove("animHide")
            tl.restart(false, false)
            playRuleta()
            await delay(animationTime)
            anim2.classList.add("animHide")
            break;
        case 1:
            animationTime = 5000
            anim1.classList.remove("animHide")
            tl.restart(false, false)
            playAnimation()
            await delay(animationTime)
            anim1.classList.add("animHide")
            break;
        case 2:
            animationTime = 5000
            anim4.classList.remove("animHide")
            guillotina()
            await delay(animationTime)
            anim4.classList.add("animHide")
            break;
        case 3:
            animationTime = 7000
            anim3.classList.remove("animHide")
            saw()
            await delay(animationTime)
            anim3.classList.add("animHide")
            break;
    }
    lastIndexAnim = indexAnimation
```

En este caso se utilizo un `Switch()` para incorporar todas las animaciones y poder elegir de forma aleatorea cual se va a ejecutar, definimos el tiempo de ejecucion y el `delay` que va a tener con respecto a las demas

<h2>restartGame()</h2>

```javascript
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
    gcTitle.classList.remove("h")
    btnPlay.classList.remove("disable")
}
```

Esta funcion `restartGame()` nos permite reiniciar el juego, con esta funcion se resetean todas las variables que tenemos, pausan y se esconden las animaciones para que no haya conflictos, tenemos un `alert` que nos brinda informacion sobre reiniciar el juego, tenemos un `forEach()` que recorre el numero de sacrificios y cambia su estado a `false` y le pasa como parametro esa informacion actualizada a la funcion `drawArray()`.

<h2>playGame()</h2>

```javascript
function playGame() {
    ready = false
    gcTitle.classList.add("h")
    sacrifice(listNamesGame)
    btnPlay.classList.add("disable")
}
drawArray(listNamesGame)
restart.addEventListener('click', _ => {
    restartGame()
})
```

Para dar inicio al juego contamos con la funcion `playGame()` donde agregamos clases, ponemos valores en su estado inicial.
