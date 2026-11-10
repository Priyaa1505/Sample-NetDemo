import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home').then(m => m.Home), title: 'LogiMonk · AI-powered software' },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services), title: 'Services · LogiMonk' },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio), title: 'Portfolio · LogiMonk' },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About), title: 'About · LogiMonk' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact), title: 'Contact · LogiMonk' },
  { path: '**', redirectTo: '' },
];
