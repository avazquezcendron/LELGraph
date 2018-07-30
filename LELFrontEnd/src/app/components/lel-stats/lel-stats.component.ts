import { Component, OnInit } from '@angular/core';
import APP_CONFIG from '../../app.config';
import { Node, Link } from '../lel-graph/d3';
import { SimbolosService } from '../../services/simbolos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lel-stats',
  template: ` <mat-card>
                <app-lel-graph [nodes]="nodes" [links]="links"></app-lel-graph>
                <mat-card-actions>
                  <button mat-raised-button color="primary" class="btn btn-default" (click)="Regresar()">
                    Volver
                  </button>
                </mat-card-actions>
              </mat-card>`
})
export class LelStatsComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(private _router: Router,
    private _activeRoute: ActivatedRoute, private _simbolosSrv: SimbolosService) { }

  ngOnInit() {
    const id = Number(this._activeRoute.snapshot.paramMap.get('id'));
    const simbolos = this._simbolosSrv.GetAll(id);

    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    simbolos.forEach(simbolo => {
      this.nodes.push(new Node(simbolo.id, simbolo.nombre, simbolos.length));
    });

    /** constructing the nodes array */
    // for (let i = 1; i <= N; i++) {
    //   this.nodes.push(new Node(i));
    // }

    for (let i = 1; i <= simbolos.length; i++) {
      for (let m = 2; i * m <= simbolos.length; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

  Regresar() {
    this._router.navigate(['/lels']);
  }
}
