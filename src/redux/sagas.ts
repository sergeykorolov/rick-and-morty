import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FETCH_CHARACTERS,
  FETCH_SINGLE_CHARACTER,
  REQUEST_CHARACTERS,
  REQUEST_SINGLE_CHARACTER,
} from './constants';
import { setCurrentPage } from './actions';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_CHARACTERS, fetchCharacters);
  yield takeEvery(REQUEST_SINGLE_CHARACTER, fetchSingleCharacter);
}

function* fetchCharacters(action: any) {
  const payload = yield call(getCharacters, action.page, action.searchText);
  yield put({ type: FETCH_CHARACTERS, payload });
  yield put(setCurrentPage(action.page));
}

function* fetchSingleCharacter(action: any) {
  const payload = yield call(getSingleCharacter, action.id);
  yield put({ type: FETCH_SINGLE_CHARACTER, payload });
}

async function getCharacters(page: number, searchText: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchText}`,
  );
  return response.json();
}

async function getSingleCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  return response.json();
}
