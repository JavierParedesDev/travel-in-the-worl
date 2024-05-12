import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  welcomeMessage: string;
  errorOccurredMessage: string;
  constructor(private translationService: TranslationService) {
    this.welcomeMessage = this.translationService.translate('welcomeMessage');
    this.errorOccurredMessage = this.translationService.translate('errorOccurred') 
  }
}
