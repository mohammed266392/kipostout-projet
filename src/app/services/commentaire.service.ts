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
    for (let index = 0; index < 5; index++) {
      this.commentaires.push(new Commentaire(index,"Raki","Mohammed","mohammed2663","Très satisfait par la qualité du service.",4));
    }
    return this.commentaires;
  }
}
