import { Component, EventEmitter, Output } from '@angular/core';
import { Manga } from 'src/app/models/manga-app/manga';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MangaService } from 'src/app/services/manga-app/manga.service';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css'],
})
export class MangaDetailComponent {
  @Output() delete = new EventEmitter<string>();

  manga?: Manga;

  constructor(
    protected activeModal: NgbActiveModal,
    private mangaService: MangaService
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  async deleteItem(manga: Manga) {
    this.mangaService
      .deleteManga(manga._id)
      .subscribe(async (message: string) => {
        this.cancel();
        setTimeout(() => {
          this.delete.emit(message);
        }, 500);
      });
  }
}
