import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  rates: any = {};
  filteredRates: any = {};
  searchTerm: string = '';
  cantidadDolares: number = 0;
  total: number = 0;
  

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates('USD').subscribe(
      (data: any) => {
        this.rates = data.conversion_rates;
        this.filteredRates = { ...this.rates };
      },
      error => {
        console.error('Error al obtener las tasas de cambio:', error);
      }
    );
  }

  filterItems(event: any) {
    const value = (event.target as HTMLInputElement).value.toUpperCase();
    this.searchTerm = value;
    this.filteredRates = this.filterByTerm(this.rates, this.searchTerm);
  }

  filterByTerm(data: any, term: string) {
    return Object.keys(data).reduce((filtered: any, key: string) => {
      if (key.toLowerCase().includes(term.toLowerCase())) {
        filtered[key] = data[key];
      }
      return filtered;
    }, {});
  }

  calcularTotal() {
    if (this.cantidadDolares && this.filteredRates[this.searchTerm]) {
      this.total = this.cantidadDolares * this.filteredRates[this.searchTerm];
    } else {
      console.error('Por favor ingresa la cantidad de dólares y selecciona un país.');
    }
  }
}
