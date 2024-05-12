import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';

// Importa environment correctamente
import { environment } from './environments/environment'; 

// Configura Firebase
const firebaseConfig = environment.firebaseConfig;

if (environment.production) {
  enableProdMode();
}


// Bootstrap the AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
