import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllfoldersComponent } from './allfolders/allfolders.component';
const routes: Routes = [
  {path:'allfolders',component:AllfoldersComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
