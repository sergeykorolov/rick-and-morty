import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import { AppStateType } from '../../redux/store';
import { getCharacters, setSearchText } from '../../redux/actions';
import { CharacterType } from '../../types/types';
import Paginator from '../Paginator/Paginator';

const Home: FC = () => {
  const dispatch = useDispatch();
  const characters: Array<CharacterType> = useSelector(
    (state: AppStateType) => state.characters.characters,
  );
  const currentPage = useSelector(
    (state: AppStateType) => state.app.currentPage,
  );
  const searchText = useSelector((state: AppStateType) => state.app.searchText);

  useEffect(() => {
    dispatch(getCharacters(currentPage, searchText));
  }, []);

  const onSearchCharacters = (e: any) => {
    dispatch(setSearchText(e.target.value));
    dispatch(getCharacters(1, e.target.value));
  };

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.title}>The Rick and Morty</div>
        <div className={styles.subtitle}>Characters</div>
        <div className={styles.searchBlock}>
          <input
            type="text"
            placeholder="search by name"
            onKeyUp={(e) => onSearchCharacters(e)}
            defaultValue={searchText}
          />
        </div>
      </div>
      {characters ? (
        <>
          <Paginator searchText={searchText} />
          <div className={styles.pageContent}>
            <ul className={styles.elementsList}>
              {characters.map((character: CharacterType) => (
                <CharacterCard character={character} key={character.id} />
              ))}
            </ul>
          </div>
          <Paginator searchText={searchText} />
        </>
      ) : (
        <div className={styles.notFoundMessage}>Characters not found!</div>
      )}
    </div>
  );
};

export default Home;
