// redux/resellerSlice.js
import { server } from '@/server';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching all resellers
export const fetchAllResellers = createAsyncThunk(
    'resellers/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/resellers');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for creating a new reseller
export const createReseller = createAsyncThunk(
    'resellers/create',
    async (resellerData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${server}/resellers/signup`, resellerData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for logging in a reseller
export const loginReseller = createAsyncThunk(
    'resellers/login',
    async (loginData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`${server}/resellers/login`, loginData);
            const { reseller } = response.data;

            // Automatically fetch the logged-in reseller after successful login
            dispatch(fetchLoggedInReseller());

            return reseller;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for fetching the logged-in reseller
export const fetchLoggedInReseller = createAsyncThunk(
    'resellers/fetchLoggedIn',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${server}/resellers/get-reseller`, {
                withCredentials: true, // Include credentials (cookies) in the request
            });
            return response.data; // Return the reseller data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for updating a reseller
export const updateReseller = createAsyncThunk(
    'resellers/update',
    async ({ id, updateData }, { rejectWithValue, getState }) => {
        const { token } = getState().resellers; // Get the token from the state
        try {
            const response = await axios.patch(`${server}/resellers/update-reseller/${id}`, updateData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in the header
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for deleting a reseller
export const deleteReseller = createAsyncThunk(
    'resellers/delete',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${server}/resellers/delete-reseller/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Create the reseller slice
const resellerSlice = createSlice({
    name: 'resellers',
    initialState: {
        resellers: [],
        reseller: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetResellerError: (state) => {
            state.error = null;
        },
        logoutReseller: (state) => {
            state.reseller = null;
            // Token management is handled through cookies, no need to clear it here
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch all resellers
            .addCase(fetchAllResellers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllResellers.fulfilled, (state, action) => {
                state.loading = false;
                state.resellers = action.payload;
            })
            .addCase(fetchAllResellers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Create new reseller
            .addCase(createReseller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createReseller.fulfilled, (state, action) => {
                state.loading = false;
                state.resellers.push(action.payload)
            })
            .addCase(createReseller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Login reseller
            .addCase(loginReseller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginReseller.fulfilled, (state, action) => {
                state.loading = false;
                state.reseller = action.payload; // Store reseller details here
            })
            .addCase(loginReseller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch logged-in reseller
            .addCase(fetchLoggedInReseller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLoggedInReseller.fulfilled, (state, action) => {
                state.loading = false;
                state.reseller = action.payload; // Update the logged-in reseller data
            })
            .addCase(fetchLoggedInReseller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Update reseller
            .addCase(updateReseller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateReseller.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.resellers.findIndex(
                    (reseller) => reseller._id === action.payload.reseller._id
                );
                if (index !== -1) {
                    state.resellers[index] = action.payload.reseller;
                }
            })
            .addCase(updateReseller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Delete reseller
            .addCase(deleteReseller.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteReseller.fulfilled, (state, action) => {
                state.loading = false;
                state.resellers = state.resellers.filter(
                    (reseller) => reseller._id !== action.payload._id
                );
            })
            .addCase(deleteReseller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export the action creators and reducer
export const { resetResellerError, logoutReseller } = resellerSlice.actions;

export default resellerSlice.reducer;
