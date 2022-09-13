import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  public input : number = 0;
  public output: number = 0;

  protected arrayValores : number[] = []
  protected arrayOperacoes : string [] = []
  protected valorEmCache : string = "0";
  protected textoEmTela : string = "0";

  constructor() { }

  atualizarTextoEmTela(texto : string, isOperacao : boolean) {

    if (isOperacao) {
      this.textoEmTela = this.textoEmTela + " " + texto + " ";
    } else {
      if (this.textoEmTela == "0") {
        this.textoEmTela = texto;
      } else {
        this.textoEmTela = this.textoEmTela + texto;
      }
    }
  }

  alocarNumeroEmMemoria(entradaTeclado : string) {
    if ((this.valorEmCache == "0" || this.valorEmCache == "") && entradaTeclado == '0') {
      this.valorEmCache = "0";
      return;
    }

    this.valorEmCache += entradaTeclado;
    this.atualizarTextoEmTela(entradaTeclado, false);
    
  }

  alocarOperacaoEmMemoria(operacao : string) {
    if (this.valorEmCache == "" || this.valorEmCache == "0") { return;}
    if (this.arrayValores[this.arrayValores.length - 1] &&
        this.arrayValores[this.arrayValores.length - 1].toString() == this.textoEmTela) {
      this.atualizarTextoEmTela(this.textoEmTela, false);
    }

    this.arrayOperacoes.push(operacao);
    this.arrayValores.push(parseFloat(this.valorEmCache));
    this.valorEmCache = "0";
    
    this.atualizarTextoEmTela(operacao, true);

  }

  calcularResultado() {
    let resultCache : number;
    if (this.arrayOperacoes.length != 0) {
      for (let i = 0; i <= this.arrayOperacoes.length; i++) {
        
      }
    }
  }
}
