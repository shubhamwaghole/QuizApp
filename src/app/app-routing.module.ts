import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionComponent} from './question/question.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([ 
    {path: 'home',component: HomeComponent},
    {path: 'question',component: QuestionComponent},
    {path: '',redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component:PageNotFoundComponent},
   ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
