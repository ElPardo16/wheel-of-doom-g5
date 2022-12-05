<h1 align="center" >SLAUGHTER HOUSE CODERS</h1>

[![Slaughter house coders](https://i.postimg.cc/ht8McNpZ/slaughter.png "Slaughter house coders")](http://https://i.postimg.cc/ht8McNpZ/slaughter.png "Slaughter house coders")

Slaughter house coders es un juego de sacrificios violentos. Su dinámica resulta básica e intuitiva para los usuarios, en donde estos son quiénes deciden a través de una lista de nombres las personas a las cuales quieren eliminar; una vez desee iniciar el juego, este automáticamente y de manera aleatoria determinará el orden de los sacirficios y el método de tortura para cada uno de ellos.

**Recordatorio**: Esta aplicación es con fines educativos.

- **Fácil de jugar**

> Para este juego se logró crear un entorno para facilitar la usabilidad al usuario, es bastante intuitiva al momento de jugarlo, simplemente se tienen que poner los nombres de la víctima a la cual se quiere ejecutar y el juego realizará todo el trabajo sucio por ti.

- **Propósito**

> Desarrollar una aplicación web para un nuevo evento de sacrificio de coders, la aplicación debe ser un sistema de sacrificios justo y aleatorio, en la que se hará el sorteo de una lista de nombres.

- **Adaptacion**

> La aplicación tendra una adaptación tanto para computador de escritorio, celulares y tablets.

- **Despligue**

> Para el despligue de la aplicacion se opto por utilizar **Netlify** es una vuelta gratuita y es muy facil de subir cualquier proyecto, ya que solo hace falta tener dicho proyectio en un repositorio de **GitHub**

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


<h1 align="center" >Funcionalidad</h1>

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
    let ready = false
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

                listNamesGame.forEach((item) =>{
                    if(item.name == n){
                        item.sacrificado = true
                    }
                })
                drawArray(listNamesGame)
                deads++
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
            document.location.href = "game-over.html"
        }
    }
}
```
