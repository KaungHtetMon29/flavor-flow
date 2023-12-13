import { Link } from "react-router-dom";

export default function AddNewBtn(props) {
  return (
    <Link
      to={props.route}
      className="text-[18px] shadow-lg h-10 px-4 py-2 bg-secondarycolor text-white rounded-md font-semibold"
    >
      Add New
    </Link>
  );
}
