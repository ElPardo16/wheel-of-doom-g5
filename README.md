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
