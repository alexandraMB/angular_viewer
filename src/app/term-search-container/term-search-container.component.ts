import {Component, OnInit, Input, Output, ChangeDetectorRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {SetSearchTerm, SetUberonIri, SetUberonTerm, TermsState, TermsStateModel} from '../store/customStore.js';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-term-search-container',
  templateUrl: './term-search-container.component.html',
  styleUrls: ['./term-search-container.component.css']
})
export class TermSearchContainerComponent implements OnInit {
  @Select(TermsState) searchTerm$: Observable<TermsStateModel>;
  state: TermsStateModel;
  storeSub: Subscription;

  constructor(private store: Store, private changeDetRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.storeSub = this.searchTerm$.subscribe((state: TermsStateModel) => {
      this.state = {...state};
      this.changeDetRef.detectChanges();
    });
  }

  onSearchTermChange(term: string) {
    this.store.dispatch(new SetSearchTerm(term));
  }
  selectTermFromDropDown(data: string) {
    const pureTerm = data.replace(/<\/?b>/g, '');
    this.store.dispatch(new SetUberonTerm(pureTerm));
    this.store.dispatch(new SetSearchTerm(pureTerm));
  }
  onUberonIriChange(iri: string) {
    this.store.dispatch(new SetUberonIri(iri));
  }

  selectTermInTree(object: any) {
    this.store.dispatch(new SetUberonTerm(object.term));
    this.store.dispatch(new SetUberonIri(object.iri));
  }

}
