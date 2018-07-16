import { id } from '@swimlane/ngx-graph/src/utils/id';
import * as tasks from './data/turbine.json';

export const countries = [
  'Asegurado', 'Productor', 'Bien', 'Cobertura', 'Suma Asegurada',
  'Comisión', 'Prima', 'Cuota', 'Vigencia', 'Facturar',
  'Pagar', 'Cobrar', 'Endosar', 'Renovar', 'Contratar',
  'Cotizar', 'Anular', 'Habilitar', 'Abrir', 'Cerrar'
];

export function generateGraph(nodeCount: number) {
  const nodes = [];
  const links = [];
  for (let i = 0; i < nodeCount; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    nodes.push({
      id: id(),
      value: country,
    });
    for (let j = 0; j < nodes.length - 1; j++) {
      if (Math.random() < 0.03) {
        links.push({
          source: nodes[i].id,
          target: nodes[j].id,
        });
      }
    }
  }
  return { links, nodes };
}

export function generateHierarchialGraph() {
  const nodes = [{
    id: 'start',
    label: 'start'
  }, {
    id: '1',
    label: 'Query ThreatConnect',
    rank: 'first'
  }, {
    id: '2',
    label: 'Query XForce',
    rank: 'first'
  }, {
    id: '3',
    label: 'Format Results'
  }, {
    id: '4',
    label: 'Search Splunk'
  }, {
    id: '5',
    label: 'Block LDAP'
  }, {
    id: '6',
    label: 'Email Results'
  }];

  const links = [{
    source: 'start',
    target: '1'
  }, {
    source: 'start',
    target: '2'
  }, {
    source: '1',
    target: '3'
  }, {
    source: '2',
    target: '4'
  }, {
    source: '2',
    target: '6'
  }, {
    source: '3',
    target: '5'
  }];

  return { links, nodes };
}

export function getTurbineData() {
  const nodes = [];
  const links = [];

  // tslint:disable-next-line:forin
  for (const key in (<any>tasks).tasks) {
    const node = (<any>tasks).tasks[key];
    node.id = id();
    node.label = key;

    nodes.push(node);
  }

  for (const node of nodes) {
    if (node['on-success']) {
      for (const label of node['on-success']) {
        const target = nodes.find(n => n.label === label);

        links.push({
          source: node.id,
          target: target.id,
          label: 'on success'
        });
      }
    }

    if (node['on-error']) {
      for (const label of node['on-error']) {
        const target = nodes.find(n => n.label === label);

        links.push({
          source: node.id,
          target: target.id,
          label: 'on error'
        });
      }
    }
  }

  return {nodes, links};
}
