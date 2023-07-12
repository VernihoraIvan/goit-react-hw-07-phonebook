import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchingError, fetchingInProgress, fetchingInSuccess } from './slice';

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
// export const postContacts = contact => async dispatch => {
//   try {
//     const { data } = await axios.post('/contacts', contact);
//     return data;
//   } catch (error) {
//     alert(error);
//   }
// };

// export const deletePost = postId => async dispatch => {
//   try {
//     await axios.delete(`/posts/${postId}`);
//     dispatch(deletePostItem(postId));
//   } catch (error) {
//     console.log('Error occurred', error);
//   }
// };
