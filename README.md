# Arena Impacto Online — edición 4.0

Juego independiente de combate de plataformas para navegador, con arte vectorial dibujado desde cero y música sintetizada propia. Incluye 29 luchadores: once propios y dieciocho interpretaciones vectoriales simplificadas de personajes conocidos. No es una copia completa de Super Smash Bros., ni utiliza sus grabaciones musicales, modelos o capturas como recursos del juego.

## Inicio rápido en PC

1. Instala **Node.js 24 o superior**.
2. Descomprime este ZIP y abre una terminal en la carpeta que contiene `package.json`.
3. Ejecuta `npm ci` y después `npm start`.
4. Abre `http://localhost:3000`.

No hay dependencias de producción ni servicios externos obligatorios. Puedes abrir `public/index.html` directamente en PC para jugar práctica, aleatorio y entrenamiento con colores y controles. Las cuentas y las salas online requieren iniciar el servidor.

Para probar en otro dispositivo de la misma red, abre `http://IP-DE-TU-PC:3000` y permite el puerto en el firewall. En Internet utiliza el dominio HTTPS de Railway.

## Subir a Railway

El ZIP es el proyecto fuente: primero debes descomprimirlo; el despliegue se realiza con un repositorio o con Railway CLI.

### Opción A: repositorio

1. Crea un repositorio con **el contenido** de la carpeta `arena-impacto`; `Dockerfile`, `package.json` y `railway.json` deben estar en la raíz seleccionada del servicio.
2. En Railway crea un proyecto y un servicio desde ese repositorio.
3. El Dockerfile usa Node 24 y el comando de inicio es `npm start`.
4. Agrega un **volumen** al servicio, con ruta de montaje `/data`.
5. Configura la variable `DATA_DIR=/data`. Así cuentas, contraseñas cifradas con scrypt, sesiones de cuenta y estadísticas sobreviven a reinicios y despliegues.
6. Railway proporciona `PORT`; el servidor escucha en `0.0.0.0` usando ese puerto. No fijes un puerto distinto en el dominio.
7. Genera un dominio público en Settings → Networking. Usa la URL HTTPS.
8. Mantén **una réplica**. Las partidas activas se ejecutan en memoria en un solo servidor.

### Opción B: Railway CLI

En la carpeta del proyecto, con la CLI instalada y sesión iniciada, ejecuta `railway link` para vincular un servicio existente y `railway up` para desplegarlo. Configura después el volumen y el dominio como arriba.

`railway.json` incluye el healthcheck `/health` y política de reinicio. No se ha desplegado este proyecto en una cuenta Railway durante su preparación.

Referencias oficiales consultadas: https://docs.railway.com/services · https://docs.railway.com/volumes · https://docs.railway.com/networking/troubleshooting/application-failed-to-respond

## Qué incluye

- **29 luchadores:** Nova, Volt, Bastión, Brisa, Kirby, Ember, Frost, Shade, Atlas, Coral, Comet, Moss, Mario, Luigi, Link, Samus, Pikachu, Sonic, Fox, Donkey Kong, Yoshi, Captain Falcon, Peach, Mega Man, Pichu, Saitama, Goku, Naruto y Fernanfloo.
- **16 arenas:** Jardín de sueños, Campo de batalla, Destino astral, Castillo del alba, Forja de neón, Islas del viento, Azoteas eléctricas, Templo ancestral, Bahía coral, Cráter ardiente, Cumbre helada, Torre del tiempo, Nave orbital, Dojo carmesí, Ruinas lunares y Estadio aurora.
- Menú colorido con personajes; selección visual de luchador y arena.
- Ajustes persistentes: tema vivo/nocturno/claro, calidad, música, efectos, volumen general, vibración, sacudida de cámara, tamaño táctil y reglas predeterminadas.
- Cinco vidas y diez minutos de forma predeterminada; configuración de **1–20 vidas** y **1–30 minutos**.
- Partidas online con hasta siete personas/CPU en total. Sin CPU si el creador elige esa opción.
- Salas públicas identificadas por nombre y código; enlace de invitación; listado con nombres de jugadores.
- Sala de espera, selección individual, estado Listo y arranque exclusivo del creador.
- Servidor autoritativo: posiciones, golpes, vida, objetos y resultados calculados en el servidor. Los clientes envían controles, no daño ni posiciones.
- Solo se incorporan nuevos jugadores antes de iniciar o después de terminar una ronda; las salas en combate no permiten nuevas entradas. Los eliminados pueden observar el final.
- Reconexión de hasta 30 segundos; si se agota, el jugador abandona y queda eliminado. El anfitrión se transfiere si sale de la sala.
- Cuatro modos: práctica, multijugador, aleatorio y entrenamiento. Práctica admite CPU y dos jugadores en un mismo teclado. Aleatorio cambia personajes y arena en cada ronda. Entrenamiento permite rival quieto/activo, fijar daño, reiniciar y saltos libres; no termina por tiempo ni eliminación.
- Registro, inicio de sesión, cierre de sesión, estadísticas online y clasificación.
- PC entra al menú directamente y puede jugar online como invitado; móvil sin sesión entra a iniciar sesión/registrarse y después directamente a los cuatro modos, sin pasar por el menú de PC.
- Controles multitáctiles, soporte de mando estándar, pantalla completa cuando el navegador la permite, diseño vertical y horizontal.
- Cámara panorámica que se aleja para seguir el combate.
- Ataques direccionales, golpe cargado, proyectiles, saltos múltiples, recuperación ascendente y caída rápida.
- Combos de tres golpes al mantener ataque y perfiles diferentes de puño, patada, espada, electricidad y cañón.
- Escudo con desgaste, ruptura de escudo, esquiva, agarre y lanzamiento; asistencia de agarre al borde.
- Animación de retroceso con rotación y miembros flexibles al recibir golpes fuertes. Es una representación visual de ragdoll, no un sistema de huesos 3D.
- Megaexplosión y haz al cruzar cualquier límite; plataforma flotante de reaparición, invulnerabilidad temporal y eliminación permanente al agotar vidas.
- Bomba recogible/lanzable, comida, estrella y martillo. La bomba explota después de una breve mecha.
- Cada 10 segundos se genera un objeto aleatorio y, si no hay esfera/núcleo activo, una esfera rosa en posición aleatoria. Rompe la esfera y recoge el núcleo a menos de 45 unidades; atacar desde lejos no entrega el definitivo automáticamente. Los bots buscan objetos, disputan la esfera, recogen su energía y utilizan sus poderes.
- Kirby: cinco saltos, especial cercano de inhalación/agarre, estrella a distancia y transformación en piedra con abajo + poder. No incluye copia de habilidades.
- Dieciséis temas musicales sintetizados originales, uno por mapa, con melodía, tempo y timbre propios. Sonidos distintos de golpe, salto, escudo, proyectil, objeto, KO y definitivo; botón de silencio.

## Controles

| Acción | Jugador 1 | Jugador 2 | Mando estándar |
|---|---|---|---|
| Mover | A / D | ← / → | Stick izquierdo |
| Saltar, saltar en el aire | W / espacio | ↑ | A |
| Bajar / caída rápida | S | ↓ | Stick abajo |
| Golpe / combo | F, mantener | J, mantener | X |
| Especial | G | K | B |
| Definitivo, tras recoger núcleo | Q | P | LT |
| Escudo / esquiva | H | L | LB |
| Agarre y lanzamiento | R | U | RB |
| Cargar golpe y soltar | T | I | Y |
| Lanzar objeto | E | O | RT |
| Pausa local | Escape | Escape | Botón de interfaz |

Combina arriba, abajo o lateral con golpe o poder para variantes. El definitivo se activa con **Q / ULTI / LT**, después de romper la esfera y acercarse para recoger el núcleo. También funciona poder sin arriba ni abajo cuando hay energía. Se consume al iniciar una preparación de medio segundo con escena visual; la física online sigue en el servidor. Los ataques de agarre necesitan un rival cerca y delante; si fallan también consumen energía. El escudo funciona en el suelo; dirección + escudo esquiva. Mantener el golpe cargado durante 1.5 segundos lo libera automáticamente. Un agarre lanza después de un instante; elige la dirección al agarrar.

En móvil, las flechas y un botón SALTAR independiente están a la izquierda; Golpe, Poder, Escudo, Agarre, Cargar, Objeto y ULTI a la derecha. ULTI permanece deshabilitado hasta recoger energía. «Cómo golpear» abre una tabla de PC y móvil durante la partida. Usa varios dedos para moverte y atacar a la vez. En horizontal quedan sobre la arena; en vertical quedan debajo. La opción "Controles táctiles" permite mostrarlos/ocultarlos también en PC. Los nombres Xiaomi, Redmi o Samsung no requieren código específico: utiliza un navegador reciente con Canvas, Pointer Events, Web Audio y EventSource.

## Reglas

El porcentaje es daño acumulado: no es una barra de salud que se vacía. A mayor porcentaje, más retroceso. Caer por debajo, salir por los laterales o atravesar el límite superior cuesta una vida. Si quedan vidas, reapareces en una plataforma flotante; si ya no quedan, observas hasta el final. Gana el último luchador con vidas; con tiempo agotado ganan más vidas y menor porcentaje. Si ambos valores coinciden exactamente se declara empate.

La selección de objetos incluye la esfera definitiva. Los definitivos usan ocho mecánicas: explosión cercana, tormenta, lluvia, rayo, carrera, agarre, arma gigante y proyectil gigante. Los proyectiles se desplazan y golpean según colisión; los ataques dirigidos requieren apuntar. Goku lanza una Genkidama, Naruto un Rasenshuriken, Saitama un puño frontal y Fernanfloo un martillo. Son interpretaciones propias simplificadas, no todos los movimientos del juego comercial. Las bombas se recogen por proximidad y se lanzan con E/OBJETO. En online, la pausa solo neutraliza tus controles: el combate sigue.

## Archivos

- `server.js`: HTTP, cuentas SQLite/scrypt, sesiones HttpOnly, salas, simulación online, reconexión, estadísticas y límites de solicitudes.
- `public/combat-data.js`: perfiles de alcance, combo, proyectil y tipo de definitivo por personaje.
- `public/music-data.js`: dieciséis composiciones originales.
- `public/engine.js`: física y reglas compartidas por servidor y práctica local.
- `public/app.js`: pantallas, cuentas, salas, entradas de teclado, móvil y mando.
- `public/renderer.js`: arenas, cámara, personajes, objetos, efectos, animaciones y reaparición.
- `public/audio.js`: música y efectos sintetizados originales.
- Páginas independientes: `index.html`, `menu.html`, `modos.html`, `ajustes.html`, `login.html`, `registro.html`, `personajes.html`, `salas.html`, `sala.html`, `jugar.html`, `perfil.html` y `ayuda.html`, todas en `public/`.
- `public/shell.html` y `scripts/build-pages.js`: plantilla compartida y generación de páginas (`npm run build`); el arranque las reconstruye.
- `public/settings.js`, `entry.js`, `file-mode.js` y `style.css`: preferencias, acceso por dispositivo, apertura local e interfaz adaptable.
- `public/assets/`: retratos vectoriales, emblema propio y miniaturas de dieciséis mapas.
- `test/`: pruebas del motor y del servidor.
- `Dockerfile`, `railway.json`, `package-lock.json`: arranque y despliegue.
- `docs/`: informe de verificación y arquitectura.

## Verificación

Ejecuta `npm test`. Las diecisiete pruebas comprueban agotamiento de vidas, golpes cargados, escudo/agarre, cinco saltos de Kirby, esfera y definitivo, bombas, desempate por tiempo, las dieciséis arenas, entrenamiento, máximo de siete participantes y sesiones/salas con dos clientes sincronizados. Consulta `docs/VERIFICACION.md` para las comprobaciones realizadas y sus límites.

## Operación y límites

- Las cuentas requieren volumen para persistir en Railway. Sin volumen pueden perderse en un despliegue.
- Las salas y las partidas activas no sobreviven al reinicio del proceso; las cuentas y estadísticas sí sobreviven con volumen.
- Los invitados se guardan en memoria y no reciben estadísticas persistentes. Puedes crear una cuenta en PC para guardarlas.
- Una misma cuenta debe usarse en una pestaña online a la vez; otra pestaña reemplaza su conexión activa.
- Transporte online: eventos del servidor a 20 Hz y entradas HTTP aproximadamente a 30 Hz; motor a 60 Hz. La latencia depende de red y región del servidor. No incluye rollback competitivo.
- Máximo 30 salas por defecto (`MAX_ROOMS`), siete combatientes por sala. Escalar a múltiples instancias requeriría un coordinador compartido; no aumentes las réplicas sin implementarlo.
- No incluye correo de recuperación de contraseña, chat, pagos, servidores regionales ni tienda.
- No incluye miles de mapas, personajes 3D o todo el contenido del título comercial. Incluye las dieciséis arenas solicitadas con diseños propios.
- La pantalla completa, el bloqueo de orientación y el audio dependen de permisos/capacidades del navegador. El sonido se habilita después de la primera interacción.
- No se ha probado físicamente en modelos concretos de teléfonos. Prueba el dominio en los dispositivos que usarán tus jugadores antes de compartirlo de forma masiva.

Para ajustar personajes edita `CHARS` en `public/engine.js`; para añadir escenarios edita `MAPS`, sus miniaturas y las decoraciones del renderizador. No necesitas editar una lista de personajes separada en el menú.

## CPU y capacidad

Elige 0–6 CPU cuando juegas tú; con dos humanos locales quedan cinco puestos de CPU. En práctica y aleatorio, «Solo CPU» admite hasta siete bots para observar una exhibición. Las opciones no disponibles se deshabilitan. En online los bots son opcionales, no son conexiones de usuarios; el servidor reduce su cantidad según los humanos presentes, siempre con máximo siete combatientes. Los bots pueden recoger y lanzar bombas, recoger beneficios y obtener/usar el definitivo.
