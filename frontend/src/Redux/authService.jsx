import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stylecraze-backend.onrender.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    }
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: "/api/user/profile",
        method: "GET"
      })
    })
  })
});

export const { useGetDetailsQuery } = authApi;
