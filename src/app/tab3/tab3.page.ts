import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../triviaJuegos/trivia.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  questions = [] as any[];
  score = 0;
  currentLevel = 1; // Nivel actual
  maxLevel = 6;
  gameOver: boolean = false;

  


  constructor(private triviaService: TriviaService) {}

  ngOnInit() {
    this.loadQuestions(this.currentLevel);
  }

  updateScore(question: any) {
    if (question.isCorrect) {
      this.score += 1;
    }
  }
  restartGame() {
    // Restablecer el juego
    this.gameOver = false;
    this.currentLevel = 1;
    this.score = 0;
    this.loadQuestions(this.currentLevel);
  }

  loadQuestions(level: number) {
    // Obtener todas las preguntas disponibles del servicio
    const allQuestions = this.triviaService.getTriviaData(); // Llama al método del servicio para obtener las preguntas

    // Filtrar preguntas por nivel
    const questionsByLevel = allQuestions.filter((question: any) => question.level === level);

    // Seleccionar aleatoriamente 10 preguntas del nivel
    const selectedQuestions = this.shuffleArray(questionsByLevel).slice(0, 10);
    // hacer un if pra cuando llegue al nivel 4 valla aumentando la cantidad de preguntas

    this.questions = selectedQuestions;
  }

  checkAnswer(question: any) {

    
    
    const selectedIndex = question.answers.findIndex(
      (answer: any) => answer === question.selectedAnswer
    );
    const correctIndex = question.answers.findIndex(
      (answer: any) => answer === question.correctAnswer
    );
  
    if (selectedIndex === correctIndex) {
      // Respuesta correcta
      question.isCorrect = true;
      console.log('Respuesta correcta');
      // Imprimir mensaje en un div
      const messageDiv = document.getElementById('message');
      if (messageDiv) {
        messageDiv.innerText = 'Respuesta correcta';
        messageDiv.style.color = 'green';
        this.updateScore(question);
      }
      // Eliminar la pregunta respondida del array
      const index = this.questions.indexOf(question);
      if (index !== -1) {
        this.questions.splice(index, 1);
      }
  
      // Cargar nuevas preguntas si el arreglo está vacío y el nivel actual es menor que el máximo nivel
      if (this.questions.length === 0 && this.currentLevel < this.maxLevel) {
        this.currentLevel++; // Avanzar al siguiente nivel
        this.maxLevel ++;
        this.loadQuestions(this.currentLevel);
        this.score = 0;
      }
      else if (this.score >= this.maxLevel) {
        // Si el puntaje es igual o mayor que el nivel máximo, avanzar al siguiente nivel
        this.currentLevel++;
        this.maxLevel++;
        this.loadQuestions(this.currentLevel);
        this.score = 0; // Reiniciar el puntaje
      }
    } else {
      // Respuesta incorrecta
      question.isCorrect = false;
      console.log('Respuesta incorrecta');
      // Imprimir mensaje en un div
      const messageDiv = document.getElementById('message');
      if (messageDiv) {
        messageDiv.innerText = 'Respuesta incorrecta';
        messageDiv.style.color = 'red';
      }
      const index = this.questions.indexOf(question);
    if (index !== -1) {
      this.questions.splice(index, 1);
    }
    }
    

    // Verificar si el juego ha terminado
    
  }

  // Función para mezclar un arreglo (en este caso, las preguntas)
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
