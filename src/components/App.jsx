import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import FilterInput from './FilterInput/FilterInput';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export const App = () => {
  // const { items, isLoading, error } = useSelector(getContacts);
  // console.log({ items, isLoading, error });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FilterInput />
        <Contacts />
      </Section>
    </div>
  );
};
