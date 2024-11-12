import { Serie } from './serie.js';

export const series: Serie[] = [
  { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5 },
  { id: 2, name: "Orange is the New Black", channel: "Netflix", seasons: 7 },
  { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 8 },
  { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12 },
  { id: 5, name: "Stranger Things", channel: "Netflix", seasons: 4 },
  { id: 6, name: "Black Mirror", channel: "Netflix", seasons: 5 }
].map(serie => ({ ...serie }));
