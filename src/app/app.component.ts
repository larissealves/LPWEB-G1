import { Component, OnInit } from '@angular/core';
import {Producao} from './app.models';
import { FormBuilder, Validators  } from "@angular/forms";
import { Button } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*template: `
    <img src="assets/star0.png">
    <img src="assets/star1.png">
  `*/
}) 

export class AppComponent{
  titulo = null;
  descricao = null;
  ano = null;
  genero = null;
  duracao = null;
  temporadas = null;
  listaProducoes = [];
  listaProducoesFilmes = [];
  editandoProducao: Producao = null;
 
  gender =''; 
  fbSeries ='';
  fbFilmes='';

  adicionar(id){
    if (this.editandoProducao) {
        this.editandoProducao.titulo = this.titulo;
        this.editandoProducao.descricao = this.descricao;
        this.editandoProducao.ano = this.ano;
        this.editandoProducao.genero = this.genero;
        this.editandoProducao.duracao = this.duracao;
        this.editandoProducao.temporadas = this. temporadas;  
       
        ///console.log(this.editandoProducao.gender);
        if (this.editandoProducao.gender != this.gender) {
          this.editandoProducao.gender = this.gender;
          if (this.editandoProducao.gender === 'Serie'){
            this.listaProducoes.push(this.editandoProducao);
            this.listaProducoesFilmes.splice(this.listaProducoesFilmes.indexOf(id),1);
            
               //console.log('editado', this.editandoProducao)
            //console.log(this.listaProducoes)
          }else{
            this.listaProducoesFilmes.push(this.editandoProducao);
            this.listaProducoes.splice(this.listaProducoes.indexOf(id),1);
          }
      }
    }
    else{
      if (this.gender === 'Filme'){
      const adicionarProducoes = new Producao (this.titulo, this.descricao, this.ano, this.genero, this.duracao, this.temporadas, this.gender)
        this.listaProducoesFilmes.push(adicionarProducoes);
      }else {
        const adicionarProducoes = new Producao (this.titulo, this.descricao, this.ano, this.genero, this.duracao, this.temporadas, this.gender)
        this.listaProducoes.push(adicionarProducoes);
      }
       
    }
    this.editandoProducao = null;
    this.descricao = null;
    this.titulo = null;
    this.ano = null;
    this.genero = null;
    this.duracao = null;
    this.temporadas = null;
    this.gender = null;
   }


  excluirFilmes(id) {
    if (this.fbFilmes === "Alto") {
      alert('Produção com 03 star. Impossivel apagar')
    }else{
      if (confirm('Tem certeza que deseja excluir?' )) {
      this.listaProducoesFilmes.splice(this.listaProducoesFilmes.indexOf(id),1);
      }
    }
  }

  excluirSeries(id) {
    if (this.fbSeries === "Alto") {
      alert('Produção com 03 star. Impossivel apagar')
    }else{
      if (confirm('Tem certeza que deseja excluir?' )) {
      this.listaProducoes.splice(this.listaProducoes.indexOf(id),1);
      }
    }
  }
  

  editar(producao: Producao) {
      this.titulo = producao.titulo;
      this.ano = producao.ano;
      this.genero = producao.genero;
      this.duracao = producao.duracao;
      this.temporadas = producao.temporadas;
      this.descricao = producao.descricao;
      this.gender = producao.gender;
      this.editandoProducao=producao;
  }

  cancelar(): void{
    this.titulo = null;
    this.ano = null;
    this.genero = null;
    this.duracao = null;
    this.temporadas = null;
    this.descricao = null;
    this.gender = '';
    this.editandoProducao=null;
  }
  
}
