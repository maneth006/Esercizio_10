import { Routes } from '@angular/router';
import { DescrizioneComponent } from './descrizione/descrizione.component';
import { HomeComponent } from './home/home.component';
import { MostreComponent } from './mostre/mostre.component';

export const routes: Routes = [

    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    
    {path: 'Mostre', component: MostreComponent}, 
    
    {path: 'Mostre/:id', component: DescrizioneComponent} ,
    
    {path: 'Home', component:HomeComponent},
    
];
