import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../modal//modal.component.css']
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Output() restartGameClicked: EventEmitter<void> = new EventEmitter<void>();
  Tab3Page: any;

  restartGame() {
    this.restartGameClicked.emit();
    this.Tab3Page.restartGame();
  }
  
}