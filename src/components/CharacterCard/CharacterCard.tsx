import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './CharacterCard.module.scss';
import { CharacterType } from '../../types/types';

export type PropsType = {
  character: CharacterType;
};

const CharacterCard: FC<PropsType> = ({ character }) => {
  return (
    <NavLink className={styles.card} to={`/character/${character.id}`}>
      <div className={styles.cardImage}>
        <img src={character.image} alt="аватар персонажа" />
      </div>
      <div className={styles.cardInfo}>
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
            {character.status} - {character.origin.name}
          </div>
        </div>
        <div className={styles.characterInfo}>
          <div className={styles.infoTitle}>Last known location:</div>
          <div className={styles.infoData}>{character.location.name}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default CharacterCard;
