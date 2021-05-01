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
   - **/movies**: muestra un listado de todas las películas disponibles.
   - **/movies/title**: permite hacer una búsqueda de una película a través de su título.
   - **/movies:id**: lista la película cuyo ID sea igual al que le hemos pasado.

 ### Genres: 
 - Dividido en dos rutas:
   - **/genres**: lista todos los géneros disponibles dentro de la base de datos.
   - **/genres/genre**: muestra un género concreto.
   
 ### Orders: 
 - Al igual que las dos rutas anteriores, esta también se encuentra dividida en varias rutas
   - **/orders**: un listado general de todos los pedidos que se han realizado.
   - **/orders/order**: muestra el resultado de buscar un solo pedido.
   - **/orders/userorder**: resultado de buscar todos aquellos pedidos de un usuario, además mostrará que película ha alquilado, cuando ha sido alquilada y cuando debe ser devuelta.
   - **/orders/newOrder**: permite crear un pedido, con la fecha de cuando ha sido creado el pedido, una fecha de devolución, el usuario que ha realizado el pedido, la película que ha alquilado y el estado del pedido, por defecto aparecerá alquilada.
   - **/orders/:id**: esta ruta permitirá al usuario cancelar un pedido.

 - Para las rutas **/orders** y **/orders/:id** se requiere un token que solo se le genera a aquellos usuarios cuyo rol sean administradores.
 - Para las rutas anteriores y el resto de rutas, se precisa de estar registrado en la aplicación.

 ### Users: 
  - **/users**: muestra un listado completo de los datos de un usuario.
  - **/users/email**: muestra los datos de un solo usuario.
