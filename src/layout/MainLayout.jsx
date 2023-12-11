import Sidenav from "@/components/SideNav/Sidenav";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MainLayout(props) {
  return (
    <div className="flex h-max">
      <Sidenav navs={["t", "t", "t", "t"]} />
      <div className="py-12 px-12 flex flex-col gap-12 w-full">
        <div className="flex w-full">
          <div className="grow flex">
            <FaArrowLeft className="text-black text-3xl hover:text-white" />
          </div>
          <div className="flex gap-2">
            <Input type="text" placeholder="Enter Email" />
            <Button>Search</Button>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
