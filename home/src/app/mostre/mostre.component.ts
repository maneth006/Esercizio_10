import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Routes } from '@angular/router';
import { MostraServicesService } from '../mostra-services.service';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  constructor(private provaService: MostraServicesService){

  }

  mostre = this.provaService.mostre
}
