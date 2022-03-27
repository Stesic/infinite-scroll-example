import React, { useEffect, useState } from "react";
import DataList from "./pages/DataList";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataTotal, setDataTotal] = useState(5);
  const [endReached, setEndReached] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=3`
    )
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    setData((prev) => [...prev, ...res.data]);
    setDataTotal(res.total);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (data?.length >= dataTotal) {
      setEndReached(true);
    }
  }, [page]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <DataList
        dataList={data}
        total={dataTotal}
        setPage={setPage}
        endReached={endReached}
      />
      <p
        style={{
          minHeight: "50px",
        }}
      >
        {isLoading && "Loading..."}
        {endReached && "End reached..."}
      </p>
    </div>
  );
}

export default App;
