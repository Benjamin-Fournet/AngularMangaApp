import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/global/toast.service';

@Component({
  selector: 'app-toast-dialog',
  templateUrl: './toast-dialog.component.html',
  styleUrls: ['./toast-dialog.component.css'],
})
export class ToastDialogComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}
