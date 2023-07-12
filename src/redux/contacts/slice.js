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
      state.contacts.items = action.payload;
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

    fetchingInProgress(state) {
      state.contacts.isLoading = true;
    },

    fetchingInSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
      console.log(action.payload);
    },

    fetchingInError(state, action) {
      state.contacts.items = [];
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContact,
  fetchingInError,
  fetchingInProgress,
  fetchingInSuccess,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
