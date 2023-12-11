import { useEffect } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

export default function RouteProtector({ mroute, subroute }) {
  const navi = useNavigate();
  useEffect(() => {
    navi(`/${mroute}/${subroute}`);
  }, []);
  return <Outlet />;
}
