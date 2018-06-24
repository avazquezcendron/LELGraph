import { Impacto } from './impacto';
import { Categoria } from '../types/categorias';

export class Simbolo {
  constructor(
    public id: number,
    public nombre: string,
    public categoria: Categoria,
    public nocion: string,
    public impactos: Impacto[],
    public peso: number
  ) {}
}
