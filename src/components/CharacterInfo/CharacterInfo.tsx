import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './CharacterInfo.module.scss';
import { cleanSingleCharacter, getSingleCharacter } from '../../redux/actions';
import { AppStateType } from '../../redux/store';
import { CharacterType } from '../../types/types';

type PropsType = {
  match: any;
};

const CharacterInfo: FC<PropsType> = ({ match }) => {
  const { characterId } = match.params;

  const dispatch = useDispatch();
  const character: CharacterType = useSelector(
    (state: AppStateType) => state.characters.character,
  );

  useEffect(() => {
    dispatch(getSingleCharacter(characterId));

    return function cleanUp() {
      dispatch(cleanSingleCharacter());
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <NavLink to="/" className={styles.returnButton} />
      <div className={styles.photo}>
        <img src={character.image} alt="avatar" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{character.name}</div>
        <div className={styles.status}>
          <div
            className={classNames(
              styles.statusIndicator,
              { [styles.red]: character.status === 'Dead' },
              { [styles.grey]: character.status === 'unknown' },
            )}
          />
          <div className={styles.statusText}>
            {character.status} - {character.origin && character.origin.name}
          </div>
        </div>
        <div className={styles.locationInfo}>
          <div className={styles.subtitle}>Last known location:</div>
          <div className={styles.location}>
            {character.location && character.location.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
