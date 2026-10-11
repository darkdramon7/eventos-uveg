import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventListComponent {

  eventos = [
    { id: 1, nombre: 'Angular Básico' },
    { id: 2, nombre: 'TypeScript' },
    { id: 3, nombre: 'Desarrollo Web' }
  ];

}