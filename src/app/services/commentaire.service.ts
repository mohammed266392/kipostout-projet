import { Injectable } from '@angular/core';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  commentaires : Array<Commentaire> = [];

  constructor() { }

  initalisationCommentaire() : Array<Commentaire> {
    this.commentaires = [];
    // for (let index = 0; index < 5; index++) {
    //   this.commentaires.push(new Commentaire(index,"Raki","Mohammed","mohammed2663","Très satisfait par la qualité du service.",4));
    // }
     
    this.commentaires.push(new Commentaire(0,"Espie","Solenn","Espie solenn",
    "Suite à un changement complet de la menuiserie de la maison, la sociétée kiposetou a su être réactive et fournir un travail de grande qualité ! Toujours présents pour répondre à nos interrogations, je recommande ! Encore merci pour tout !",5));
    this.commentaires.push(new Commentaire(1,"Stafoggia","Ugo","Ugo Stafoggia",
    "Excellente expérience avec Kiposetou, des délais rapides malgrés les difficultés du moment, 2 fenêtre posées rapidement et parfaitement pour un studio étudiant.",5));
    this.commentaires.push(new Commentaire(2,"Robin","Louis","Louis Robin",
    "KIPOSETOU est intervenu suite à un problème sur ma serrure en urgence (4h avant que je parte en vacance) avec un travail propre, une équipe professionnelle et un rapport qualité prix excellent ! Merci encore pour ce dépannage !",5));
    this.commentaires.push(new Commentaire(3,"Chaabi","Adel","Chaabi Adel",
    "Très professionnelle soigneux a l'écoute du client . Je recommande fortement cette entreprise .",5));
    this.commentaires.push(new Commentaire(4,"Nancy","Carnon","Nancy Carnon",
    "Pose d'une baie vitrée, volets roulants et à battants , professionnalisme et qualité des matériaux au rendez-vous. Je recommande vivement.",5));
    this.commentaires.push(new Commentaire(5,"Naoufel","Sadak","Naoufel Sadak",
    "Pose d'une porte de garage sectionnelle motorisé, matériel de qualité et délai respecté. Je suis satisfait et les recommande!",5));
    this.commentaires.push(new Commentaire(6,"Perrine","Gatet","Perrine Gatet",
    "Nous sommes ravis d'avoir fait appel à KiPoseTou pour notre porte d'entrée et des volets solaires. Une équipe très sympathique et investie. Encore merci!",5));
    this.commentaires.push(new Commentaire(7,"Perrine","Gatet","Aurelie D",
    "Je recommande les yeux fermés ! Entreprise très professionnelle, travail de qualité, une équipe vraiment à l'écoute et très disponible.",5));
    this.commentaires.push(new Commentaire(8,"Perrine","Gatet","TAZEROUTI Mourad",
    "Merci a Kiposetou une equipe de pro et une prestation dans les regles de l'art.",5));
    this.commentaires.push(new Commentaire(9,"Perrine","Gatet","Arsen Dirsarkissian",
    "Travail sérieux, finitions parfaites et prix abordables. Je recommande à 100%.",5));
    this.commentaires.push(new Commentaire(10,"Perrine","Gatet","Kenza Selma",
    "Une entreprise professionnelle qui fournit un travail de qualité. Je recommande",5));
    
    return this.commentaires;
  }
}
