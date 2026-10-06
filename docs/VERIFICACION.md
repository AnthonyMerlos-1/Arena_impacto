# Verificación realizada

Entorno de preparación: Node.js 24.19.0. Pruebas de interfaz con Chromium headless 153 mediante Playwright. Transporte online probado contra el servidor local; no se desplegó en Railway.

## Pruebas automáticas: `npm test`

Diecisiete pruebas, todas aprobadas:

1. Cinco vidas: KO, plataforma de reaparición y eliminación permanente tras la quinta caída.
2. El golpe cargado aumenta daño y retroceso.
3. El escudo bloquea daño y el agarre lo supera.
4. Kirby tiene cinco saltos y recuperación ascendente.
5. La esfera debe romperse y su núcleo recogerse de cerca para obtener el definitivo; se consume al activarlo.
6. Desempate por vidas/daño al terminar el tiempo.
7. Partidas completas de siete CPU en las dieciséis arenas sin posiciones o daño inválidos.
8. Bomba recogida, lanzamiento, explosión y daño al rival.
9. Plantilla de 29 personajes, 16 mapas y máximo estricto de siete combatientes.
10. Entrenamiento sin caducidad ni eliminación permanente, rival pasivo y saltos libres.
11. Servidor: registro, duplicados, contraseña incorrecta, sesión, autorización, creador exclusivo, estado Listo, dos clientes con instantáneas idénticas, reconexión, siete combatientes, persistencia tras reiniciar y rechazo de origen externo.

Se verificaron también sintaxis JavaScript, JSON de despliegue, nombres de elementos HTML sin duplicados, recursos referenciados existentes y todos los SVG válidos.

## Interfaz de navegador

- Inicio en PC, menú colorido, 29 personajes, 16 mapas y práctica con siete combatientes.
- Ajustes persistentes tras recargar: tema, música y vidas.
- Apertura directa con file://: estilos, retratos y entrenamiento local funcionan.
- Aleatorio y entrenamiento: daño editable, saltos libres y reloj detenido.
- Teclado de movimiento, salto y ataque durante práctica.
- Creación de sala, entrada desde un enlace en otro contexto de navegador, estado Listo y combate online visible para ambos clientes.
- Registro móvil con confirmación de contraseña, entrada directa a los cuatro modos y entrenamiento.
- Pantalla virtual vertical de 393 × 852 y horizontal de 852 × 393, controles visibles y sin desbordamiento horizontal.
- Doce controles táctiles: cuatro direcciones, salto independiente y siete acciones, con definitivo condicionado al núcleo.
- Dos pulsaciones táctiles simultáneas comprobadas con eventos reales de entrada Chromium.
- KO provocado en práctica: plataforma flotante con vidas restantes; eliminación permanente al agotar dos vidas; revancha local y cierre de sesión móvil, sin errores de JavaScript.
- Sin errores de JavaScript ni errores de recursos en el recorrido principal.
- Capturas de menú, ajustes, selección, siete combatientes, modos móviles y entrenamiento incluidas en `capturas/`.

## Límites de la verificación

No se probó físicamente en Xiaomi/Redmi/Samsung ni en iPhone. No se probó latencia pública de Railway ni carga de decenas de salas. Las pruebas de Chromium simulan pantalla y entrada táctil, no certifican todos los navegadores. No se realizaron auditoría externa de seguridad ni pruebas de mandos físicos. El soporte de mando utiliza la API estándar Gamepad y requiere compatibilidad del dispositivo/navegador.

El juego tiene dieciséis mapas y veintinueve personajes, gráficos vectoriales 2D y animaciones simplificadas. No pretende equivaler a todo el contenido, movimiento o rendimiento del juego comercial.

## Comprobaciones de edición 4

12. Aparición inicial y repetida a los 600 fotogramas (10 segundos), con posición aleatoria de esfera.
13. Q/ULTI sin núcleo no genera poder ni escena, para todos los personajes.
14. Genkidama móvil, Rasenshuriken gigante y bananas dobles; daño por colisión.
15. Definitivo de agarre falla lejos y acierta solo con rival cercano delante.
16. CPU recoge bomba, rompe esfera, recoge núcleo y activa un definitivo real.
17. Salto independiente, combo al mantener golpe y dieciséis temas musicales distintos.

La simulación de siete CPU en dieciséis mapas recorre la plantilla completa de 29 luchadores. El servidor rechaza entradas nuevas durante el combate y mantiene reconexiones existentes.

Interfaz v4 verificada: golpe con F, Q bloqueada sin núcleo y escena de Genkidama; siete CPU sin humanos; dos clientes online con Fernanfloo; registro móvil hacia modos; dos dedos reales moviendo y golpeando; anchos virtuales 320/393/852 px y tamaño táctil al 130% sin botones fuera de pantalla; apertura local con los nuevos módulos. No se detectaron errores JavaScript en este recorrido.
