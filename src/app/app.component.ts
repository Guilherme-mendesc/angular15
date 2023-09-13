import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>

  <!-- <app-diretivas-atributos>
  <h1>Aulas de Diretivas Atributo</h1>
  <h3>Final da Aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
  <h1>Guilherme</h1>
  <h3>Nicaragua Toboga</h3>
  </app-diretivas-atributos> -->


  <router-outlet></router-outlet>`



})
export class AppComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
    
  }

  }

