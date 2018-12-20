import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../models/node';
@Component({
  selector: '[app-node-tag]',
  templateUrl: './node-tag.component.html',
  styleUrls: ['./node-tag.component.css']
})
export class NodeTagComponent {
  @Input('app-node-tag') node: Node;
}
