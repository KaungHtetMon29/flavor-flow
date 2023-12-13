import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

export default function RouteProtector({ mroute, subroute }) {
  const navi = useNavigate();
  const selector = useSelector((state) => state.authentication.role);
  useEffect(() => {
    selector === mroute
      ? navi(`/${mroute}/${subroute}`)
      : selector === "sale"
      ? navi(`/${selector}/dashboard`)
      : navi(`/logistic/deliverystatus`);
  }, []);
  return <Outlet />;
}
