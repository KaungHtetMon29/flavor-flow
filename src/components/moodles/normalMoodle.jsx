import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "../ui/button";

export default function NormalMoodle({ hide, children }) {
  return (
    <div
      onClick={hide}
      className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-20  flex justify-center items-center "
    >
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" relative flex flex-col bg-white z-50 justify-start p-10 border shadow-md rounded-lg "
      >
        <Button
          onClick={(e) => {
            e.stopPropagation();
            hide();
          }}
          className={"w-fit"}
        >
          <IoMdArrowRoundBack />
        </Button>
        {children}
      </section>
    </div>
  );
}
