import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../environments/environment';
import { PokemonInterface } from './pokemon.interface';

const BASEURL: string = environment.pokeApiUrl + 'pokemon';

@Injectable({
  providedIn: 'root'
})


export class PokeApiService {
  
  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<any>(`${BASEURL}`).toPromise() as Promise<any>
  }

  getPokemonDetails(id:string){
    return this.http.get<any>(`${BASEURL}/${id}`).toPromise() as Promise<any>
  }

}
