import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./my_components/about/about.component"
import {TodosComponent} from "./my_components/todos/todos.component"
const routes: Routes = [
  {path : "",component:TodosComponent},
  {path : "about",component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
