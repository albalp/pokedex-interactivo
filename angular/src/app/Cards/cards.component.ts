import { Component, OnInit } from '@angular/core';

import {PokeApiService} from '../pokeApi.service';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  arr = [1, 2, 3, 4];
  pokes: PokemonInterface[];

  constructor(private pokeApi: PokeApiService) { }
  

  ngOnInit(): void {
    
    this.pokeApi.getPokemon().subscribe(
      (res) => {
        this.pokes = res.results
      }
    );

  }

}
