import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DTOManga,
  Manga,
  mapToUpdateObject,
} from 'src/app/models/manga-app/manga';
import { MessageService } from '../tower-heroes/message.service';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  private mangaApiUrl = 'http://localhost:8000/manga/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`Manga service: ${message}`);
  }

  getMangas(): Observable<Manga[]> {
    return this.http.get<Manga[]>(this.mangaApiUrl + 'getAll');
  }

  getMangaById(id: string): Observable<Manga> {
    return this.http.get<Manga>(this.mangaApiUrl + 'getOne/' + id);
  }

  deleteManga(id: string): Observable<string> {
    return this.http.delete<string>(this.mangaApiUrl + 'delete/' + id);
  }

  updateManga(manga: Manga): Observable<Manga> {
    return this.http.patch<Manga>(
      this.mangaApiUrl + 'update/' + manga._id,
      mapToUpdateObject(manga)
    );
  }

  addManga(manga: DTOManga): Observable<Manga> {
    return this.http.post<Manga>(this.mangaApiUrl + 'create', manga);
  }
}
