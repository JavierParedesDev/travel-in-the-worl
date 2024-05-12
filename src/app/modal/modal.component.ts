import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../modal//modal.component.css']
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Output() restartGameClicked: EventEmitter<void> = new EventEmitter<void>();

  restartGame() {
    this.restartGameClicked.emit();
  }
}