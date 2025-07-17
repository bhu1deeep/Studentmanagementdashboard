// src/features/students/studentsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'https://68749558dd06792b9c945bfe.mockapi.io/student/' }),
 
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => '/students',
      providesTags: ['Students'],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
    }),
    addStudent: builder.mutation({
      query: (newStudent) => ({
        url: '/students',
        method: 'POST',
        body: newStudent,
      }),
      invalidatesTags: ['Students'],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/students/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Students'],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;
