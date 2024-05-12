import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private apiUrl = 'https://opentdb.com/api.php';
  private translations: any; // Agrega esta línea para declarar la variable translations

  constructor(private http: HttpClient) { }

  loadTranslations(): Observable<any> { // Cambia el tipo de retorno a Observable<any>
    return this.http.get('assets/translations/translations-es.json'); // No es necesario suscribirse aquí
  }

  // Método para obtener una traducción específica
  getTranslation(key: string) {
    return this.translations[key] || key;
  }

  getQuestions(amount: number, category: number, difficulty: string, type: string): Observable<any> {
    const url = `${this.apiUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    return this.http.get(url);
  }

}
