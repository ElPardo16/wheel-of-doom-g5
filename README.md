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

<h1 align="center" >Funcionalidad</h1>

```javascript
function deleteName(element) {
    let txtName = element.previousElementSibling.innerHTML
    listNamesGame = listNamesGame.filter(({ name }) => name != txtName)
    drawArray(listNamesGame)
}
```

Esta funcion `deleteName()` es la encargada de borrar los nombres de los jugadores, se crea una variable y le asignamos la propiedad `ElementSibling` esto que significa que son elementos con el mismo padre (en la misma lista de hijos), para el siguiente paso se crea una nueva variable con la cual se utiliza la propiedad `filter()` llama a la función `callback` sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales `callback` devuelve un valor verdadero. `callback` es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición `callback` simplemente los salta, y no son incluidos en el nuevo array, al final le devolvemos como parametro la lista de nombres y se la asignamos a la funcion `drawArray`.
