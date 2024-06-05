import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/TerminaUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Honda from "@/core/fundamentos/Honda";
/**
 * Polimorfismo é um conceito chave na programação orientada a objetos,
 * que se refere à capacidade de um objeto de assumir diferentes formas ou comportamentos.
 * Isso permite que objetos de diferentes classes sejam tratados de forma uniforme quando
 * eles compartilham uma mesma interface ou supertipo.
 * @returns uma classe que exemplifica o conceito de polimorfismo
 */

export default async function polimorfismo() {
  TerminalUtil.titulo("Polimorfismo");

  const [tipoCarro] = await TerminalUtil.selecao("Tipo de carro?", [
    "Ferrari",
    "Honda",
  ]);
  const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Honda();

  while (true) {
    TerminalUtil.limpar();
    TerminalUtil.exibirObjeto(
      "Velocidade Máxima:",
      ` ${carro.velocidadeMaxima} km/h`,
    );
    TerminalUtil.exibirObjeto(
      "Velocidade Atual:",
      ` ${carro.velocidadeAtual} km/h`,
    );

    const [opcao] = await TerminalUtil.selecao("Qual opçao?", [
      "Acelerar",
      "Frear",
    ]);
    opcao === 0 ? carro.acelerar() : carro.frear();

    const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
    if (!continuar) return;
  }
}
