import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => 'students/',
    }),
  }),
})

export const { useGetStudentsQuery } = studentsApi
