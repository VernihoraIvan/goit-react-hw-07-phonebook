import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64aafb9b0c6d844abedf0c7b.mockapi.io';

export const fetchContacts = createAsyncThunk;
