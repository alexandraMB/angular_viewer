import { RouterModule, Routes } from '@angular/router';
import { TermSearchContainerComponent } from './term-search-container/term-search-container.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TermSearchContainerComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes, {});
