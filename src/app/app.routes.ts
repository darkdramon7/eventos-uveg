import { Routes } from '@angular/router';

import { Home } from './home/home';
import { EventListComponent } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';
import { Register } from './register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'event/:id',
    component: EventDetail
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: '**',
    redirectTo: ''
  }
];