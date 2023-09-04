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
  public imgSrc: string ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png";
  public imgTitle: string="Property Binding";
  constructor(){ }

  ngOnInit(): void {
    
  }

}
