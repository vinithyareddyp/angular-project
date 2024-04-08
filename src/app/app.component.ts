import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StockprojectService } from './services/stockproject.service';
import { StockData } from '../models/stockproject.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,  // Enables common directives
    HttpClientModule,  // Provides HttpClient for the component and its injectable services
  ],
})
export class AppComponent implements OnInit {
  StockData?: StockData;

  constructor(private stockprojectService: StockprojectService) {}

  ngOnInit(): void {
    this.stockprojectService.getStockData('Tesla')
      .subscribe({
        next: (response) => {
          this.StockData = response;
          console.log(response);
        },
      });
  }
} 