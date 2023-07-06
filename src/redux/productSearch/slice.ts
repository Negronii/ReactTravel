import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductSearchState {
    loading: boolean;
    error: string | null;
    data: any;
    pagination: any;
}

const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null,
}

export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct",
    async (parameters: {
        keywords: string;
        nextPage: number | string;
        pageSize: number | string;
    }, thunkAPI) => {
        let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${parameters.nextPage}&pageSize=${parameters.pageSize}`;
        if (parameters.keywords) {
            url += `&keyword=${parameters.keywords}`;
        }
        console.log(url);
        const {headers, data} = await axios.get(url);
        console.log(headers)
        console.log(data)
        return {pagination: JSON.parse(headers["x-pagination"]), data: data};
    }
)


export const productSearchSlice = createSlice({
    name: 'productSearch',
    initialState,
    reducers: {},
    extraReducers: {
        [searchProduct.pending.type] :(state) => {
            // return {...state, loading: true}
            // however with immer, we can directly modify the state
            state.loading = true;
        },
        [searchProduct.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null;
        },
        [searchProduct.rejected.type]: (state, action: PayloadAction<string|null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})