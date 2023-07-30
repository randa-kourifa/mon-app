import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mon-app-back-end2.onrender.com/",
  }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),
    checktoken: builder.mutation({
      query: (data) => ({
        url: "user/checktoken",
        method: "POST",
        headers: { token: `${data}` },
      }),
    }),
    getPatient: builder.query({
      query: (data) => ({ url: "patient/", method: "GET", body: data }),
    }),
    postPatient: builder.mutation({
      query: (data) => ({
        url: "patient/add",
        method: "POST",
        body: data,
      }),
    }),
    deletePatient: builder.mutation({
      query: (data) => ({
        url: `patient/delete/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPatientQuery,
  usePostPatientMutation,
  useDeletePatientMutation,
  useLoginMutation,
  useSignupMutation,
  useChecktokenMutation,
} = apiSlice;
