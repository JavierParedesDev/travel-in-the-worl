import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.page.html',
  styleUrls: ['./loading-page.page.scss'],
})
export class LoadingPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Después de 2 segundos, redirigir a la página de tabs
    setTimeout(() => {
      this.router.navigate(['/tabs']);
    }, 2000); // Cambia este valor según lo que consideres un tiempo adecuado
  }
}
