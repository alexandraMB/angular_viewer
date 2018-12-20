import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../models/link';

@Component({
  selector: '[app-link-tag]',
  templateUrl: './link-tag.component.html',
  styleUrls: ['./link-tag.component.css']
})
export class LinkTagComponent{
    @Input('app-link-tag') link: Link;
}
