import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { TournamentService } from './tournament.service';

export class Player {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TournamentService,
  ]
})
export class AppComponent {
  title = 'Welcome to the tournament';
}
