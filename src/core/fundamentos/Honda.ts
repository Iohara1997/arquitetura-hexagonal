import Carro from "./Carro";

export default class Honda implements Carro {
  constructor(
    readonly velocidadeMaxima: number = 140,
    private _velocidadeAtual: number = 0,
  ) {}

  acelerar(): void {
    this._velocidadeAtual = Math.min(
      this._velocidadeAtual + 2,
      this.velocidadeMaxima,
    );
  }

  frear(): void {
    this._velocidadeAtual = Math.max(this.velocidadeAtual - 2, 0);
  }

  get velocidadeAtual() {
    return this._velocidadeAtual;
  }
}
