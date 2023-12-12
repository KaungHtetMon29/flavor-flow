import { useNavigate } from "react-router-dom";

export default function Sidenav({ navs, mainroute }) {
  const navi = useNavigate();
  return (
    <div className="sticky w-[264px] py-12 h-[100vh] bg-gray-200 text-[22px] font-semibold items-center flex flex-col gap-6">
      <div className="">
        <div className="bg-white w-20 h-20"></div>
      </div>
      <div className="flex flex-col grow ">
        {navs !== undefined &&
          navs.map((e, i) => (
            <div
              onClick={() => navi(`/${mainroute}/${e.path}`)}
              key={e.path}
              className={`hover:text-gray-50 border-b-2 w-40 border-opacity-10 text-start border-black py-6 ${
                i === 0 && "border-t-2"
              }`}
            >
              <p className="px-6">{e.pathname}</p>
            </div>
          ))}
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
