import { Injectable } from '@angular/core';
import { Simbolo } from '../BEs/simbolo';
import { Categoria } from '../types/categorias';
import { ImpactosService } from './impactos.service';

@Injectable()
export class SimbolosService {

  private _simbolos: Simbolo[] = [
    {
      id: 1, lelId: 1, nombre: 'Cliente', nocion: 'Persona que contrata una Póliza',
      categoria: Categoria.Sujeto, peso: 3
    },
    {
      id: 2, lelId: 1, nombre: 'Póliza', nocion: 'Contrato entre una Aseguradora y un Cliente',
      categoria: Categoria.Objeto, peso: 4
    },
    {
      id: 3, lelId: 1, nombre: 'Bróker',
      nocion: `Intermediario entre el cliente y la aseguradora.
      El bróker puede desempeñar el rol del productor`,
      categoria: Categoria.Sujeto, peso: 4
    },
    {
      id: 4, lelId: 1, nombre: 'Aseguradora',
      nocion: `Compañía que define las condiciones de una póliza
      y paga ante un siniestro.`,
      categoria: Categoria.Sujeto, peso: 3
    }
  ];

  constructor(private _impactosSrv: ImpactosService) { }

  GetAll(lelId: number): Simbolo[] {
    return this._simbolos.filter(a => a.lelId === lelId);
  }

  Get(id: number): Simbolo {
    const index = this._simbolos.findIndex((a) => a.id === id);
    if (index < 0) {
      return null;
    }
    return this._simbolos[index];
  }

  Add(simbolo: Simbolo): number {
    simbolo.id = new Date().valueOf(); // "unique" id
    this._simbolos.push(simbolo);
    return simbolo.id;
  }

  Delete(id: number): void {
    const index = this._simbolos.findIndex((a) => a.id === id);
    this._simbolos.splice(index, 1);
  }

  Update(simbolo: Simbolo) {
    const index = this._simbolos.findIndex((a) => a.id === simbolo.id);
    if (index >= 0) {
      this._simbolos[index] = simbolo;
    } else {
      throw new Error('Simbolo inexistente');
    }
  }

  FindbyNombreONocion(lelId: number, searchString: string) {
    return this.GetAll(lelId)
      .filter(a => (a.nombre + ' ' +
        a.nocion).toLowerCase().indexOf(searchString.toLocaleLowerCase()) >= 0);
  }

}
