import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PhotoModalPage } from '../photo-modal/photo-modal.page';
import { HttpClientModule } from '@angular/common/http';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { UnsplashService } from '../unsplash.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule
    
  ],
  declarations: [Tab1Page],
  providers: [UnsplashService]
})
export class Tab1PageModule {}
