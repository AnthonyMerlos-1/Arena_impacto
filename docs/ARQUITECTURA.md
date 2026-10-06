# Arquitectura

Un proceso Node 24 publica los archivos estáticos y las rutas JSON. El cliente crea una sesión HttpOnly. Los registros usan scrypt con sal aleatoria; las sesiones de cuenta se almacenan en SQLite con tokens SHA-256 y expiración de treinta días. Contraseñas y tokens no aparecen en los estados de juego.

Cada sala tiene un motor de combate a 60 Hz en el servidor. Los navegadores mandan entradas a `/api/input` y reciben instantáneas idénticas por `/api/events` a 20 Hz. Las entradas se normalizan a booleanos; no se aceptan posiciones, vidas ni daño del cliente. Las entradas vencen si no se renuevan en 400 ms. Los números de secuencia impiden que una solicitud atrasada reemplace una entrada reciente. El cliente suaviza posiciones y dibuja efectos; la práctica usa el mismo motor en el navegador.

Las salas permiten siete miembros. Durante una ronda iniciada se rechazan nuevos miembros; los que ya estaban pueden reconectarse. Se requiere estado Listo de todos los miembros antes del inicio. Si un miembro pierde la conexión, su puesto se conserva durante treinta segundos. Después se elimina del combate y de la sala. Las salas vacías se descartan.

Los eventos tienen identificadores crecientes para no repetir sonidos ni explosiones. Se conservan los noventa últimos en las instantáneas para tolerar paquetes saltados. Los efectos visuales no modifican la física. Un golpe fuerte genera animación rotatoria y miembros flexibles; no hay cuerpos articulados 3D.

Al finalizar una partida online se actualizan una sola vez las victorias, las partidas y los KO de las cuentas registradas. Las tablas SQLite residen en `DATA_DIR`; el archivo y su WAL deben permanecer juntos en el volumen. La aplicación no necesita un servicio PostgreSQL externo.

Se incluye validación de entrada, límite de tamaño JSON, control de origen para solicitudes mutables, CSP, cookies SameSite/HttpOnly, límites de autenticación, límites de salas y descarte de controles obsoletos. Esto no sustituye una auditoría de producción ni ofrece protección competitiva de nivel comercial.

Las páginas HTML se generan desde shell.html con scripts/build-pages.js. La navegación conserva el estado mientras actualiza la URL de la página correspondiente. Los recursos relativos también funcionan con file:// para juego local en PC. Los ajustes se guardan en localStorage y afectan audio, renderizado, temas y controles.

Entrenamiento se ejecuta localmente: rival pasivo o activo, daño editable y saltos opcionales ilimitados. El servidor desactiva las opciones de entrenamiento en salas online. El límite de siete combatientes se aplica tanto al motor como a miembros y CPU del servidor.

Los perfiles combat-data.js son compartidos y deterministas. El servidor controla esfera, núcleo recogible, requisito de energía, medio segundo de preparación y colisiones del definitivo. Las escenas y sonidos solo presentan los eventos y no pausan el servidor. Los intervalos de objetos y esfera son 600 pasos del motor. Los bots priorizan beneficios próximos y disputan el núcleo sin privilegios respecto a los humanos.
