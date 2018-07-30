import APP_CONFIG from '../../../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: number;
  name: string;
  content?: any;
  linkCount = 0;
  graphSize = 1;

  constructor(id: number, name: string, graphSize: number, content?: any) {
    this.id = id;
    this.name = name;
    this.graphSize = graphSize;
    this.content = content;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / this.graphSize);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (10 * this.normal() + 10) + 'px';
  }

  get color() {
    const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}
