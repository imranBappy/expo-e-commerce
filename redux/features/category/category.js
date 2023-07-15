import { apiSlice } from '../api/apiSlice';

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategores: builder.query({
            query: () => `/category`,
            providesTags: ['Brands'],
        }),
    }),
});

export const { useGetAllCategoresQuery } = categoryApi;