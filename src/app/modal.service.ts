import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import {DeleteAllModalComponent } from '../app/delete-all-modal/delete-all-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private displayStyleSubject = new BehaviorSubject<string>('none');
  displayStyle = this.displayStyleSubject.asObservable();

  openPopup() {
    
    this.displayStyleSubject.next('block')
  }
  closePopup() {
    this.displayStyleSubject.next('none')
  }
  
  
}
