export type ApiFunctions = {
  films?: string;
  people?: string;
  planets?: string;
  species?: string;
  starships?: string;
  vehicles?: string;
};

export type People = {
  name: string;
  height: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  mass: string;
}[];

export type Films = {
  title: string;
  opening_crawl: string;
  release_date: string;
  producer: string;
  url: string;
  episode_id: number;
  director: string;
}[];

export type Planets = {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  population: string;
  terrain: string;
}[];

export type Species = {
  name: string;
  hair_colors: string;
  eye_colors: string;
  classification: string;
  average_height: string;
  average_lifespan: string;
}[];

export type Starships = {
  name: string;
  model: string;
  passengers: string;
  crew: string;
  consumables: string;
  cargo_capacity: string;
  mglt: string;
}[];

export type Vehicles = {
  name: string;
  passengers: string;
  crew: string;
  length: string;
  consumables: string;
  cargo_capacity: string;
}[];

export enum StarWarsType {
  People = "People",
  Films = "Films",
  Planets = "Planets",
  Species = "Species",
  Starships = "Starships",
  Vehicles = "Vehicles",
}
