import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(message: string, options: any = {}) {
    setTimeout(() => {
      this.toasts.push({ message, ...options });
    }, 500);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts = [];
  }
}
