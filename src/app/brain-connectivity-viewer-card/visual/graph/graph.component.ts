import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {Link} from '../../models/link';
import {Node} from '../../models/node';
import * as d3 from 'd3';
import $ from 'node_modules/jquery';

const FORCES = {
  LINKS: 1 / 50,
  COLLIDE_STRENGTH: 1,
  CHARGE: -1700
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('container') containerElem: ElementRef;
  @ViewChild('svg') svgElem: ElementRef;

  @Input() nodes: Node[] = [];
  @Input() links: Link[] = [];

  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;

  public options: { width, height } = { width: 850, height: 600 };

  constructor( private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.initSimulation();
    this.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  initSimulation() {
    // simulation variables
    const ticker = this.ticker;
    if(!this.simulation){
       this.simulation = d3.forceSimulation()
        .force('collide', d3.forceCollide().strength(FORCES.COLLIDE_STRENGTH).radius(d => d['r'] + 5).iterations(2))
        .force('charge', d3.forceManyBody().strength(FORCES.CHARGE))
        .force('centers', d3.forceCenter(this.options.width / 2, this.options.height / 2))
        .force('y', d3.forceY(0))
        .force('x', d3.forceX(0));
      this.simulation.on('tick', function () {
        ticker.emit(this);
      });


      // zoom behaviour
      const svg = d3.select(this.svgElem.nativeElement);
      const container = d3.select(this.containerElem.nativeElement);
      const zoomed = () => {
        const transform = d3.event.transform;
        container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
      };
      const zoom = d3.zoom().on('zoom', zoomed);
      svg.call(zoom);

      this.initNodes();
      this.initLinks();
    }
    this.simulation.restart();
  }

  initNodes(){
    this.simulation.nodes(this.nodes);

  }
  initLinks(){
    this.simulation.force(
      'links', d3.forceLink(this.links)
                        .id(d => d['id'])
                        .strength(FORCES.LINKS));
  }

  ngAfterViewInit() {
    this.initSimulation();
  }
}

