import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Manga } from 'src/app/models/manga-app/manga';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MangaService } from 'src/app/services/manga-app/manga.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css'],
})
export class MangaDetailComponent implements OnInit {
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<string>();

  mangaId: string = '';
  manga?: Manga;

  isUpdating: boolean = false;

  updateMangaForm = this.formBuilder.nonNullable.group({
    rating: [0, Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    protected activeModal: NgbActiveModal,
    private mangaService: MangaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCurrentManga(this.mangaId);
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  getCurrentManga(id: string) {
    this.mangaService.getMangaById(id).subscribe((manga) => {
      this.manga = manga;
    });
  }

  deleteItem(manga: Manga) {
    this.mangaService.deleteManga(manga._id).subscribe((message: string) => {
      this.cancel();
      this.delete.emit(message);
    });
  }

  updateItem() {
    if (this.manga !== undefined && this.updateMangaForm.valid) {
      const updatedManga: Manga = {
        _id: this.manga._id,
        title: this.manga.title,
        description: this.updateMangaForm.value.description as string,
        rating: this.updateMangaForm.value.rating as number,
      };

      this.mangaService.updateManga(updatedManga).subscribe((manga: Manga) => {
        this.cancel();
        let message = `The manga ${manga.title} has been updated`;
        this.update.emit(message);
      });
    }
  }
}
