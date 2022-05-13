let numero = Number(prompt("Informe um número inteiro:"));

let tabuada = `Tabuada no número: ${numero}\n\n`;

for (let multiplicador = 0; multiplicador < 11; multiplicador++) {
    tabuada += `${numero} x ${multiplicador} = ${numero*multiplicador}\n`;
}

alert(tabuada);