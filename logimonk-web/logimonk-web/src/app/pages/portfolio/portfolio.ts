import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  protected readonly cases = [
    { stat: '−70%', label: 'processing time', client: 'Northwind Capital', text: 'Cut invoice processing from days to minutes with document AI.' },
    { stat: '3×', label: 'faster triage', client: 'Helix Health', text: 'Automated patient intake with a guarded agent.' },
    { stat: '+42%', label: 'conversion', client: 'Lumina Retail', text: 'Launched a copilot that lifts basket size.' },
  ];
}
