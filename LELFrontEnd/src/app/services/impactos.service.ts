import { Injectable } from '@angular/core';
import { Impacto } from '../BEs/impacto';
import { SimbolosService } from './simbolos.service';

@Injectable()
export class ImpactosService {

  private _impactos: Impacto[] = [
    {
      id: 1, descripcion: 'El Cliente Contrata una Póliza', simbolos: [1, 2]
    }
  ];

  constructor(private _simbolosSrv: SimbolosService) { }

  GetAll(simboloId: number): Impacto[] {
    return this._impactos.filter(a => (a.simbolos.includes(simboloId)));
  }

  Get(id: number): Impacto {
    const index = this._impactos.findIndex((a) => a.id === id);
    if (index < 0) {
      return null;
    }
    return this._impactos[index];
  }

  private procesarSimbolos(texto: string): number[] {
    const result = [];
    const me = this;
    texto.split(' ').forEach(function (value) {
      const simbolo = me._simbolosSrv.GetByNombre(value);
      if (simbolo != null) {
        result.push(simbolo.id);
      }
    });
    return result;
  }

  Add(impacto: Impacto): number {
    impacto.id = new Date().valueOf(); // "unique" id
    impacto.simbolos = this.procesarSimbolos(impacto.descripcion);
    this._impactos.push(impacto);
    return impacto.id;
  }

  Delete(id: number): void {
    const index = this._impactos.findIndex((a) => a.id === id);
    this._impactos.splice(index, 1);
  }

  Update(impacto: Impacto) {
    const index = this._impactos.findIndex((a) => a.id === impacto.id);
    if (index >= 0) {
      impacto.simbolos = this.procesarSimbolos(impacto.descripcion);
      this._impactos[index] = impacto;
    } else {
      throw new Error('Impacto inexistente');
    }
  }

  FindbyDescripcion(simboloId, searchString: string) {
    return this.GetAll(simboloId)
      .filter(a => (a.descripcion)
        .toLowerCase().indexOf(searchString.toLocaleLowerCase()) >= 0);
  }


}
