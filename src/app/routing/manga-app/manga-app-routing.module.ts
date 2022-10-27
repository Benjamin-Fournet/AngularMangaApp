import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from 'src/app/components/manga-app/mangas/mangas.component';

const routes: Routes = [
  {
    path: '',
    component: MangasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaAppRoutingModule {}
