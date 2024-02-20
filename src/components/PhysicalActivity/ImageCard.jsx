import React from "react";

function ImageCard({ data }) {
  return (
    <div
      className="imgContainer"
      style={{
        backgroundImage: `url(${data?.imageLink})`,
      }}
      key={data.id}
    >
      <div className="overlay"></div>
      <div className="card-bottom">
        <div className="d-flex justify-content-between w-100 align-items-center mx-2 p-0">
          <h5 className="text-white">{data?.name}</h5>
          <p className="mx-3">{data?.time}</p>
        </div>
        <div className="d-flex gap-2">
          <button>{data?.feature}</button>
          <button>{data?.type}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
