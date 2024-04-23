import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MostraServicesService } from '../mostra-services.service';

@Component({
  selector: 'app-descrizione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descrizione.component.html',
  styleUrl: './descrizione.component.css'
})
export class DescrizioneComponent {

  id1: any;

  constructor(private route: ActivatedRoute, private provaService: MostraServicesService){

  }

  ngOnInit(){

    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }

  mostre1 = this.provaService.mostre1
  mostre2 = this.provaService.mostre2
  mostre3 = this.provaService.mostre3
  mostre4 = this.provaService.mostre4
  mostre5 = this.provaService.mostre5
  mostre6 = this.provaService.mostre6
  mostre7 = this.provaService.mostre7
}
