import { Simbolo } from './simbolo';

export class Impacto {
  constructor(
    public id: number,
    public descripcion: string,
    public simbolos: Simbolo[]
  ) {}
}
