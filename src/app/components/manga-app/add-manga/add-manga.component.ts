import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DTOManga } from 'src/app/models/manga-app/manga';
import { ToastService } from 'src/app/services/global/toast.service';
import { MangaService } from 'src/app/services/manga-app/manga.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css'],
})
export class AddMangaComponent implements OnInit {
  mangaForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    rating: [0],
  });

  constructor(
    private fb: FormBuilder,
    private mangaService: MangaService,
    private location: Location,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.mangaForm.valid) {
      const mangaToAdd: DTOManga = {
        title: this.mangaForm.value.title as string,
        description: this.mangaForm.value.description as string,
        rating: this.mangaForm.value.rating as number,
      };
      this.mangaService.addManga(mangaToAdd).subscribe((manga) => {
        this.location.back();
        let message = `${manga.title} added`;
        this.toastService.show(message, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      });
    }
  }
}
