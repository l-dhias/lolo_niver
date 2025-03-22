AOS.init();

const dataDoEvento = new Date("Sep 1, 2025 08:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval (function() {
    const agora = new Date;
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diaAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs );
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diaAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s.`;

    if (distanciaAteOEvento <0 ) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML =`UUUUuuu!!! acho que você não foi ao evento.`
    }
}, 1000);