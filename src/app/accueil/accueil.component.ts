import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, AfterContentInit  {

  constructor() { }

  ngAfterContentInit(): void {
    
    // divContent.style.backgroundColor="#ffffff94";
    // divContent.style.width = "313px";
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    // const divContent : HTMLDivElement = document.querySelector('.main_title_texte') as HTMLDivElement;
    // divContent.classList.toggle("active");
  }

}
