import {ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as OLSAutocomplete from 'node_modules/ols-autocomplete';
// import {Select, Store} from "@ngxs/store";
// import {SetSearchTerm, TermsState, TermsStateModel} from "../store-try/customStore.js";
// import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-term-search',
  templateUrl: './term-search.component.html',
  styleUrls: ['./term-search.component.css']
})
export class TermSearchComponent implements OnInit {

  @Input() searchTerm: string;
  // @Input() onSearchTermChange;
  @Output() onSearchTermChange: EventEmitter<any> = new EventEmitter();
  @Output() selectTermFromDropDown: EventEmitter<any> = new EventEmitter();
  @Output() onUberonIriChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    const instance = new OLSAutocomplete();
    const handleChanges = (iri: string, data: any) => {
       this.selectTermFromDropDown.emit(data.label);
       this.onUberonIriChange.emit(iri);
    };
    const options = { action : function(relativePath, suggestionOntology, type, iri, data) {
        console.log('In overwritten function');
        console.log('Relative Path: ' + relativePath);
        console.log('Suggested Ontology: ' + suggestionOntology);
        console.log('Type (optional): ' + type);
        console.log('iri (optional): ' + iri);
        handleChanges(iri, data);
      }};
    instance.start(options);

  }

  changeTerm(event: any) {
    this.onSearchTermChange.emit(event.target.value);
  }
}

