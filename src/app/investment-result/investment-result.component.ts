import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {


  constructor(public investmentService:InvestmentService){}

  results =  this.investmentService.resultsData.asReadonly();

}
