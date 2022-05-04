import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizartarefaComponent } from './crud-task/atualizartarefa/atualizartarefa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"atualizar/:id", component: AtualizartarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
