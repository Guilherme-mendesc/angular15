import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string ="Bem vindo";
  
  constructor() {}

   ngOnInit():void {}

   ngOnChanges():void {
    alert("Foi alterado com sucesso.");
   }

    ngOnDestroy(): void{
    console.log("Foi destruido com sucesso");
   }
  
  

}
