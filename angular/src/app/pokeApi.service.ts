import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../environments/environment';

const BASEURL: string = environment.pokeApiUrl + 'pokemon';

@Injectable({
  providedIn: 'root'
})


export class PokeApiService {
  
  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<any>(`${BASEURL}`)
  }

  getPokemonDetails(id:string){
    return this.http.get<any>(`${BASEURL}/id`)
  }

}
