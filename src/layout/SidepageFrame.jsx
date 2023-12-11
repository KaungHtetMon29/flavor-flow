import { FaArrowLeft } from "react-icons/fa";

export default function SidepageLayout(props) {
  return (
    <div className="flex w-full gap-12 items-center relative">
      <div className="grow flex">
        <FaArrowLeft className="text-black text-3xl hover:text-white" />
      </div>
      {props.children}
    </div>
  );
}
