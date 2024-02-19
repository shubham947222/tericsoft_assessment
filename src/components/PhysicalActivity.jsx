import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const PhysicalActivity = () => {
  const { activities } = useSelector((state) => {
    return state.activityList;
  });

  return (
    <div className="my-2  w-100">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="my-5">Highlights</h2>
        <div className="d-flex flex-wrap allign-items-center justify-content-center">
          {!activities?.length > 0
            ? "Loading..."
            : activities?.map((each) => (
                <div
                  class="imgContainer"
                  style={{
                    backgroundImage: `url(${each?.imageLink})`,
                  }}
                >
                  <div class="overlay">
                    <div className="d-flex justify-content-between">
                      <h5>{each?.name}</h5>
                      <p>{each?.time}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicalActivity;
