import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DecrireTonProjetComponent } from './decrire-ton-projet/decrire-ton-projet.component';
import { EtreRappeleComponent } from './etre-rappele/etre-rappele.component';

const routes: Routes = [

  {path: '', redirectTo: 'Accueil', pathMatch:"full"},
  {path: 'Etre-rappele', component : EtreRappeleComponent},
  {path: 'Accueil', component : AccueilComponent},
  {path: 'Decrire-mon-projet', component : DecrireTonProjetComponent},
  {path: '**', component : AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
