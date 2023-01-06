import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/pokeApi.service';
import { PokemonInterface } from '../../pokemon.interface';
import { pokemonDetails } from '../../pokemonDetails.model';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
  pokemon:pokemonDetails = {
    name : '',
    stats : [],
    id : 0,
    imageUrl : '',    
  }
  @Input() pokeName: string;
  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApi.getPokemonDetails(this.pokeName).then((res) => {
      this.pokemon.name = res.name;
      this.pokemon.imageUrl = res.sprites.other.home.front_default;
      console.log(res);
      this.pokemon.id = res.id;
      this.pokemon.stats = res.stats;
    });
  }
}
