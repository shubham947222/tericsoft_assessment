import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const PhysicalActivity = () => {
  const { activities, status } = useSelector((state) => {
    return state.activityList;
  });
  console.log(status, "status");
  return (
    <div className="my-2  w-100">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="my-5">Highlights</h2>
        <div className="d-flex flex-wrap allign-items-center justify-content-center">
          {!activities?.length > 0 ? (
            "Loading..."
          ) : status != 404 ? (
            activities?.map((each) => (
              <div
                class="imgContainer"
                style={{
                  backgroundImage: `url(${each?.imageLink})`,
                }}
              >
                <div class="overlay"></div>
                <div className="card-bottom">
                  <div className="d-flex justify-content-between w-100 align-items-center mx-2 p-0">
                    <h5 className="text-white">{each?.name}</h5>
                    <p className="mx-3">{each?.time}</p>
                  </div>
                  <div className="d-flex gap-2">
                    <button>{each?.feature}</button>
                    <button>{each?.type}</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center flex-column justify-content-center">
              <h3>"Failed to fetch images....!!!"</h3>
              <div
                class="imgContainer"
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph")`,
                }}
              >
                {/* <div class="overlay">
                  <div className="d-flex justify-content-between"></div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicalActivity;
