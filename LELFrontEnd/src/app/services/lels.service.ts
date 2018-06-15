import { Injectable } from '@angular/core';
import { LEL } from '../BEs/lel';
import { Simbolo } from '../BEs/simbolo';
import { Categoria } from '../types/categorias';
import { Impacto } from '../BEs/impacto';

@Injectable()
export class LELsService {


  private _impactos: Impacto[] = [
    {
      id: 1, descripcion: 'Un Impacto', simbolos: null
    }
  ];

  private _simbolos: Simbolo[] = [
    {
      id: 1, nocion: 'Una noción', impactos: this._impactos, categoria: Categoria.objeto, peso: 1
    }
  ];

  private _lels: LEL[] = [
    {id: 1, titulo: 'Sistema de Seguros', descripcion: 'LEL de Prueba',
      simbolos: this._simbolos,
    }
  ];

  constructor() { }

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
