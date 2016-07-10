"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map