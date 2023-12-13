import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { logisticpaths, salepaths } from "./MainLayout";

export default function SidepageLayout(props) {
  const paths = useLocation();
  const navigate = useNavigate();
  const [pname, setpname] = useState(null);
  useEffect(() => {
    PathArraySelector(
      paths.pathname.split("/")[1],
      setpname,
      paths.pathname.split("/")[2]
    );
  }, [pname]);
  return (
    <div className="flex w-full gap-6 items-center relative">
      {console.log(paths.pathname.split("/")[2])}
      <div className="grow flex items-center gap-8  ">
        {paths.pathname.split("/")[1] === "sale" &&
          (paths.pathname.split("/")[2] !== "dashboard" ? (
            <FaArrowLeft
              className="text-primarycolor text-3xl hover:text-secondarycolor"
              onClick={() => navigate("/sale/dashboard")}
            />
          ) : null)}

        <p className="text-2xl font-bold text-primarycolor">{pname}</p>
      </div>
      {props.children}
    </div>
  );
}
export const PathArraySelector = (mainpath, setpname, path) => {
  switch (mainpath) {
    case "sale":
      return setpname(
        salepaths.filter((e) => e.path === path && e.pathname)[0].pathname
      );
    case "logistic":
      return setpname(
        logisticpaths.filter((e) => e.path === path && e.pathname)[0].pathname
      );
  }
};
