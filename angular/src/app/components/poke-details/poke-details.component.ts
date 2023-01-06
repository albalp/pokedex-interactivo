import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/pokeApi.service';
import { PokemonInterface } from '../../pokemon.interface';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  @Input() pokeNames: string[]
  constructor(private pokeApi: PokeApiService) { }

  ngOnInit(): void {
    for (const name of this.pokeNames) {
    this.pokeApi.getPokemonDetails(name).then((res) =>{
      console.log(res);
    })
    }
  }

}
