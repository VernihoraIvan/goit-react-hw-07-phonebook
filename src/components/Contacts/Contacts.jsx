import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContactsList, getFilter } from '../../redux/contacts/selectors';
import { deleteContact, fetchingInProgress } from '../../redux/contacts/slice';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Contacts = () => {
  const items = useSelector(getContactsList);
  console.log(items);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContactsList = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // useEffect(() => {
  //   dispatch(fetchingInProgress);
  //   const getMovies = async () => {
  //     try {
  //       const data = await fetchTrends();
  //       setMovies(data);
  //     } catch (error) {
  //       console.log('error', error);
  //       setMovies([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMovies();
  // }, []);

  return (
    <ul className={css.list}>
      {items?.map(({ id, name, number }) => (
        <li key={id} className={css.list_item}>
          {name}: {number}{' '}
          <button
            className={css.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
