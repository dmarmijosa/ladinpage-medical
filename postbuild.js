const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.join(__dirname, 'docs', 'browser');
const destinationPath = path.join(__dirname, 'docs');

async function moveFiles() {
  try {
    const exists = await fs.pathExists(sourcePath);
    if (!exists) {
      console.error('El directorio no existe:', sourcePath);
      return;
    }

    // Obtén todos los archivos y directorios dentro de `browser`
    const filesToMove = await fs.readdir(sourcePath);

    // Mueve cada archivo/directorio al destino
    for (const file of filesToMove) {
      const sourceFile = path.join(sourcePath, file);
      const destFile = path.join(destinationPath, file);
      await fs.move(sourceFile, destFile, { overwrite: true });
    }

    // Opcional: Eliminar el directorio `browser` si está vacío o ya no es necesario
    await fs.remove(sourcePath);

    console.log('Archivos movidos con éxito.');
  } catch (err) {
    console.error('Error al mover los archivos:', err);
  }
}

moveFiles();
