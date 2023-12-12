import { useNavigate } from "react-router-dom";

export default function Sidenav({ navs, mainroute }) {
  const navi = useNavigate();
  return (
    <div className="sticky w-[300px] py-12 min-h-[100vh] max-h-full bg-gray-200 text-xl font-semibold items-center flex flex-col gap-6">
      <div className="">
        <div className="bg-white w-20 h-20"></div>
      </div>
      <div className="flex flex-col grow">
        {navs !== undefined &&
          navs.map(
            (e, i) =>
              e.pathname !== "Dashboard" && (
                <div
                  onClick={() => navi(`/${mainroute}/${e.path}`)}
                  key={e.path}
                  className={`cursor-pointer gap-4 hover:text-gray-50 border-b-2 flex items-center w-48 border-opacity-10 text-start border-black py-5 ${
                    i === 0 && "border-t-2"
                  }`}
                >
                  <div className="w-1/6">{e.icon}</div>
                  <div>
                    <p className="">{e.pathname}</p>
                  </div>
                </div>
              )
          )}
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="hover:text-gray-50">Logout</div>
        <div className="text-sm w-3/4 text-center leading-6">
          All Right Reserved. Developed by TripleR
        </div>
      </div>
    </div>
  );
}
