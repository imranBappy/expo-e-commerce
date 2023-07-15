import { apiSlice } from '../api/apiSlice';

export const brandApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBrands: builder.query({
            query: () => `/brand`,
            providesTags: ['Brands'],
        }),
    }),
});

export const { useGetAllBrandsQuery } = brandApi;