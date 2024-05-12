import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any;
  private translationsLoadedSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    // Carga las traducciones por defecto (en inglés)
    this.loadTranslations('en').subscribe(translations => {
      this.translations = translations;
      this.translationsLoadedSubject.next(true); // Notifica que las traducciones se han cargado
    });
  }

  // Método para esperar a que las traducciones se hayan cargado
  translationsLoaded(): Observable<boolean> {
    return this.translationsLoadedSubject.asObservable();
  }

  loadTranslations(language: string): Observable<any> {
    return this.http.get<any>(`assets/translations/translations-${language}.json`).pipe(
      catchError(() => {
        console.error('Error loading translations');
        return of({}); // Devuelve un objeto vacío en caso de error
      })
    );
  }

  translate(key: string): string {
    if (this.translations) {
      return this.translations[key] || key;
    } else {
      console.warn('Translations not loaded yet.');
      return key;
    }
  }
}
