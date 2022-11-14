import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API} from "../utils/api.constant";
import {axiosInstance} from "../utils/axiosInstance";


export const getSiteDetails = createAsyncThunk('siteDetails/getSiteDetails', async ({rejectWithValue}) => {
  try {
    const response = await axiosInstance.get(API.baseUrl + API.siteDetails.getDetails)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  needToUpdate: true,
  isError: false,
  error: null
};
export const siteDetailsSlice = createSlice({
  name: 'siteDetails',
  initialState,
  reducers: {
    setNeedToUpdate: (state, action) => {
      state.needToUpdate = action.payload
    },
    setSiteDetails: (state, action) => {
      state.data = action.payload
      state.needToUpdate = false
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    setSiteDetailsError: (state, action) => {
      state.data = []
      state.isLoading = false
      state.needToUpdate = false
      state.isSuccess = false
      state.isError = true
      state.error = action
    },
    setSiteDetailsLoading: (state, action) => {
      state.isLoading = action.payload
      state.isSuccess = false
      state.isError = false
    }
  },
  extraReducers: {
    [getSiteDetails.pending]: (state) => {
      state.isLoading = true
    },
    [getSiteDetails.fulfilled]: (state, action) => {
      state.data = action.payload
      state.needToUpdate = false
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [getSiteDetails.rejected]: (state, action) => {
      state.data = []
      state.isLoading = false
      state.needToUpdate = false
      state.isSuccess = false
      state.isError = true
      state.error = action
    }
  }
});

export const {setNeedToUpdate, setSiteDetails, setSiteDetailsError, setSiteDetailsLoading} = siteDetailsSlice.actions;
export default siteDetailsSlice.reducer;