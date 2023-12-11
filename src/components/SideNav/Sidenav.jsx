export default function Sidenav({navs}) {
  return (
    
      <div className="sticky w-[264px] py-12 h-screen bg-gray-500 text-2xl items-center flex flex-col gap-6">
        <div className=""><div className="bg-white w-20 h-20"></div></div>
        <div className="flex flex-col grow ">{navs.map((e,i)=><div className={`hover:text-gray-50 border-b-2 w-48 text-center border-black py-6 ${i===0&&"border-t-2"}`}>{e}</div>)}</div>
        <div className="flex flex-col items-center gap-8">
            <div className="hover:text-gray-50">Logout</div>
            <div className="text-sm">Power by blah</div>
        </div>
      </div>
      
  );
}
