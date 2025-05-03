function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura) {
        alert("Por favor, preencha peso e altura corretamente.");
        return;
    }

    const imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc < 24.9) {
        mensagem = "Peso normal";
    } else if (imc < 29.9) {
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }

    document.getElementById('resultado').innerHTML = `
      <p>Seu IMC é <strong>${imc.toFixed(2)}</strong></p>
      <p>Classificação: <strong>${mensagem}</strong></p>
    `;
}