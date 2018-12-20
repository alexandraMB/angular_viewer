import {SimulationNodeDatum} from 'd3-force';


export class Node implements SimulationNodeDatum {
  index?: number;
  name?: string;
  x?: number;
  y?: number;
  fx?: number | null;

  id: string;

  constructor(id, name) {
    this.id = id;
    this.name = name;

  }


  get color() {
    return 'rgb(135,206,250)';
  }
  get radius() {
    return 25;
  }

}
