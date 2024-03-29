import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
  resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            onChange={handleTitleFilterChange}
            value={titleFilter}
            type='text'
            placeholder='Filter by title...'
          ></input>
        </div>
        <div className='filter-group'>
          <input
            onChange={handleAuthorFilterChange}
            value={authorFilter}
            type='text'
            placeholder='Filter by author...'
          />
        </div>
        <div className='filter-group'>
          <label>
            <input
              type='checkbox'
              onChange={handleOnlyFavoriteFilterChange}
              checked={onlyFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button type='button' onClick={handleResetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
