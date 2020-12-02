import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './PaginateItem.module.scss';

type PropsType = {
  pageNumber: number;
  onPageChanged: (pageNumber: number) => void;
  value: number | string;
  pages: number;
  currentPage: number;
};

const PaginateItem: FC<PropsType> = ({
  pageNumber,
  onPageChanged,
  value,
  pages,
  currentPage,
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.paginateItem, {
        [styles.active]: currentPage === value,
      })}
      onClick={() => onPageChanged(pageNumber)}
      disabled={pageNumber < 1 || pageNumber > pages}
    >
      {value}
    </button>
  );
};

export default PaginateItem;
