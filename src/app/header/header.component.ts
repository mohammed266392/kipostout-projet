import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nosRealisation(event : Event){
    console.log("j'ai cliqué sur nos réalisation",event);
    const divRealisation = event.composedPath();
    console.log("event ",divRealisation[1]);
    const divContent : HTMLDivElement = document.querySelector('.header_menu_items_realisation_content') as HTMLDivElement;
    if(divContent.style.display == "flex"){
      divContent.style.display = "none";
    }else{
      divContent.style.display = "flex";
    }
    
  }

  afficheMenu(){
    console.log("j'affiche le menu");
    const btn  : HTMLDivElement = document.querySelector('.header_menu-burger') as HTMLDivElement ;
    btn.classList.toggle('active');
  }

}
