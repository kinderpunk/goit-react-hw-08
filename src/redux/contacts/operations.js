import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const handleError = (error) => {
  console.error(error);
  return error.response ? error.response.data : error.message;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('https://connections-api.goit.global/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('https://connections-api.goit.global/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`https://connections-api.goit.global/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);
