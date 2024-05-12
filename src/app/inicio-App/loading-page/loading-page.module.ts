import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingPagePageRoutingModule } from './loading-page-routing.module';
import { LoadingPagePage } from './loading-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    LoadingPagePageRoutingModule
  ],
  declarations: [LoadingPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregando CUSTOM_ELEMENTS_SCHEMA
})
export class LoadingPagePageModule {}
