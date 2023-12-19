# FlatEngine v0.0.2

FlatEngine es un motor gráfico / librería,  de desarrollo de videojuegos construido en HTML5 y JavaScript, para crear videojuegos tanto en versión web y móvil


# Estructura básica

FlatEngine está pensado para la creación de juegos en dos dimensiones, tanto para web como para móviles, aprovechando el componente Web Visor de Android, podemos reutilizar el código de nuestro juego para que funcione en dispositivos Android.

La estructura básica del motor está compuesta por 5 módulos que permiten la ejecución del juego y la creación de este

### Controlador
El controlador administra todos los objetos y entidades que se encuentran en el escenario, su movimiento y almacenamiento

### Dibujante
El dibujante se encarga de dibujar en pantalla todos los objetos, textos e interfaz, haciendo uso de los recursos y sprites que carguemos en el juego

### Entidad
Es el objeto plantilla de todo lo que existe dentro del escenario, cuando creamos una entidad y lo añadimos a la lista de objetos, esta es dibujada y controlada por defecto, haciendo  uso de los parámetros que hayamos definido al crearla. Haciendo uso de las clases de JavaScript podemos crear nuevas entidades customizadas que hereden de la clase padre "Entidad"

### Físicas
Este componente controla todo lo relacionado con la interacción entre objetos, las colisiones, y distinguir los objetos sólidos de los traspasables

### Input
Administra los eventos de teclado, controla cuando una tecla está siendo presionada y cuando deja de estarlo, también hace lo mismo con la interactuación a través de dispositivos móviles

## Configuración de pantalla
Mediante el documento index.html y estilo.css se podrá editar como se verá la página que contenga el juego y el tamaño del canvas dónde se dibujará el juego, en futuras versiones se podrá customizar a través de una interfaz gráfica.

## Administración de recursos
Los recursos se administran a través del fichero recursos.js en los que se podrán cargar tanto los sprites como los sonidos del juego. De nuevo en futuras versiones se agregará la posibilidad de cargarlos mediante interfaz gráfica.

Aquí se muestra un pequeño mini juego haciendo uso de FlatEngine, podemos encontrarlo en la carpeta "Ejemplo de juego"

https://github.com/IsmaMoraLop/FlatEngine/assets/154323808/d621c75e-7160-4054-b466-07070d15f555

