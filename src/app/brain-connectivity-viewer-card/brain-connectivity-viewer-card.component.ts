import { Component, OnInit } from '@angular/core';
import {Link} from './models/link';
import {Node} from './models/node';
import * as d3 from 'd3';

@Component({
  selector: 'app-brain-connectivity-viewer-card',
  templateUrl: './brain-connectivity-viewer-card.component.html',
  styleUrls: ['./brain-connectivity-viewer-card.component.css']
})
export class BrainConnectivityViewerCardComponent {

  nodes: Node[] = Array<Node>();
  links: Link[] = Array<Link>();

  results: any;
  flag: boolean;

  constructor() {
    this.flag = false;
    this.getData();
    console.log(this.nodes);

  }

  getData() {
     d3.json('https://docker.codemart.ro/api/external/mozg/connectivity_matrix/0.1').then(data => {
       this.results = data;
       console.log(this.results.links);
       for (const node of this.results.nodes) {
         this.nodes.push(new Node(node.id, node.cname));
       }


        for (const link of this.results.links) {
          this.links.push(new Link(link.source, link.target));
        }
       this.flag = true;
     });
  }

}
