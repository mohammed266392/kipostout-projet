import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClickStopPropagationDirective } from './directive/click-stop-propagation.directive';
import { CeQueVousProposeeComponent } from './ce-que-vous-proposee/ce-que-vous-proposee.component';
import { RealisationComponent } from './realisation/realisation.component';
import { EtapeSliderComponent } from './etape-slider/etape-slider.component';
import { EtapeService } from './services/etape.service';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PkChoisirComponent } from './pk-choisir/pk-choisir.component';
import { DecrireTonProjetComponent } from './decrire-ton-projet/decrire-ton-projet.component';
import { EtreRappeleComponent } from './etre-rappele/etre-rappele.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    ClickStopPropagationDirective,
    CeQueVousProposeeComponent,
    RealisationComponent,
    EtapeSliderComponent,
    CommentaireComponent,
    PkChoisirComponent,
    DecrireTonProjetComponent,
    EtreRappeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EtapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
