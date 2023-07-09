import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import FilterInput from './FilterInput/FilterInput';
import css from './App.module.css';

export const App = () => {
  return (
    <div
      className={css.container}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
