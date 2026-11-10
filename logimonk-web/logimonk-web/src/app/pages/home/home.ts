import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly features = [
    { title: 'Strategy & discovery', text: 'Tie AI to revenue and cost with workshops that find the highest-value use cases.' },
    { title: 'Engineering that ships', text: 'Senior squads deliver production-grade models, agents and platforms, not just prototypes.' },
    { title: 'Secure by design', text: 'Observable, enterprise-ready deployments with guardrails built in.' },
  ];
}
