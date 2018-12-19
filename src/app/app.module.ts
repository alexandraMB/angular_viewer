import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { TermSearchComponent } from './term-search/term-search.component';
import { TermExplorerContainerComponent } from './term-explorer-container/term-explorer-container.component';

import {NgxsModule} from '@ngxs/store';
import {TermsState} from './store/customStore.js';
import { TermExplorerCardComponent } from './term-explorer-card/term-explorer-card.component';
import { TermTreeComponent } from './term-tree/term-tree.component';
import { LongitudinalViewerComponent } from './longitudinal-viewer/longitudinal-viewer.component';
import { PlotlyModule} from 'angular-plotly.js';

import { GridContainerComponent } from './grid-container/grid-container.component';
import { BelViewerCardComponent } from './bel-viewer-card/bel-viewer-card.component';
import { BrainConnectivityViewerCardComponent } from './brain-connectivity-viewer-card/brain-connectivity-viewer-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TermSearchComponent,
    TermExplorerContainerComponent,
    TermExplorerCardComponent,
    TermTreeComponent,
    LongitudinalViewerComponent,
    GridContainerComponent,
    BelViewerCardComponent,
    BrainConnectivityViewerCardComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    NgbModule,
    NgxsModule.forRoot([
      TermsState
    ]),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
