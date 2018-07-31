import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Impacto } from '../../BEs/impacto';
import { ImpactosService } from '../../services/impactos.service';

@Component({
  selector: 'app-impacto-edit',
  templateUrl: './impacto-edit.component.html',
  styleUrls: ['./impacto-edit.component.css']
})
export class ImpactoEditComponent implements OnInit {

  impactoSeleccionado: Impacto;

  constructor(private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _impactoSrv: ImpactosService
  ) { }

  ngOnInit() {
    const operacion = this._activeRoute.snapshot.paramMap.get('sbOp');
    const id = Number(this._activeRoute.snapshot.paramMap.get('sbId'));
    const lelId = Number(this._activeRoute.snapshot.paramMap.get('id'));

    if (operacion === 'agregar') {
      this.impactoSeleccionado = new Impacto(0, '', []);
    } else {
      this.impactoSeleccionado = this._impactoSrv.Get(id);
    }
  }

  Regresar() {
    const lelId = Number(this._activeRoute.snapshot.paramMap.get('id'));
    this._router.navigate(['/lels', lelId, 'editar' ]);
  }

  Guardar(form: any) {
    Object.keys(form).forEach((key, index) =>
      this.impactoSeleccionado[key] = form[key]
    );
    if (this.impactoSeleccionado.id === 0) {
      this._impactoSrv.Add(this.impactoSeleccionado);
    } else {
      this._impactoSrv.Update(this.impactoSeleccionado);
    }
    this.Regresar();
  }

}
