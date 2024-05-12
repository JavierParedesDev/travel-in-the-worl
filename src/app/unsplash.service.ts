import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  apiUrl = 'https://api.unsplash.com';
  private accessKey = '1pVqKt0fMXiDfbBmwLwKyS5vWw2COanlJiQKJErGRQI';

  constructor(private http: HttpClient) { }

  getPhotosByCountry(country: string): Observable<any> {
    return this.http.get(`https://api.unsplash.com/search/photos?query=${country}&client_id=${this.accessKey}`);
  }

  getPhotoDetails(photoId: string): Observable<any> {
    const url = `${this.apiUrl}/photos/${photoId}`;
    return this.http.get(url, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`
      }
    });
  }

  // Método para descargar la imagen desde una URL directa utilizando descarga programática
  downloadImage(imageUrl: string) {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'imagen_descargada.jpg';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error al descargar la imagen:', error);
      });
  }
}
