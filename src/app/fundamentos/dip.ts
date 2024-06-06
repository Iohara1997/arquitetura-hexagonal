import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminaUtil";
import Honda from "@/core/fundamentos/Honda";
import Ferrari from "@/core/fundamentos/Ferrari";
import { terminal } from "terminal-kit";
/**
 * O Princípio de Inversão de Dependência sugere que as dependências de
 * alto nível não devem depender de implementações de baixo nível, mas sim
 * de abstrações. Isso significa que as classes de alto nível devem depender de interfaces,
 * classes abstratas ou contratos, em vez de classes concretas. As implementações
 * concretas são então injetadas nas classes de alto nível por meio de mecanismos
 * de injeção de dependência, como construtores, métodos ou inversão de controle (IoC).
 *  @returns uma classe que exemplifica o conceito de polimorfismo
 */

export default async function dip() {
  TerminalUtil.titulo("Princípio de Inversão de Dependência");

  const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
    "Honda",
    "Ferrari",
  ]);

  let carro;

  switch (tipo) {
    case 0:
      carro = new Honda();
      break;
    default:
      carro = new Ferrari();
  }
  corrida(carro, terminal.red);

  await TerminalUtil.esperarEnter();
}
