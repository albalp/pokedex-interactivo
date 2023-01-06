import { Component, OnInit } from '@angular/core';

import {PokeApiService} from '../../pokeApi.service';
import { PokemonInterface } from '../../pokemon.interface';
import { pokemonDetails } from '../../pokemonDetails.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pokes: PokemonInterface[];
  pokemonDetails:pokemonDetails[] = [];
  pokeNames:string[] = [];

  constructor(private pokeApi: PokeApiService) { }
  
  ngOnInit(): void {
    this.pokeApi.getPokemon().then(
      (res) => {
        this.pokes = res.results
        console.log(res)

      }
    ).catch((err) => {
      console.log(err);
    }).finally(() =>{
      this.pokeNames = this.pokes.map((poke)=>{
        console.log(poke.name)
        return poke.name;
      })
    });

  }

}
