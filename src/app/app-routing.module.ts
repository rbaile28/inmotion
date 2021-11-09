import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsVisComponent } from "./maps-vis/maps-vis.component";
import { WordpressVisComponent } from "./wordpress-vis/wordpress-vis.component";

const routes: Routes = [
  { path: '', component: MapsVisComponent },
  { path: 'inmotion', component: MapsVisComponent },
  { path: 'maps', component: MapsVisComponent },
  { path: 'wordpress', component: WordpressVisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
