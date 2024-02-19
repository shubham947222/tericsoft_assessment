import { useSelector, useDispatch } from "react-redux";
import { getCycling, getFeatured } from "../redux/activityListSlice";
import { useState } from "react";
const PhysicalActivity = () => {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const { activities } = useSelector((state) => {
    console.log(state, "state from activity list");
    return state.activityList;
  });
  console.log(activities, "activities");

  return (
    <div className="my-2  w-100">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="my-5">Highlights</h2>
        <div className="row">
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
