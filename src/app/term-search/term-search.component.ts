import {ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as OLSAutocomplete from 'node_modules/ols-autocomplete';

@Component({
  selector: 'app-term-search',
  templateUrl: './term-search.component.html',
  styleUrls: ['./term-search.component.css']
})
export class TermSearchComponent implements OnInit {

  @Input() searchTerm: string;
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
        handleChanges(iri, data);
      }};
    instance.start(options);
  }

  changeTerm(event: any) {
    this.onSearchTermChange.emit(event.target.value);
  }
}

