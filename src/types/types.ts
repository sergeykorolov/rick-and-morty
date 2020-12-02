export type PageInfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginType;
  location: LocationType;
  image: string;
  episode: Array<EpisodeType>;
};

export type LocationType = {
  name: string;
  url: string;
};

export type OriginType = {
  name: string;
  url: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
};
