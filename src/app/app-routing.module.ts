import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMangaComponent } from './components/manga-app/add-manga/add-manga.component';
import { MangaHomeComponent } from './components/manga-app/manga-home/manga-home.component';
import { MangasComponent } from './components/manga-app/mangas/mangas.component';
import { DashboardComponent } from './components/towerHeroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/towerHeroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/towerHeroes/heroes/heroes.component';
import { TowerHomeComponent } from './components/towerHeroes/tower-home/tower-home.component';

const routes: Routes = [
  {
    path: 'manga',
    component: MangaHomeComponent,
    children: [
      { path: '', redirectTo: '/manga/(manga:mangas)', pathMatch: 'full' },
      { path: 'mangas', outlet: 'manga', component: MangasComponent },
      { path: 'add', outlet: 'manga', component: AddMangaComponent },
    ],
  },
  {
    path: 'tower',
    component: TowerHomeComponent,
    children: [
      { path: 'heroes', outlet: 'tower', component: HeroesComponent },
      { path: 'dashboard', outlet: 'tower', component: DashboardComponent },
      { path: 'detail/:id', outlet: 'tower', component: HeroDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
