import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly values = [
    { title: 'Outcomes first', text: 'Every engagement starts from a measurable business result.' },
    { title: 'Ship weekly', text: 'Senior squads deliver in weekly increments with evaluation built in.' },
    { title: 'Secure and observable', text: 'Guardrails, monitoring and MLOps from day one.' },
  ];
}
