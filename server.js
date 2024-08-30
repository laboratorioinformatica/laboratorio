const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la sumisión del formulario
app.post('/submit', (req, res) => {
    const { nombre, nota } = req.body;
    const data = `Nombre: ${nombre}, Nota: ${nota}\n`;

    // Guardar en la dirección especificada
    const filePath = '\\\\ate0808cor02\\apps\\nelson\\notassss.txt';

    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.error('Error al guardar la nota:', err);
            return res.status(500).send('Error al guardar la nota.');
        }
        res.send('Nota guardada exitosamente.');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://10.100.74.43:${port}`);
});
