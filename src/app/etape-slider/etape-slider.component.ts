import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Etape } from '../models/etape';
import { EtapeService } from '../services/etape.service';

@Component({
  selector: 'app-etape-slider',
  templateUrl: './etape-slider.component.html',
  styleUrls: ['./etape-slider.component.scss']
})
export class EtapeSliderComponent implements OnInit {

  position : number  = 0;
  // height : string = '440';
  etapes : Array<Etape> = [];
  etapesTop : Array<string> = [];

  constructor(private etapeService : EtapeService) {
    this.etapes = etapeService.initalisationEtapes();
    this.initialisationEtapeTop();
   }


  ngOnInit(): void {
    
  }
  initialisationEtapeTop(){
    for (let index = 0; index < this.etapes.length; index++) {
      this.etapesTop.push(String(index * 440)+"px");
    }
  }
  changePosition(etapePosition : number){
    console.log("ma position AVANT : ",this.position);
    console.log("etapesTop AVANT : ",this.etapesTop);
    
    if(this.position<etapePosition){
      console.log("EN BAS : ");
      this.scrollToPositionBottom(etapePosition);
    }else{
      console.log("EN HAUT : ");
      this.scrollToPositionUp(etapePosition);
    }
    this.position = etapePosition;
    console.log("ma position APRES : ",this.position);
    console.log("etapesTop APRES : ",this.etapesTop);

  }
  scrollToPositionBottom(position:number){
    const topValue = Number(this.etapesTop[position].replace('px',''));
    console.log("Valeur a soustraire : ",topValue);
    this.minusToEtapesTop(topValue);
  }
  scrollToPositionUp(position:number){
    const topValue = Number(this.etapesTop[position].replace('px',''));
    console.log("Valeur a soustraire : ",topValue);
    this.plusToEtapesTop(topValue);
  }
  minusToEtapesTop(value:number){
    for (let index = 0; index < this.etapes.length; index++) {
      console.log("la valeur de l'index est ", index);
      console.log("la valeur etapesTop est ", Number(this.etapesTop[index].replace('px',''))-value);
      this.etapesTop[index] = String(Number(this.etapesTop[index].replace('px',''))-value)+"px" ;
    }
  }
  plusToEtapesTop(value:number){
    for (let index = 0; index < this.etapes.length; index++) {
      console.log("la valeur de l'index est ", index);
      console.log("la valeur etapesTop est ", Number(this.etapesTop[index].replace('px',''))-value);
      this.etapesTop[index] = String(Number(this.etapesTop[index].replace('px',''))-value)+"px" ;
    }
  }
}
