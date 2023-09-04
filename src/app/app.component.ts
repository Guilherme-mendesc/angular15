import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">adicionar</button>
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destuir componente</button>
  <router-outlet></router-outlet>`



})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number =1;

  constructor() {}

  public adicionar(): number{
    return this.valor +=1;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log("NgDocheck")
  }

  ngAfterContentInit(): void {
    console.log("NgContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("NgContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("NgAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("NgAfterViewChecked")
  }
  public destruir: boolean = true;

  public destruirComponent(){
    this.destruir=false;

  }

  }

