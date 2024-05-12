import { UnsplashService } from '../unsplash.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.page.html',
  styleUrls: ['./photo-modal.page.scss'],
})
export class PhotoModalPage implements OnInit {

  selectedPhoto: any; // Variable para almacenar la foto seleccionada
  photoDetails: any; // Variable para almacenar los detalles de la foto
  imageUrl: string = ''; // Variable para almacenar la URL de la imagen

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private unsplashService: UnsplashService // Inyectar el servicio Unsplash
  ) { }

  ngOnInit() {
    // Obtener la foto seleccionada del objeto NavParams
    this.selectedPhoto = this.navParams.get('selectedPhoto');
    
    // Obtener la URL de la imagen seleccionada
    this.imageUrl = this.selectedPhoto.urls.regular;

    // Obtener los detalles de la foto seleccionada
    this.unsplashService.getPhotoDetails(this.selectedPhoto.id).subscribe(
      (data: any) => {
        this.photoDetails = data; // Almacenar los detalles de la foto
      },
      error => {
        console.error(`Error al obtener detalles de la foto: ${error.message}`);
      }
    );
  }

  closeModal() {
    this.modalController.dismiss(); // Cerrar el modal
  }

  iniciarDescarga() {
    this.unsplashService.downloadImage(this.imageUrl);
  }  
}
