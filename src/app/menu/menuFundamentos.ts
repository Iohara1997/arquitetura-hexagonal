import TerminalUtil from "@/app/util/TerminaUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export default async function menuFundamentos() {
  TerminalUtil.titulo("Fundamentos");

  const [indice] = await TerminalUtil.menu([
    "1. Polimorfismo",
    "2. Princípio de Inversão de Dependência",
    "Voltar",
  ]);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    default:
      return;
  }

  await menuFundamentos();
}
