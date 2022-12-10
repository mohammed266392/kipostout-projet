import { Injectable } from '@angular/core';
import { Etape } from '../models/etape';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  etapes : Array<Etape> = [];

  constructor() { }

  initalisationEtapes() : Array<Etape> {
    let etapePosition = 0;
        let etapeTitle="";
        let etapeUnderTitle="";
        let etapeDescription="";
        let etapeButton="";
    for (let index = 0; index < 5; index++) {
      etapePosition = index ;
      etapeTitle = "Lorem1";
      etapeUnderTitle = "Lorem ipsum dolor sit.";
      etapeDescription = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi accusamus rem architecto, officiis, soluta odio dignissimos in quos laborum quis corporis perspiciatis facere repellendus recusandae, expedita illo impedit enim!";
      this.etapes.push(new Etape(etapePosition,etapeTitle,etapeUnderTitle,etapeDescription,etapeButton));
    }

    return this.etapes;

  }
}
