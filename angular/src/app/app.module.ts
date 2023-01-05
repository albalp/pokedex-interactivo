import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './Cards/cards.component';
import { HeaderComponent } from './header/header.component'
import { PokeApiService } from './pokeApi.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
