import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from 'src/app/models/manga-app/manga';
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

  deleteManga(id: string): Observable<string> {
    let msg = this.http.delete<string>(this.mangaApiUrl + 'delete/' + id);
    console.log(msg);
    return msg;
  }
}
