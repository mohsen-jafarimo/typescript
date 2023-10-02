import "./App.css";
import { useGetUsersQuery } from "./slices/userApiSlice";

function App() {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  console.log(error);

  return (
    <div>
      <h3>hello</h3>

      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {data?.map((user) => {
          return <h5 key={user.id}>{user.username}</h5>;
        })}
      </div>
    </div>
  );
}

export default App;
