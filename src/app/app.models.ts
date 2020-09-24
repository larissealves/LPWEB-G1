export class Producao {
    titulo: string;
    descricao: string;
    ano: string;
    genero: string;
    duracao: string;
    temporadas: string;
  
  
    constructor(titulo: string, descricao: string, ano: string, genero:string, duracao:string, temporadas:string) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.temporadas = temporadas;
  
    }
  }