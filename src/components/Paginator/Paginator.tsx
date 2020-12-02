import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageInfoType } from '../../types/types';
import { AppStateType } from '../../redux/store';
import styles from './Paginator.module.scss';
import PaginateItem from './PaginateItem/PaginateItem';
import { getCharacters, setCurrentPage } from '../../redux/actions';

type PropsType = {
  searchText: string;
};

const Paginator: FC<PropsType> = ({ searchText }) => {
  const dispatch = useDispatch();
  const paginate: PageInfoType = useSelector(
    (state: AppStateType) => state.characters.pageInfo,
  );
  const currentPage: number = useSelector(
    (state: AppStateType) => state.app.currentPage,
  );
  const pagesCount: Array<number> = [];

  if (currentPage > 2) {
    pagesCount.push(currentPage - 1);
  }
  if (currentPage > 1) {
    pagesCount.push(currentPage);
  }
  if (currentPage < paginate.pages) {
    pagesCount.push(currentPage + 1);
  }

  const onPageChanged = (pageNumber: number) => {
    dispatch(getCharacters(pageNumber, searchText));
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className={styles.paginator}>
      <PaginateItem
        pageNumber={currentPage - 1}
        onPageChanged={onPageChanged}
        value="prev"
        pages={paginate.pages}
        currentPage={currentPage}
      />
      <PaginateItem
        pageNumber={1}
        onPageChanged={onPageChanged}
        value={1}
        pages={paginate.pages}
        currentPage={currentPage}
      />
      {currentPage >= 4 && <div className={styles.dots}>...</div>}
      {pagesCount.map((page: number) => (
        <PaginateItem
          pageNumber={page}
          onPageChanged={onPageChanged}
          value={page}
          pages={paginate.pages}
          currentPage={currentPage}
          key={page}
        />
      ))}
      {currentPage <= paginate.pages - 3 && (
        <div className={styles.dots}>...</div>
      )}
      {currentPage < paginate.pages - 1 && (
        <PaginateItem
          pageNumber={paginate.pages}
          onPageChanged={onPageChanged}
          value={paginate.pages}
          pages={paginate.pages}
          currentPage={currentPage}
        />
      )}
      <PaginateItem
        pageNumber={currentPage + 1}
        onPageChanged={onPageChanged}
        value="next"
        pages={paginate.pages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Paginator;
