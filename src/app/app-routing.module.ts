import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WelcomeComponent } from './core/welcome/welcome.component';
import { StartComponent } from './game/start/start.component';
import { PlayComponent } from './game/play/play.component';


const routes: Routes = [
    {
        path: 'home',
        component: WelcomeComponent,
    },{
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartComponent
    }, 
    {
        path: 'play',
        component: PlayComponent
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
