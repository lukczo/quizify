import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from './core/welcome/welcome.component';
import { StartComponent } from './game/start/start.component';


const routes: Routes = [
    {
        path: 'home',
        component: WelcomeComponent,
    },{
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'play',
        component: StartComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
