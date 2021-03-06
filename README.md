# proyecto-final-vue
Proyecto final para curso de Vue.js de GeeksHub

<img src='https://geekshubs.com/wp-content/uploads/2021/10/GeeksHubs-logo-rojo-sin-claim.svg' height=100px >
<img src='https://sfc.vuejs.org/logo.svg' width=100px height=100px/>

---
## 馃挕 Introducci贸n
---
El proyecto final consiste en crear una aplicaci贸n Vue 2 con las siguientes caracter铆sticas:

- **Generar la aplicaci贸n usando el comando vue create de la @vue/cli**
- **Instala el plugin vue-router** para controlar el enrutamiento de componentes en base a la URL visitada en el navegador.
- **Instalar el plugin VueAxios o el paquete axios de NPM** para gestionar las peticiones HTTP.
- **Instala el plugin vuex** para centralizar los datos de la aplicaci贸n usando un store.
- **Crear una p谩gina de inicio** que muestre la lista de posts publicados (<https://jsonplaceholder.typicode.com/posts>). Los posts deben ser almacenados en el store al renderizar la p谩gina de inicio (mounted hook). Mostrar un feedback de cargando (spinner o mensaje) al usuario mientras se realiza la petici贸n.
- **Crear una p谩gina de contacto con un formulario**: email, nombre y mensaje. El formulario de contacto estar谩 almacenado en el store de la aplicaci贸n (a ser posible en un m贸dulo de contacto). * (v-model vuex). **Crear un componente bot贸n personalizado (BaseButton) con un slot para introducir la etiqueta del mismo** y una propiedad 鈥渄isabled鈥? booleana que controle si el bot贸n est谩 desactivado. El bot贸n de enviar del formulario estar谩 desactivado hasta que todos los campos est茅n rellenos.
- **Crear una p谩gina de autor** con una foto y un par de p谩rrafos de texto.
- **Crear una p谩gina detalle de un post** (con URL din谩mica usando un par谩metro) a la que accederemos a pulsar sobre un post de la p谩gina de inicio. Esta p谩gina renderizar谩 la informaci贸n del post seleccionado recuper谩ndola del store mediante el par谩metro en URL.
- **A帽adir una barra de navegaci贸n en el layout de la aplicaci贸n** para que sea visible en todas las vistas sin tener que a帽adir el componente repetidamente. Esta barra contiene un enlace/bot贸n a las p谩ginas: inicio, contacto, y autor.
- **A帽adir un footer a la web en el layout de la aplicaci贸n** para que sea visible en todas las vistas sin tener que a帽adir el componente repetidamente. Debe contener los cr茅ditos y enlaces a redes sociales de la web.
- **Incluir estilos CSS y transiciones de vue** para decorar la aplicaci贸n a libre elecci贸n.
- **A帽adir alg煤n recurso (imagen o v铆deo) en la carpeta /src/assets** y usarlos desde los componentes: por ejemplo la foto de la p谩gina de autor y un logo en la barra de navegaci贸n.

\*Enlaces de inter茅s
<https://dev.to/ljnce/how-to-call-api-from-axios-in-vuex-store-2m3g>

---
## Instrucciones
---
Descargar el c贸digo de github a una carpeta local. Desde el s铆mbolo del sistema ejecutar <span style="color: red;">npm run serve</span> y acceder a la aplicaci贸n en modo desarrollo en <span style="color: red;">localhost:8080</span>

---
## 馃拰 Datos del alumno
---

- **Nombre**: David Herrera Baena
- **Correo electr贸nico**: <david.herrera@codeoscopic.com>
