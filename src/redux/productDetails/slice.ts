import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductDetailsState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ProductDetailsState = {
    loading: true,
    error: null,
    data: null
}

export const getProductDetails = createAsyncThunk(
    "productDetails/getProductDetails",
    async (touristRouteId: string, thunkAPI) => {
        const {data} = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`);
        return data;
    }
)


export const ProductDetailSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: {
        [getProductDetails.pending.type] :(state) => {
            // return {...state, loading: true}
            // however with immer, we can directly modify the state
            state.loading = true;
        },
        [getProductDetails.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getProductDetails.rejected.type]: (state, action: PayloadAction<string|null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})