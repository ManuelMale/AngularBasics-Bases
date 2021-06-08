import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }
}

//El servicio es una clase abstracta en la cual vamos a colocar la información y los metodos para interactuar con fuentes externas y el estado de nuestra app (Como al trabajar con las HTTP)