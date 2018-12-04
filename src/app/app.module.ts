import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { SearchTreeComponent } from './search-tree/search-tree.component';
import { TermSearchComponent } from './term-search/term-search.component';
import { TermSearchContainerComponent } from './term-search-container/term-search-container.component';

import {NgxsModule} from '@ngxs/store';
import {TermsState} from './store-try/customStore.js';
import { TermExplorerCardComponent } from './term-explorer-card/term-explorer-card.component';
import { TermTreeComponent } from './term-tree/term-tree.component';
import { LongitudinalViewerComponent } from './longitudinal-viewer/longitudinal-viewer.component';
import { PlotlyModule} from 'angular-plotly.js';

@NgModule({
  declarations: [
    AppComponent,
    SearchTreeComponent,
    TermSearchComponent,
    TermSearchContainerComponent,
    TermExplorerCardComponent,
    TermTreeComponent,
    LongitudinalViewerComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    NgxsModule.forRoot([
      TermsState
    ]),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
