import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Photo} from '../types';

export const getAllPhoto = createAsyncThunk<Photo[]>('gallery/GetAll', async () => {
	const response = await axiosApi.get('photos');

	return response.data;
});

export const DeleteOne = createAsyncThunk<void, string>('gallery/delete', async (arg) => {
	await axiosApi.delete('photos/' + arg);
});