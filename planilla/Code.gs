/**
 * Colmena de Juegos · receptor de resultados (Google Apps Script).
 * Recibe por POST un JSON con {tipo:'apertura'|'ranking', dispositivo, version, fecha, ...}
 * y lo escribe en la planilla de cálculo a la que está asociado este script.
 * Hojas: "aperturas" (una fila por apertura diaria de cada teléfono) y "ranking" (una fila por chico y subida).
 */
function doPost(e) {
  var out = { ok: false };
  try {
    var data = JSON.parse(e.postData.contents || '{}');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var ahora = new Date();
    if (data.tipo === 'apertura') {
      hoja(ss, 'aperturas', ['recibido', 'fecha_telefono', 'dispositivo', 'version', 'plataforma', 'instalada'])
        .appendRow([ahora, data.fecha || '', data.dispositivo || '', data.version || '', data.plataforma || '', data.instalada ? 'sí' : 'no']);
      out.ok = true;
    } else if (data.tipo === 'ranking' && Array.isArray(data.filas)) {
      var h = hoja(ss, 'ranking', ['recibido', 'dispositivo', 'version', 'puesto', 'nombre', 'celdas', 'completas', 'partidas', 'errores', 'rescate', 'ultima_partida']);
      var filas = data.filas.slice(0, 20).map(function (f, i) {
        return [ahora, data.dispositivo || '', data.version || '', i + 1, String(f.nombre || '').slice(0, 40), f.celdas || 0, f.completas || 0, f.partidas || 0, f.errores || 0, f.rescate || 0, f.ultima || ''];
      });
      if (filas.length) h.getRange(h.getLastRow() + 1, 1, filas.length, filas[0].length).setValues(filas);
      out.ok = true; out.filas = filas.length;
    } else {
      out.error = 'tipo desconocido';
    }
  } catch (err) {
    out.error = String(err);
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

/** Resumen rápido al abrir la URL en el navegador: cuántas aperturas y cuántos teléfonos distintos. */
function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName('aperturas');
  var n = h ? Math.max(0, h.getLastRow() - 1) : 0;
  var tel = {};
  if (h && n) h.getRange(2, 3, n, 1).getValues().forEach(function (r) { tel[r[0]] = 1; });
  return ContentService.createTextOutput(JSON.stringify({ ok: true, aperturas: n, telefonos: Object.keys(tel).length }))
    .setMimeType(ContentService.MimeType.JSON);
}

function hoja(ss, nombre, encabezados) {
  var h = ss.getSheetByName(nombre);
  if (!h) { h = ss.insertSheet(nombre); h.appendRow(encabezados); h.setFrozenRows(1); }
  return h;
}
