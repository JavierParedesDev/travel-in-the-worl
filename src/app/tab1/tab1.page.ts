import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';
import { PhotoModalPage } from '../photo-modal/photo-modal.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  countries = ['chile', 'united states', 'united kingdom', 'france', 'germany', 'italy', 'spain', 'japan', 'china', 'australia', 'brazil', 'canada', 'mexico', 'argentina', 'peru', 'colombia', 'venezuela', 'ecuador', 'bolivia', 'paraguay', 'uruguay', 'chile', 'united states', 'united kingdom', 'france', 'germany', 'italy', 'spain', 'japan', 'china', 'australia', 'brazil', 'canada', 'mexico', 'argentina', 'peru', 'colombia', 'venezuela', 'ecuador', 'bolivia', 'paraguay', 'uruguay',
    'england','greece', 'india', 'ireland', 'netherlands', 'new zealand', 'portugal', 'russia', 'south africa', 'south korea', 'sweden', 'switzerland', 'thailand', 'turkey', 'vietnam', 'wales', 'scotland', 'northern ireland', 'czech republic', 'denmark', 'finland', 'norway', 'poland', 'belgium', 'austria', 'hungary', 'iceland'
  ];
  photosByCountry: { [country: string]: any[] } = {};
  filteredCountries: string[] = [];
  searchTerm: string = '';

  countryTranslations: { [key: string]: string } = {
    'chile': 'chile',
    'estados unidos': 'united states',
    'reino unido': 'united kingdom',
    'francia': 'france',
    'alemania': 'germany',
    'italia': 'italy',
    'españa': 'spain',
    'japón': 'japan',
    'china': 'china',
    'australia': 'australia',
    'brasil': 'brazil',
    'canadá': 'canada',
    'méxico': 'mexico',
    'argentina': 'argentina',
    'perú': 'peru',
    'colombia': 'colombia',
    'venezuela': 'venezuela',
    'ecuador': 'ecuador',
    'bolivia': 'bolivia',
    'paraguay': 'paraguay',
    'uruguay': 'uruguay',
    'inglaterra': 'england',
    'grecia': 'greece',
    'india': 'india',
    'irlanda': 'ireland',
    'holanda': 'netherlands',
    'nueva zelanda': 'new zealand',
    'portugal': 'portugal',
    'rusia': 'russia',
    'sudáfrica': 'south africa',
    'corea del sur': 'south korea',
    'suecia': 'sweden',
    'suiza': 'switzerland',
    'tailandia': 'thailand',
    'turquía': 'turkey',
    'vietnam': 'vietnam',
    'gales': 'wales',
    'escocia': 'scotland',
    'irlanda del norte': 'northern ireland',
    'república checa': 'czech republic',
    'dinamarca': 'denmark',
    'finlandia': 'finland',
    'noruega': 'norway',
    'polonia': 'poland',
    'bélgica': 'belgium',
    'austria': 'austria',
    'hungría': 'hungary',
    'islandia': 'iceland'
    
  
    // Agrega más traducciones según sea necesario
  };

  constructor(private unsplashService: UnsplashService
    , private modalController: ModalController,
    private router: Router // Inyecta Router
  ) { }

  ngOnInit(): void {
    this.getCountriesPhotos();
    this.filteredCountries = this.countries;
    this.photosByCountry = {};
  }


  getCountriesPhotos(): void {
    this.countries.forEach(country => {
      this.unsplashService.getPhotosByCountry(country).subscribe(
        (data: any) => {
          this.photosByCountry[country] = data.results;
        },
        error => {
          console.error(`Error al obtener imágenes de ${country}: ${error.message}`);
        }
      );
    });
  }

  filterCountries(): void {
    let searchTerm = this.searchTerm.toLowerCase();
    // Traduce el término de búsqueda al inglés si hay una traducción disponible
    searchTerm = this.countryTranslations[searchTerm] || searchTerm;
    this.filteredCountries = this.countries.filter(country => country.toLowerCase().includes(searchTerm));
  }
  

  
  async openPhotoModal(photo: any) {
    const modal = await this.modalController.create({
      component: PhotoModalPage,
      componentProps: {
        selectedPhoto: photo 
      }
    });
    return await modal.present();
  }
  goToLogin() {
    this.router.navigateByUrl('/login')
  }

}
