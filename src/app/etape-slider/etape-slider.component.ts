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
  etapes : Array<Etape> = [];
  etapesTop : Array<string> = [];
  heigthContainerSlider = "0px";

  constructor(private etapeService : EtapeService) {
    this.etapes = etapeService.initalisationEtapes();
    this.initialisationEtapeTop();
  }

  ngOnInit(): void {}

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
  fingerSlide(event : Event){
    console.log("blablabla");
    
    const div = document.querySelector(".main_container_position") as HTMLElement;
    const maxTop = Number(this.etapesTop[this.etapesTop.length-1].replace('px',''));
  
    console.log("ma div : ",(div.scrollTop/maxTop).toFixed(2));
    console.log("ma position : ",this.remplirCercle((div.scrollTop/maxTop)));
    this.heigthContainerSlider =  ((div.scrollTop/maxTop)*440).toFixed(0)+"px";
    console.log('ma barre : ',this.heigthContainerSlider);
     //this.remplirCercle((div.scrollTop/maxTop))
    //console.log(event);
  }

  remplirCercle(pourcentage : number) : number {
    const gap = 1/Number(this.etapesTop.length);
    console.log("display gap : ",gap);
    let position = 0;
    for (let index = 0; index <= 1; index=index+gap) {
      if(pourcentage<index){
        return position;
      }else{
        position++;
      }
      
    }
    return position;
  }

}
