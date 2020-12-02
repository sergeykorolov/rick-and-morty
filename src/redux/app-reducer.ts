import { SET_CURRENT_PAGE, SET_SEARCH_TEXT } from './constants';

const initialState = {
  currentPage: 1,
  searchText: '',
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
};

export default appReducer;
