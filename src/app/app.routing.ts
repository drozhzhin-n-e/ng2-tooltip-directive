import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FirstPageComponent} from './first-page.component';
import {SecondPageComponent} from './second-page.component';

const routes: Routes = [
    { path : '', component: FirstPageComponent },
    { path: 'second-page', component: SecondPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }