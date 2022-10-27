import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/towerHeroes/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/components/towerHeroes/hero-detail/hero-detail.component';
import { HeroesComponent } from 'src/app/components/towerHeroes/heroes/heroes.component';
import { TowerHomeComponent } from 'src/app/components/towerHeroes/tower-home/tower-home.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, outlet: 'tower' },
  { path: 'dashboard', outlet: 'tower', component: DashboardComponent },
  { path: 'detail/:id', outlet: 'tower', component: HeroDetailComponent },
  { path: '', component: TowerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TowerHeroesRoutingModule {}
