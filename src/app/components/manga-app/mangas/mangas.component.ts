import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Manga } from 'src/app/models/manga-app/manga';
import { ToastService } from 'src/app/services/global/toast.service';
import { MangaService } from 'src/app/services/manga-app/manga.service';
import { MangaDetailComponent } from '../manga-detail/manga-detail.component';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css'],
})
export class MangasComponent implements OnInit {
  @Output() delete = new EventEmitter<string>();
  mangas: Manga[] = [];

  constructor(
    private mangaService: MangaService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getMangas();
  }

  getMangas(): void {
    this.mangaService.getMangas().subscribe((mangas) => {
      this.mangas = mangas;
    });
  }

  onDetailsModalOpen(manga: Manga): void {
    const modalRef = this.modalService.open(MangaDetailComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    modalRef.componentInstance.mangaId = manga._id;

    modalRef.componentInstance.delete.subscribe((message: string) => {
      this.getMangas();
      this.toastService.show(message, {
        classname: 'bg-success text-light',
        delay: 5000,
      });
    });

    modalRef.componentInstance.update.subscribe((message: string) => {
      this.getMangas();
      this.toastService.show(message, {
        classname: 'bg-success text-light',
        delay: 5000,
      });
    });
  }
}
