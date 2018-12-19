import {Component, OnInit, Input, Output, ViewChild, ElementRef, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import * as OLSTree from 'node_modules/ols-treeview';
import $ from 'node_modules/jquery';
@Component({
  selector: 'app-term-tree',
  templateUrl: './term-tree.component.html',
  styleUrls: ['./term-tree.component.css']
})
export class TermTreeComponent implements OnInit, OnChanges {
  @Input() uberonIri: string;
  @Output() selectTermInTree: EventEmitter<any> = new EventEmitter();

  @ViewChild('treeDiv') treeDiv: ElementRef;
  $treeDiv: any;

  instance: OLSTree ;
  options: {};
  constructor() {
    this.instance = new OLSTree();
  }

  ngOnInit() {
    this.$treeDiv = $(this.treeDiv.nativeElement);
    const handleChanges = (node) => {
       this.selectTermInTree.emit({term: node.node.original.text, iri: node.node.original.iri});
    };

    this.options = {
      onclick(params, node) {
        handleChanges(node);
      },
    };

    this.instance.draw(
      this.$treeDiv,
      false,
      'uberon',
      'terms',
      this.uberonIri,
      'https://www.ebi.ac.uk/ols/',
      this.options
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.uberonIri.isFirstChange()) {
      this.instance.draw(
        this.$treeDiv,
        false,
        'uberon',
        'terms',
        changes.uberonIri.currentValue,
        'https://www.ebi.ac.uk/ols',
        this.options
      );
    }
  }
}
