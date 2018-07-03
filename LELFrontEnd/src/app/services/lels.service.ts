import { Injectable } from '@angular/core';
import { LEL } from '../BEs/lel';
import { SimbolosService } from './simbolos.service';

@Injectable()
export class LELsService {

  private _lels: LEL[] = [
    {
      id: 1, titulo: 'Sistema de Seguros', descripcion: 'LEL de Prueba'
    }
  ];

  constructor(private _simbolosSrv: SimbolosService) { }

  GetAll(): LEL[] {
    return this._lels;
  }

  Get(id: number): LEL {
    const index = this._lels.findIndex((a) => a.id === id);
    if (index < 0) {
      return null;
    }
    return this._lels[index];
  }

  Add(lel: LEL): number {
    lel.id = new Date().valueOf(); // "unique" id
    this._lels.push(lel);
    return lel.id;
  }

  Delete(id: number): void {
    const index = this._lels.findIndex((a) => a.id === id);
    this._lels.splice(index, 1);
  }

  Update(lel: LEL) {
    const index = this._lels.findIndex((a) => a.id === lel.id);
    if (index >= 0) {
      this._lels[index] = lel;
    } else {
      throw new Error('lel inexistente');
    }
  }

  FindbyTituloODesc(searchString: string) {
    return this._lels
      .filter(a => (a.titulo + ' ' +
        a.descripcion).toLowerCase().indexOf(searchString.toLocaleLowerCase()) >= 0);
  }

}
