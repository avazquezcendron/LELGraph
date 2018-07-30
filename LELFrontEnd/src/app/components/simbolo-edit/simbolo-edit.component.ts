import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Impacto } from '../../BEs/impacto';
import { Simbolo } from '../../BEs/simbolo';
import { ImpactosService } from '../../services/impactos.service';
import { SimbolosService } from '../../services/simbolos.service';
import { Categoria } from '../../types/categorias';
import { LELsService } from '../../services/lels.service';

@Component({
  selector: 'app-simbolo-edit',
  templateUrl: './simbolo-edit.component.html',
  styleUrls: ['./simbolo-edit.component.css']
})
export class SimboloEditComponent implements OnInit {

  dataSource: MatTableDataSource<Impacto>;
  displayedColumns = ['descripcion'];
  simboloSeleccionado: Simbolo;

  constructor(private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _lelSrv: LELsService,
    private _simboloSrv: SimbolosService,
    private _impactoSrv: ImpactosService
  ) {}

  ngOnInit() {
    const operacion = this._activeRoute.snapshot.paramMap.get('sbOp');
    const id = Number(this._activeRoute.snapshot.paramMap.get('sbId'));
    const lelId = Number(this._activeRoute.snapshot.paramMap.get('id'));

    if (operacion === 'agregar') {
      this.simboloSeleccionado = new Simbolo(0, lelId, '', Categoria.Sujeto, '', 1);
    } else {
      this.simboloSeleccionado = this._simboloSrv.Get(id);
    }
    this.dataSource = new MatTableDataSource(this._impactoSrv.GetAll(this.simboloSeleccionado.id));
  }

  Regresar() {
    const lelId = Number(this._activeRoute.snapshot.paramMap.get('id'));
    this._router.navigate(['/lels', lelId, 'editar' ]);
  }

  Guardar(form: any) {
    Object.keys(form).forEach((key, index) =>
      this.simboloSeleccionado[key] = form[key]
    );
    if (this.simboloSeleccionado.id === 0) {
      this._simboloSrv.Add(this.simboloSeleccionado);
    } else {
      this._simboloSrv.Update(this.simboloSeleccionado);
    }
    this.Regresar();
  }

  Filtrar(filtro: string) {
    this.dataSource = new MatTableDataSource(this._impactoSrv.FindbyDescripcion(this.simboloSeleccionado.id, filtro));
  }

  EditarImpacto(impacto: Impacto) {

  }

  AgregarImpacto() {

  }

  EliminarImpacto(impacto: Impacto) {
    this._impactoSrv.Delete(impacto.id);
    this.dataSource = new MatTableDataSource(this._impactoSrv.GetAll(this.simboloSeleccionado.id));
  }

  convert(cat: string) {
    return Categoria[cat];
  }

}
