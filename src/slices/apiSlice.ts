import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

const apiSlice = createApi({
  baseQuery,
  reducerPath: "api",
  tagTypes: ["Users"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
