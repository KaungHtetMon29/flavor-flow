import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { logisticpaths, salepaths } from "./MainLayout";

export default function SidepageLayout(props) {
  const paths = useLocation();
  const [pname, setpname] = useState(null);
  useEffect(() => {
    PathArraySelector(
      paths.pathname.split("/")[1],
      setpname,
      paths.pathname.split("/")[2]
    );
  }, [pname]);
  return (
    <div className="flex w-full gap-12 items-center relative">
      {console.log(paths.pathname.split("/")[2])}
      <div className="grow flex items-center gap-8  ">
        {paths.pathname.split("/")[1] === "sale" && (
          <FaArrowLeft className="text-black text-3xl hover:text-white" />
        )}

        <p className="text-2xl font-bold">{pname}</p>
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
