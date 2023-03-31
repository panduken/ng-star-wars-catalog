export interface FilmsEntity {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: any[];
  planets: any[];
  starships: any[];
  vehicles: any[];
  species: any[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmsResponse {
  count: number;
  next: string;
  previous: string;
  results: FilmsEntity[];
}
