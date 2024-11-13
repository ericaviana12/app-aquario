/**
 * Função para calcular o volume do aquário
 * @author Erica Viana
 */
function calcularVolume(event) {
    event.preventDefault()

    // Captura os valores de entrada
    let comprimento = Number(document.getElementById('comprimento').value)
    let largura = Number(document.getElementById('largura').value)
    let altura = Number(document.getElementById('altura').value)

    // Cálculo do volume
    let volume = (comprimento * largura * altura) / 1000

    // Exibição do resultado
    document.getElementById('resultado').value = `${volume.toFixed(2)} litros`
}

// Função para limpar o campo de resultado ao resetar o formulário
function limparResultado() {
    document.getElementById('resultado').value = ''
}
