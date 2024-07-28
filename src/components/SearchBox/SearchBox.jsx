import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFilters);

  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="text">
          Find contacts by name
        </label>
        <input
          className={css.input}
          type="text"
          name="text"
          value={inputValue}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
}
