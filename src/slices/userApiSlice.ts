import apiSlice from "./apiSlice";

interface IUser {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser["user"][], void>({
      query: () => ({
        url: "https://jsonplaceholder.typicode.com/users",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApiSlice;
