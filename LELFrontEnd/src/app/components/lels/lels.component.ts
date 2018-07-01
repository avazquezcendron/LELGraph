import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { LELsService } from '../../services/lels.service';
import { LEL } from '../../BEs/lel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lels',
  templateUrl: './lels.component.html',
  styleUrls: ['./lels.component.css']
})
export class LelsComponent implements OnInit {

  lels: LEL[];

  dataSource: MatTableDataSource<LEL>;
  displayedColumns = ['titulo', 'descripcion', 'acciones'];

  constructor(public LELSrv: LELsService,
    private _router: Router) { }

  ngOnInit() {
    this.lels = this.LELSrv.GetAll();
    this.dataSource = new MatTableDataSource(this.lels);
  }

  Filtrar(filtro: string) {
    this.lels = this.LELSrv.FindbyTituloODesc(filtro);
    this.dataSource = new MatTableDataSource(this.lels);
  }

  EditarLEL(lel: LEL) {
    this._router.navigate(['/lel-edit', 'editar', lel.id]);
  }

  Agregar() {
    this._router.navigate(['/lel-edit', 'agregar', 0]);
  }

  EliminarLEL(lel: LEL) {
    this.LELSrv.Delete(lel.id);
    this.dataSource = new MatTableDataSource(this.lels);
  }

}
