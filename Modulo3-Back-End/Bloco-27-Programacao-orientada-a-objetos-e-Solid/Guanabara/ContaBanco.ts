class ContaBanco {
  public _numConta: number = 0;
  protected _tipo: string = "";
  private _dono: string = "";
  private _saldo: number = 0;
  private _status: boolean = false;

  constructor(dono: string, tipo: string, saldo: number, status: boolean) {
    this._dono = dono;
    this._tipo = tipo;
    this._saldo = saldo;
    this._status = status;
  }

  public set numConta(valueConta: number) {
    this._numConta = valueConta;
  }

  public get numConta() {
    return this._numConta;
  }

  public set tipo(valueTipo: string) {
    this._tipo = valueTipo;
  }

  public get tipo() {
    return this._tipo;
  }

  public set dono(valueDono: string) {
    this._dono = valueDono;
  }

  public get dono(): string {
    return this._dono;
  }

  public set saldoCount(valueSaldo: number) {
    this._saldo = valueSaldo;
  }

  public get saldo():number {
    return this._saldo;
  }

  public set status(valueStatus: boolean) {
    this._status = valueStatus;
  }

  public get status() {
    return this._status;
  }

  public abrirConta(conta: string) {
    let numberCount = Math.floor(Math.random() * 10 + 1);
    this._numConta = numberCount;
    this._tipo = conta;
    this._status = true;
    if (conta === "conta corrente") {
      this._saldo = 50;
    } else if (conta === "conta poupança") {
      this._saldo = 150;
    }
  }

  fecharConta() {
    if (this._saldo > 0) {
      throw new Error("A conta possui valores");
    } else if (this._saldo < 0) {
      throw new Error("A conta está em débito");
    }
    this._status = false;
  }
  public depositar(value: number) {
    if ((this._status = true)) {
      // this._saldo = this._saldo + value;
      this.saldoCount = this.saldoCount + value; 
      
    }
    throw new Error("A conta está fechada");
  }

  public sacar(value: number) {
    if (this._status === true) {
      if (this._saldo > value) {
        this._saldo = this._saldo - value;
      }
      throw new Error("Saldo insuficiente");
    }
    throw new Error("Impossível sacar");
  }

  public pagarMensal() {
    let valorMensalidade = 0;
    if (this._tipo === "conta corrente") {
      valorMensalidade = 12;
    } else if (this._tipo === "conta poupança") {
      valorMensalidade = 20;
    }

    if (this._status === true) {
      if (this._saldo > valorMensalidade) {
        this._saldo = this._saldo - valorMensalidade;
      }
      throw new Error("Saldo insuficiente");
    }
    throw new Error("Impossível pagar");
  }
}

const conta1 = new ContaBanco("João", "conta corrente", 0, false);

conta1.abrirConta("conta corrente");
conta1.fecharConta();
conta1.depositar(100);
conta1.sacar(10);
conta1.pagarMensal();
