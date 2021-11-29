class Conta{
    constructor(saldoc,saldop,juros){
        this.saldoc = saldoc;
        this.saldop = saldop;
        this.juros = juros;
    }
    deposito(valor){
        this.saldoc += valor;
    }
    saque(valor){
        this.saldoc -= valor;
    }
    transfcp(valor){
        this.saldoc -= valor;
        this.saldop += valor;
    }
    transfpc(valor){
        this.saldop -= valor;
        this.saldoc += valor;
    }
    jurosdeanivers(){
        this.saldop *= (1+this.juros);
    }
}

class ContaEspecial extends Conta{
    constructor(saldoc,saldop,juros){
        super(saldoc,saldop,juros*2);
    }
}

//criando a conta do cliente
let cliente = new Conta(0,0,.005);
console.log(cliente.saldoc);

//movimentando a conta do cliente
cliente.deposito(1000);
console.log(cliente.saldoc);

cliente.saque(100);
console.log(cliente.saldoc);

cliente.transfcp(400);
console.log(cliente.saldoc);
console.log(cliente.saldop);
cliente.jurosdeanivers();
console.log(cliente.saldop);

//criando a conta especial do cliente
let cliente_conta_especial = new ContaEspecial(10000,20000,.005);

//movimentando a conta do cliente
cliente_conta_especial.saque(100);
console.log(cliente_conta_especial);

cliente_conta_especial.jurosdeanivers();
console.log(cliente_conta_especial);