// Os preços devem ser iguais aos que aparecem no catálogo da página.
const precoMesa = 129.90;
const precoColuna = 219.90;
const precoParede = 179.90;

function simularCompra() {
  // prompt() recebe texto. Number() converte a resposta em número.
  const qtdMesa = Number(prompt("Quantos ventiladores de mesa deseja? Digite 0 se não quiser."));
  if (!Number.isFinite(qtdMesa) || qtdMesa < 0 || !Number.isInteger(qtdMesa)) {
    alert("Quantidade inválida. Execute a simulação novamente e digite um número inteiro igual ou maior que zero.");
    return;
  }

  const qtdColuna = Number(prompt("Quantos ventiladores de coluna deseja? Digite 0 se não quiser."));
  if (!Number.isFinite(qtdColuna) || qtdColuna < 0 || !Number.isInteger(qtdColuna)) {
    alert("Quantidade inválida. Execute a simulação novamente e digite um número inteiro igual ou maior que zero.");
    return;
  }

  const qtdParede = Number(prompt("Quantos ventiladores de parede deseja? Digite 0 se não quiser."));
  if (!Number.isFinite(qtdParede) || qtdParede < 0 || !Number.isInteger(qtdParede)) {
    alert("Quantidade inválida. Execute a simulação novamente e digite um número inteiro igual ou maior que zero.");
    return;
  }

  if (qtdMesa === 0 && qtdColuna === 0 && qtdParede === 0) {
    alert("Nenhum produto foi selecionado. Sua compra não foi realizada.");
    return;
  }

  const totalMesa = precoMesa * qtdMesa;
  const totalColuna = precoColuna * qtdColuna;
  const totalParede = precoParede * qtdParede;
  const subtotal = totalMesa + totalColuna + totalParede;

  // Regra do projeto: 10% de desconto para subtotal igual ou maior que R$ 300,00.
  const desconto = subtotal >= 300 ? subtotal * 0.10 : 0;
  const totalFinal = subtotal - desconto;

  const resultado =
    "RESUMO DA SUA COMPRA — VINE VENTILADORES\n\n" +
    "Ventilador de Mesa: " + qtdMesa + " x " + formatarMoeda(precoMesa) + " = " + formatarMoeda(totalMesa) + "\n" +
    "Ventilador de Coluna: " + qtdColuna + " x " + formatarMoeda(precoColuna) + " = " + formatarMoeda(totalColuna) + "\n" +
    "Ventilador de Parede: " + qtdParede + " x " + formatarMoeda(precoParede) + " = " + formatarMoeda(totalParede) + "\n\n" +
    "Subtotal: " + formatarMoeda(subtotal) + "\n" +
    "Desconto: " + formatarMoeda(desconto) + (desconto > 0 ? " (10%)" : " (não atingiu R$ 300,00)") + "\n" +
    "TOTAL A PAGAR: " + formatarMoeda(totalFinal);

  alert(resultado);
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
