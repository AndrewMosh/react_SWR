import { useGetData } from "../api/api";

const SomeDataComponent = () => {
  const { data, error } = useGetData("/api/activity");

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Some Data:</h1>
      <p>{data.activity}</p>
    </div>
  );
};

export default SomeDataComponent;
