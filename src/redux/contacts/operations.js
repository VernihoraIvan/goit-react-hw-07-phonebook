import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchingError, fetchingInProgress, fetchingInSuccess } from './slice';

axios.defaults.baseURL = 'https://64aafb9b0c6d844abedf0c7b.mockapi.io';

// export const fetchContacts = createAsyncThunk;
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingInSuccess(response.data));
  } catch (error) {
    alert(error);
  }
};

export const postContacts = contact => async dispatch => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    alert(error);
  }
};
