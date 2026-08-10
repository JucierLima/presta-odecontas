function calcularPrestacao() {
    // ENTRADAS
    const saldoAnterior = Number(document.getElementById("saldoAnterior").value) || 0;
    const setimaPix = Number(document.getElementById("setimaPix").value) || 0;
    const sacola = Number(document.getElementById("sacola").value) || 0;
    const vendaMaterial = Number(document.getElementById("vendaMaterial").value) || 0;

    // SAÍDAS
    const aluguel = Number(document.getElementById("aluguel").value) || 0;
    const repasse = Number(document.getElementById("repasse").value) || 0;
    const mantimentos = Number(document.getElementById("mantimentos").value) || 0;
    const literatura = Number(document.getElementById("literatura").value) || 0;

    // TOTAL DE ENTRADAS
    const totalEntradas =
        saldoAnterior +
        setimaPix +
        sacola +
        vendaMaterial;

    // TOTAL DE SAÍDAS
    const totalSaidas =
        aluguel +
        repasse +
        mantimentos +
        literatura;

    // SALDO ATUAL
    const saldoAtual = totalEntradas - totalSaidas;

    // MOSTRAR RESULTADOS
    document.getElementById("totalEntradas").textContent =
        formatarMoeda(totalEntradas);

    document.getElementById("totalSaidas").textContent =
        formatarMoeda(totalSaidas);

    document.getElementById("saldoAtual").textContent =
        formatarMoeda(saldoAtual);
}

// Formatação para Real brasileiro
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}