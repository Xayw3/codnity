export type Episode = {
  info: EpisodeInfo,
  results: EpisodeResult,
};

export type EpisodeInfo = {
  count: number,
  pages: number,
  next: string,
  prev: null,
};

export type EpisodeResult = {
  id: number,
  name: string,
  'air_date': string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
};
