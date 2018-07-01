import { Injectable } from '@angular/core';
import { Impacto } from '../BEs/impacto';

@Injectable()
export class ImpactosService {

  private _impactos: Impacto[] = [
    {
      id: 1, descripcion: 'El Cliente Contrata una Póliza', simbolos: null
    }
  ];

  constructor() { }

  GetAll(): Impacto[] {
    return this._impactos;
  }

  Get(id: number): Impacto {
    const index = this._impactos.findIndex((a) => a.id === id);
    if (index < 0) {
      return null;
    }
    return this._impactos[index];
  }

  Add(impacto: Impacto): number {
    impacto.id = new Date().valueOf(); // "unique" id
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
      this._impactos[index] = impacto;
    } else {
      throw new Error('Impacto inexistente');
    }
  }

  FindbyDescripcion(searchString: string) {
    return this._impactos
      .filter(a => (a.descripcion)
        .toLowerCase().indexOf(searchString.toLocaleLowerCase()) >= 0);
  }


}
