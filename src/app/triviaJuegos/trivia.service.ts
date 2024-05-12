import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { triviaData } from '../triviaJuegos/trivia-data';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor() { }

  getTriviaData() {
    return triviaData; // Devuelve las preguntas
  }
}
