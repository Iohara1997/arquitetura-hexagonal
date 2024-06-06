import Carro from "./Carro";

export default class Ferrari implements Carro {
  constructor(
    readonly velocidadeMaxima: number = 240,
    private _velocidadeAtual: number = 0,
  ) {}

  acelerar(): void {
    this._velocidadeAtual = Math.min(
      this._velocidadeAtual + 50,
      this.velocidadeMaxima,
    );
  }

  frear(): void {
    this._velocidadeAtual = Math.max(this.velocidadeAtual - 50, 0);
  }

  get velocidadeAtual() {
    return this._velocidadeAtual;
  }
}
