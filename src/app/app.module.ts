import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeroesComponent } from './components/towerHeroes/heroes/heroes.component';
import { HeroDetailComponent } from './components/towerHeroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/towerHeroes/messages/messages.component';
import { DashboardComponent } from './components/towerHeroes/dashboard/dashboard.component';
import { MangasComponent } from './components/manga-app/mangas/mangas.component';
import { MangaDetailComponent } from './components/manga-app/manga-detail/manga-detail.component';
import { TowerHomeComponent } from './components/towerHeroes/tower-home/tower-home.component';
import { MangaHomeComponent } from './components/manga-app/manga-home/manga-home.component';
import { fontAwesomeIcons } from './config/font-awesome-icons';
import { ToastDialogComponent } from './components/global/toast-dialog/toast-dialog.component';
import { AddMangaComponent } from './components/manga-app/add-manga/add-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MangasComponent,
    MangaDetailComponent,
    TowerHomeComponent,
    MangaHomeComponent,
    ToastDialogComponent,
    AddMangaComponent,
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...fontAwesomeIcons);
  }
}
