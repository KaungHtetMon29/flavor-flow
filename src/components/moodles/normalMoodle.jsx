import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "../ui/button";

export default function NormalMoodle({ hide, children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-20 flex justify-center items-center ">
      <section className=" relative flex flex-col bg-white justify-start p-10 border shadow-md rounded-lg ">
        <Button onClick={hide} className={"w-fit"}>
          <IoMdArrowRoundBack />
        </Button>
        {children}
      </section>
    </div>
  );
}
