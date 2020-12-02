import {
  CLEAN_SINGLE_CHARACTER,
  REQUEST_CHARACTERS,
  REQUEST_SINGLE_CHARACTER,
  SET_CURRENT_PAGE,
  SET_SEARCH_TEXT,
} from './constants';

export const getCharacters = (page: number, searchText: string) => ({
  type: REQUEST_CHARACTERS,
  page,
  searchText,
});

export const getSingleCharacter = (id: number) => ({
  type: REQUEST_SINGLE_CHARACTER,
  id,
});

export const cleanSingleCharacter = () => ({
  type: CLEAN_SINGLE_CHARACTER,
});

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setSearchText = (searchText: string) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});
