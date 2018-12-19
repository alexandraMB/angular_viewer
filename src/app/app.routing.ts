import { RouterModule, Routes } from '@angular/router';
import { TermExplorerContainerComponent } from './term-explorer-container/term-explorer-container.component';
import {GridContainerComponent} from './grid-container/grid-container.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: GridContainerComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes, {});
