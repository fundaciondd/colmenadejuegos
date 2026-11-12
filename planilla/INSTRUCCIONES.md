# Planilla de resultados · cómo activarla (10 minutos, una sola vez)

Sirve para dos cosas: contar cuánta gente abre Colmena de Juegos (anónimo) y recibir los "mejores 20" que los chicos o la seño decidan subir desde el Panal de honor.

1. En Google Drive de la Fundación: **Nuevo → Hojas de cálculo de Google**. Nombre: `Colmena de Juegos · resultados`.
2. En la planilla: menú **Extensiones → Apps Script**. Se abre el editor con un archivo `Código.gs`.
3. Borrá lo que tiene y pegá el contenido completo de `Code.gs` (este paquete). Guardá (ícono de disquete).
4. Arriba a la derecha: **Implementar → Nueva implementación**. En "Seleccionar tipo" (engranaje) elegí **Aplicación web**.
   - Descripción: `Colmena de Juegos`
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
   Tocá **Implementar**. La primera vez pide autorizar: *Revisar permisos → elegir la cuenta → Configuración avanzada → Ir a … (no seguro) → Permitir*. Es tu propio script; el aviso es porque no está verificado por Google.
5. Copiá la **URL de la aplicación web** (termina en `/exec`).
6. En GitHub, repositorio `colmenadejuegos`: abrí `config.json`, tocá el lápiz, y dejá:
   `{ "endpoint": "https://script.google.com/macros/s/…/exec" }`
   Commit changes. En un minuto la app empieza a enviar.

## Qué llega

- Hoja **aperturas**: una fila por teléfono y por día (fecha, un código aleatorio del teléfono, versión, Android/iOS, si está instalada). Sin nombres.
- Hoja **ranking**: cada vez que alguien marca la casilla y toca "Subir los mejores 20": puesto, nombre tal como lo escribieron, celdas, partidas completas, partidas, errores, récord de Abeja al rescate y fecha de la última partida.
- Abriendo la URL `/exec` en el navegador se ve un resumen: cantidad de aperturas y de teléfonos distintos.

## Si cambiás el código del script

Después de editar `Code.gs`: **Implementar → Administrar implementaciones → lápiz → Versión: Nueva → Implementar**. La URL no cambia.
