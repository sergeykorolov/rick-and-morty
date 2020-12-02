import {
  CLEAN_SINGLE_CHARACTER,
  FETCH_CHARACTERS,
  FETCH_SINGLE_CHARACTER,
} from './constants';
import { CharacterType, PageInfoType } from '../types/types';

const initialState = {
  pageInfo: {} as PageInfoType,
  characters: [] as Array<CharacterType>,
  character: {} as CharacterType,
};

type InitialStateType = typeof initialState;

const charactersReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload.results,
        pageInfo: action.payload.info,
      };
    case FETCH_SINGLE_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    case CLEAN_SINGLE_CHARACTER:
      return {
        ...state,
        character: { ...state.character, image: '' } as CharacterType,
      };
    default:
      return state;
  }
};

export default charactersReducer;
