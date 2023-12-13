import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { IoIosCalendar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterByOrderDate } from "../../redux/preOrderSlice";

export default function CalendarComponent() {
  const [showdate, setshowdate] = useState(false);
  const [date, setdate] = useState(new Date());
  const dispatch = useDispatch();

  const formatSingleDigit = (number) => (number < 10 ? `0${number}` : number);

  const changeDateFormat = () => {
    setshowdate(!showdate);
    const originalDate = new Date(date);

    const day = formatSingleDigit(originalDate.getDate());
    const month = formatSingleDigit(originalDate.getMonth() + 1); // Months are zero-based
    const year = originalDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    console.log(formattedDate);
    dispatch(filterByOrderDate(formattedDate));
  };

  return (
    <div className="select-none ">
      <IoIosCalendar
        className="text-[3.3rem] cursor-pointer"
        onClick={() => {
          changeDateFormat();
        }}
      />
      {showdate && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setdate}
          className={
            "bg-white z-50 shadow-md rounded-md absolute right-0 border-2 mt-4"
          }
        />
      )}
    </div>
  );
}
