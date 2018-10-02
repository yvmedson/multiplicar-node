const fs = require('fs');
const colors = require('colors/safe');

const listarTabla = (base, limite = 10) => {
    console.log('==============================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un numero`);
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(colors.green(`tabla-${base}.txt`));
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}