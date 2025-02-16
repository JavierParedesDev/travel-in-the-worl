import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { UploadPhotoModalComponent } from './upload-photo-modal/upload-photo-modal.component';
import { LoadingPagePage } from './inicio-App/loading-page/loading-page.page';
const routes: Routes = [
  {
    path: '', component: LoadingPagePage
  
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'photo-modal',
    loadChildren: () => import('./photo-modal/photo-modal.module').then( m => m.PhotoModalPageModule)
  },
  { path: 'login', component: AppLoginComponent },
  { path: 'upload-photo-modal', component: UploadPhotoModalComponent},
  { path: 'loading', component: LoadingPagePage }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
