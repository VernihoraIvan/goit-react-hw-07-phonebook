import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact, filterInputValue } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
