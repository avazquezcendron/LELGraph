import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LEL } from '../../BEs/lel';
import { Simbolo } from '../../BEs/simbolo';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { LELsService } from '../../services/lels.service';
import { SimbolosService } from '../../services/simbolos.service';
import { Categoria } from '../../types/categorias';

@Component({
  selector: 'app-lel-edit',
  templateUrl: './lel-edit.component.html',
  styleUrls: ['./lel-edit.component.css']
})
export class LelEditComponent implements OnInit {

  dataSource: MatTableDataSource<Simbolo>;
  displayedColumns = ['nombre', 'categoria', 'nocion', 'peso', 'acciones'];
  lelSeleccionado: LEL;

  constructor(private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _lelSrv: LELsService,
    private _simboloSrv: SimbolosService
  ) {}

  ngOnInit() {
    const operacion = this._activeRoute.snapshot.paramMap.get('operacion');
    const id = Number(this._activeRoute.snapshot.paramMap.get('id'));

    if (operacion === 'agregar') {
      this.lelSeleccionado = new LEL(0, '', '');
    } else {
      this.lelSeleccionado = this._lelSrv.Get(id);
    }
    this.dataSource = new MatTableDataSource(this._simboloSrv.GetAll(this.lelSeleccionado.id));
  }

  Regresar() {
    this._router.navigate(['/lels']);
  }

  Guardar(form: any) {
    Object.keys(form).forEach((key, index) =>
      this.lelSeleccionado[key] = form[key]
    );
    if (this.lelSeleccionado.id === 0) {
      this._lelSrv.Add(this.lelSeleccionado);
    } else {
      this._lelSrv.Update(this.lelSeleccionado);
    }
    this.Regresar();
  }

  Filtrar(filtro: string) {
    this.dataSource = new MatTableDataSource(this._simboloSrv.FindbyNombreONocion(this.lelSeleccionado.id, filtro));
  }

  EditarSimbolo(simbolo: Simbolo) {
    this._router.navigate(['/simbolo-edit', 'editar', this.lelSeleccionado.id, simbolo.id]);
  }

  AgregarSimbolo() {
    this._router.navigate(['/simbolo-edit', 'agregar', this.lelSeleccionado.id, 0]);
  }

  EliminarSimbolo(simbolo: Simbolo) {
    this._simboloSrv.Delete(simbolo.id);
    this.dataSource = new MatTableDataSource(this._simboloSrv.GetAll(this.lelSeleccionado.id));
  }

  convert(cat: string) {
    return Categoria[cat];
  }

}
