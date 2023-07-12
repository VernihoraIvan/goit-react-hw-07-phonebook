import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64aafb9b0c6d844abedf0c7b.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contacts => {
    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (e) {
      return e.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return error.message;
    }
  }
);
