import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { FilmsEffects } from './+state/films/films.effects';
import { StoreModule } from '@ngrx/store';
import { filmsReducer } from './+state/films/films.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ films: filmsReducer }),
    EffectsModule.forRoot([FilmsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppModule {}
