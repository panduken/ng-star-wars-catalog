import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FilmsEntity, FilmsResponse } from 'src/app/+state/films/films.models';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private httpClient = inject(HttpClient);

  private FILMS = 'https://swapi.dev/api/films';

  films$ = this.httpClient.get<FilmsResponse>(`${this.FILMS}`).pipe(
    map((response: FilmsResponse) => {
      return response.results as FilmsEntity[];
    })
  );
}
