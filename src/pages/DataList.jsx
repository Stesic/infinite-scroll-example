import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import DataListItem from "./DataListItem";

const DataList = ({ dataList, total, setPage }) => {
  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    enabled: dataList?.length && dataList?.length <= total,
    setPage,
  });

  if (!dataList.length) {
    return null;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: 400,
          background: "silver",
          overflow: "auto",
        }}
      >
        {dataList.map((item) => (
          <DataListItem item={item} key={item.id} />
        ))}
        <div ref={loadMoreButtonRef}></div>
      </div>
    </>
  );
};

export default DataList;
