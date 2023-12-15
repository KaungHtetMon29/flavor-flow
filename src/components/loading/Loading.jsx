import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbLoader } from "react-icons/tb";

export default function LoadingComp() {
  return (
    <div className="flex-col text-primarycolor  font-bold justify-center items-center w-full text-center tracking-wide h-full flex">
      <AiOutlineLoading3Quarters className="text-8xl font-bold text-secondarycolor animate-spin" />
    </div>
  );
}
