import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  indexAvis : number = 0;
  commentaires : Array<Commentaire> = [];

  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.commentaires = this.commentaireService.initalisationCommentaire();
    console.log('mes commentaires : ', this.commentaires);
  }

  slideAdroite(){
    let blockAvis : NodeListOf<HTMLDivElement> = document.querySelectorAll('.main2_block4_avis_box_block') as NodeListOf<HTMLDivElement> ;
    console.log(blockAvis);
    blockAvis.forEach(element =>{
      let decallage = Number(element.style.left.split('%')[0])-100;
      element.style.left = decallage+"%";
      console.log(element);
    })

  }
  slideAgauche(){
    let blockAvis : NodeListOf<HTMLDivElement> = document.querySelectorAll('.main2_block4_avis_box_block') as NodeListOf<HTMLDivElement> ;
    console.log(blockAvis);
    blockAvis.forEach(element =>{
      let decallage = Number(element.style.left.split('%')[0])+100;
      element.style.left = decallage+"%";
      console.log(element);
    })
  }

  tournerADroite(){
    console.log("mon indexe : ",this.indexAvis);
    if(this.indexAvis<this.commentaires.length){
        this.indexAvis++;
        this.slideAdroite();
        
    }
  }
  tournerAGauche(){
    console.log("mon indexe : ",this.indexAvis);
    if(this.indexAvis> 0){
      this.indexAvis--;
      this.slideAgauche();
    }
  }

}
