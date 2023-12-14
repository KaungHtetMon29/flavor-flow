import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

export default function RouteProtector({ mroute, subroute }) {
  const navi = useNavigate();
  const selector = useSelector((state) => state.authentication);
  useEffect(() => {
    selector.authToken.length !== 0
      ? selector.response.department === "sale"
        ? navi("/sale/dashboard")
        : navi("/logistic/deliverystatus")
      : navi("/");

    // ? navi(`/${mroute}/${subroute}`)
    // : selector === "sale"
    // ? navi(`/${selector}/dashboard`)
    // : navi(`/logistic/deliverystatus`);
  }, [selector.authToken]);
  return <Outlet />;
}
