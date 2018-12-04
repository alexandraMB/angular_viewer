import { Component, OnInit } from '@angular/core';
import * as OLSAutocomplete from 'node_modules/ols-autocomplete';

@Component({
  selector: 'app-search-tree',
  templateUrl: './search-tree.component.html',
  styleUrls: ['./search-tree.component.css',
               '../../../node_modules/ols-autocomplete/css/ols.css',
    '../../../node_modules/ols-autocomplete/css/ols-colors.css',
    '../../../node_modules/typeahead/style.css'
  ]
})
export class SearchTreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const opt = {
      action: function (relativePath, suggestion_ontology, type, iri, data) {
        alert('The behavior after clicking on a suggestion has been overwritten! Check the console for more information');
        console.log('In overwritten function');
        console.log('Relative Path: ' + relativePath);
        console.log('Suggested Ontology: ' + suggestion_ontology);
        console.log('Type (optional): ' + type);
        console.log('iri (optional): ' + iri);
        console.log('Whole data element (optional+new): ');
        console.log(data);
      }
    };
    const a = new OLSAutocomplete();
    a.start(opt);

  }
}
