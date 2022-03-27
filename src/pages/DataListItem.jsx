import React from "react";

const DataListItem = ({ item }) => {
  const { first_name, last_name, email, id } = item;
  return (
    <div
      style={{
        border: "1px solid black",
        minWidth: 800,
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>{`${id}. ${first_name} ${last_name}`}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default DataListItem;
