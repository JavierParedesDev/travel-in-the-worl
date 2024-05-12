import { ModalComponent } from './../modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { TriviaService } from '../trivia.service';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    Tab3Page,
    ModalComponent // Añade el componente modal a las declaraciones
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Agrega el CUSTOM_ELEMENTS_SCHEMA aquí
  ]
})
export class Tab3PageModule {}
