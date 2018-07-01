import { Injectable } from '@angular/core';
import { Simbolo } from '../BEs/simbolo';
import { Categoria } from '../types/categorias';
import { ImpactosService } from './impactos.service';

@Injectable()
export class SimbolosService {

  private _simbolos: Simbolo[] = [
    {
      id: 1, nombre: 'Cliente', nocion: 'Persona que contrata una Póliza',
      impactos: this._impactosSrv.GetAll(), categoria: Categoria.Sujeto, peso: 3
    },
    {
      id: 2, nombre: 'Póliza', nocion: 'Contrato entre una Aseguradora y un Cliente',
      impactos: this._impactosSrv.GetAll(), categoria: Categoria.Objeto, peso: 4
    }
  ];

  constructor(private _impactosSrv: ImpactosService) { }

  GetAll(): Simbolo[] {
    return this._simbolos;
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

  FindbyNombreONocion(searchString: string) {
    return this._simbolos
      .filter(a => (a.nombre + ' ' +
        a.nocion).toLowerCase().indexOf(searchString.toLocaleLowerCase()) >= 0);
  }

}
