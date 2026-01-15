import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data");
      const data = await response.json();
      console.log(data.message);
      setData(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>App</div>
      <h1>Data from Server {data && <p>{data}</p>}</h1>
    </>
  );
}

export default App;
