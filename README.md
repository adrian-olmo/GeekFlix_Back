# GeekFlix_Back

### Introduccion: 
Gestión de los datos de GeekFlix manejado mediante una base de datos **SQL** que interactua con funciones desarrolladas en **Node.js** con el ORM de **Sequelize**, que nos perminte manipular los datos.

### Base de datos:
Para la construcción de este proyecto, se dibujó un esquema con los diferentes modelos, los datos que iban a tener y las relaciones que tenían entre sí.

![image](https://raw.githubusercontent.com/adrian-olmo/GeekFlix_Back/develop/assets/bbdd.png)


### Endpoints:
 ### SingUp: 
 
 - Una ruta dentro de la aplicación que permite al usuario darse de alta con los datos requeridos, un email y una contraseña. Por defecto se le asignara un numero de identificación y un rol de usuario.
 
 - Al darse de alta, la contraseña del usuario se guardará encriptada por motivos de seguridad.

 
 ### Login: 
 
 - Una ruta que otorga al usuario iniciar sesión con las credenciales que previamente han sido registradas e introducidas en la base de datos, si los datos introducidos coinciden con los almacenados en la base de datos, el usuario podrá interactuar por la aplicación.
 
 ### Movies: 
 
 - Dividido en tres subrutas diferentes:
   - **/movies** ➡️ muestra un listado de todas las películas disponibles.
   - **/movies/title** ➡️ permite hacer una búsqueda de una película a través de su título.
   - **/movies:id** ➡️ lista la película cuyo ID sea igual al que le hemos pasado.

 ### Genres: 
 - Dividido en dos rutas:
   - **/genres** ➡️ lista todos los géneros disponibles dentro de la base de datos.
   - **/genres/genre** ➡️ muestra un género concreto.
