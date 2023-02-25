import { Injectable } from '@angular/core';
import { Etape } from '../models/etape';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  etapes : Array<Etape> = [];

  constructor() { }

  initalisationEtapes() : Array<Etape> {
    this.etapes = [];
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

  initalisationEtapesLoan() : Array<Etape> {
    this.etapes = [];
    this.etapes .push(new Etape(0,"Etape n°1","Premier contact","Notre histoire débute souvent par votre appel nous expliquant votre besoin en menuiseries, nous fixons donc un premier rendez-vous afin d'analyser vos besoins et ce qui vous correspondrait selon les contraintes techniques, votre budget et vos envies.",""))
    this.etapes .push(new Etape(1,"Etape n°2","Etude","Notre chargé d'affaires prépare donc l'étude de votre projet, en conciliant toutes les données emmagasinés lors de notre première rencontre.",""))
    this.etapes .push(new Etape(2,"Etape n°3","Rendez-vous","Nous organisons une deuxième rencontre dans notre showroom, où à votre domicile, afin de vous présenter votre projet, vous expliquer la manière dont celui-ci a été travaillé et toutes les possibilités qu'il existe.",""))
    this.etapes .push(new Etape(3,"Etape n°4","Commande","Une fois la proposition validée, place aux dernières améliorations et modifications (si besoin). Et s'en suit la commande avec planification de la pose !",""))
    this.etapes .push(new Etape(4,"Etape n°5","Pose des menuiseries","C'est le jour J ! Vos nouvelles menuiseries sont chargées et transportées de la plus soigneuse des manières et notre équipe technique s'apprête à débuter la pose, accompagné de notre conducteur pour le parfait déroulement de l'installation. Une fois celle-ci terminée nous réceptionnons le chantier ensemble pour s'assurer de sa conformité et que vos attentes soient respectées. Enfin, nous faisons un point sur les éventuelles installations à prévoir et à chiffrer.",""))

    return this.etapes;

  }
}
