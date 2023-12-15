import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import logo from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { Authactions } from "@/redux/authSlice";
export default function Sidenav({ navs, mainroute }) {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const location = useLocation();
  return (
    <div className="text-white sticky shadow-lg w-[300px] py-12 min-h-[100vh] max-h-full bg-primarycolor text-xl font-semibold items-center flex flex-col gap-6">
      <div className="">
        <img
          src={logo}
          className={`w-36 h-36 ${
            location.pathname.split("/")[1] === "logistic"
              ? "cursor-default pointer-events-none"
              : location.pathname.split("/")[2] !== "dashboard" &&
                "cursor-pointer"
          }`}
          onClick={() => {
            location.pathname.split("/")[2] !== "deliverystatus" &&
              navi("/sale/dashboard");
          }}
        />
        {/* <div
          
        ></div> */}
      </div>
      <div className="flex flex-col grow">
        {navs !== undefined &&
          navs.map(
            (e, i) =>
              e.pathname !== "Dashboard" && (
                <div
                  onClick={() => navi(`/${mainroute}/${e.path}`)}
                  key={e.path}
                  className={`cursor-pointer border-b-2 flex items-center w-52 border-opacity-10 text-start border-white py-2 ${
                    i === 0 && "border-t-2"
                  }`}
                >
                  <div
                    className={`flex hover:bg-white/20 w-full items-center gap-4 rounded-md py-3 px-2 ${
                      location.pathname.split("/")[2] === e.path
                        ? "bg-secondarycolor drop-shadow-lg "
                        : "bg-primarycolor"
                    }`}
                  >
                    <div className="w-1/6">{e.icon}</div>
                    <div>
                      <p className="">{e.pathname}</p>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
      <div className="flex flex-col items-center gap-8 cursor-pointer">
        <div
          className=" hover:text-2xl flex items-center bg-secondarycolor py-4 px-6 rounded-md gap-2"
          onClick={() => dispatch(Authactions.Logout(), navi("/"))}
        >
          Logout
          <IoIosLogOut className="text-3xl" />
        </div>
        <div className="text-sm w-full text-center leading-6 font-normal">
          <p>All Right Reserved.</p>
          <p>Developed by TripleR Dev team</p>
        </div>
      </div>
    </div>
  );
}
