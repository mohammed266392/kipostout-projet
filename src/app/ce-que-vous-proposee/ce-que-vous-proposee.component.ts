import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ce-que-vous-proposee',
  templateUrl: './ce-que-vous-proposee.component.html',
  styleUrls: ['./ce-que-vous-proposee.component.scss']
})
export class CeQueVousProposeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(event : Event){
    console.log("cliquez sur le bouton");
    console.log(event.composedPath()[0]);
    console.log(event.composedPath());
    const divPlus :  HTMLDivElement = event.composedPath()[0] as HTMLDivElement ;

    divPlus.classList.toggle('active');
    divPlus.nextElementSibling?.classList.toggle('active');
  }

}
