import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget.component/budget.component';
import { CharactersComponent } from './characters.component/characters.component';
import { CoursesComponent } from './courses.component/courses.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'budget', component: BudgetComponent },
  { path: '', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
