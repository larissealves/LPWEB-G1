export class Producao {
    titulo: string;
    descricao: string;
    ano: string;
    genero: string;
    duracao: string;
    temporadas: number;
    checkbox: boolean;
  
    constructor(titulo: string, descricao: string, ano: string, genero:string, duracao:string, temporadas:number, checkbox:boolean) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.temporadas = temporadas;
      this.checkbox = checkbox;
  
    }
  }