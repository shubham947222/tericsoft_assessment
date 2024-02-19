import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCycling, getFeatured } from "../../redux/activityListSlice";
function MenuBar() {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const menuList = [
    {
      id: 1,
      name: "Featured",
      icon: <i className="far fa-star p-0 m-0"></i>,
      fetchData: () => dispatch(getFeatured()),
    },
    { id: 2, name: "Armoury", icon: <i class="fas fa-running"></i> },
    { id: 3, name: "Aquatics", icon: <i class="fas fa-swimmer"></i> },
    {
      id: 4,
      name: "Cycling",
      icon: <i class="fas fa-biking"></i>,
      fetchData: () => dispatch(getCycling()),
    },
    { id: 5, name: "Eqestrian", icon: <i class="fas fa-horse"></i> },
    { id: 6, name: "Extreme", icon: <i class="fas fa-hiking"></i> },
    { id: 7, name: "Golf", icon: <i class="fas fa-golf-ball"></i> },
    {
      id: 8,
      name: "Gymnastics",
      icon: <i class="fas fa-dumbbell"></i>,
    },
    {
      id: 9,
      name: "Lake & Sea",
      icon: <i class="fas fa-ship"></i>,
    },
  ];
  return (
    <div className="p-2">
      <div className="d-flex justify-content-between flex-wrap gap-3 px-5 w-100">
        {menuList?.map((each) => (
          <div
            className="col- text-center p-2 rounded-circl th-pointer"
            style={{
              backgroundColor: selectedMenu == each?.id ? "#b2cbf2" : "#d1dff6",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
            }}
            onClick={() => {
              console.log("first");
              each?.fetchData();
              setSelectedMenu(each?.id);
            }}
          >
            <p
              style={{
                color: selectedMenu == each?.id ? "#ffffff" : "#000000",
              }}
            >
              {each?.icon}
            </p>
            <p className="text-white">{each?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuBar;
