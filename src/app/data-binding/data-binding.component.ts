import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Guilherme";
  public idade: number= 27;
  public maisUm: number= 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string ="";
  public imgTitle: string="Property Binding";

  public position: {x: number, y: number } ={x: 0, y: 0};
  constructor(){ }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valorMouse: MouseEvent){
    console.log(valorMouse);
    this.position.x= valorMouse.offsetX;
    this.position.y= valorMouse.offsetY;
  }

}
