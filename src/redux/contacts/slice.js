import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
    filterContact(state, action) {
      state.filter = action.payload;
    },
    //   setContacts(state, action) {
    //     state.contacts.items = action.payload;
    //   },
    //   addContact(state, action) {
    //     state.contacts.items.push(action.payload);
    //   },

    //   deleteContact(state, action) {
    //     state.contacts.items = state.contacts.items.filter(
    //       contact => contact.id !== action.payload
    //     );
    //   },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },

    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContact.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },

    // fetchingInProgress(state) {
    //   state.contacts.isLoading = true;
    // },

    // fetchingInSuccess(state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = action.payload;
    //   console.log(action.payload);
    // },

    // fetchingInError(state, action) {
    //   state.contacts.items = [];
    //   state.contacts.isLoading = false;
    //   state.contacts.error = action.payload;
    // },
  },
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
