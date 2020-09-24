import { Component, OnInit } from '@angular/core';
import {Producao} from './app.models';
import { FormBuilder, Validators  } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  titulo = null;
  descricao = null;
  ano = null;
  genero = null;
  duracao = null;
  temporadas = null;
  filmes = null;
  series = null;
  categoria = [
    {valor: 'f', desc: 'filme'},
    {valor: 's', desc: 'serie'},
  ];
  listaProducoes = [];
  listaProducoesSeries = [];
  editandoProducao: Producao = null;
 
  

  adicionar(){
    if (this.editandoProducao) {
      this.editandoProducao.titulo = this.titulo;
      this.editandoProducao.descricao = this.descricao;
      this.editandoProducao.ano = this.ano;
      this.editandoProducao.genero = this.genero;
      this.editandoProducao.duracao = this.duracao;
      this.editandoProducao.temporadas = this. temporadas;  
    }
    else {
      const adicionarProducoes = new Producao (this.titulo, this.descricao, this.ano, this.genero, this.duracao, this.temporadas)
      this.listaProducoes.push(adicionarProducoes);
      console.log(this.listaProducoes);  
      this.titulo = null;
      this.descricao = null;
      this.ano = null;
      this.genero = null;
      this.duracao = null;
      this.temporadas = null;

    }
  
    this.editandoProducao = null;
    this.titulo = null;
    this.descricao = null;
    this.ano = null;
    this.genero = null;
    this.duracao = null;
    this.temporadas = null;
   }




  excluir(id) {
    this.listaProducoes.splice(this.listaProducoes.indexOf(id),1);
  }

  editar(producao: Producao) {
    this.titulo = producao.titulo;
    this.ano = producao.ano;
    this.genero = producao.genero;
    this.duracao = producao.duracao;
    this.temporadas = producao.temporadas;
    this.descricao = producao.descricao;
    this.editandoProducao=producao;
  }
  
}
