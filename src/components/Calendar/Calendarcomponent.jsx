import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { IoIosCalendar } from "react-icons/io";

export default function CalendarComponent() {
  const [date, setdate] = useState(new Date());
  const [showdate, setshowdate] = useState(false);
  return (
    <div className="select-none ">
      <IoIosCalendar
        className="text-[3rem]"
        onClick={() => {
          setshowdate(!showdate);
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
