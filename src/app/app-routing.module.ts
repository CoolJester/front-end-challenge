import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DadjokesComponent } from './dadjokes/dadjokes.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  {
    path: 'dadJokes',
    component: DadjokesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
