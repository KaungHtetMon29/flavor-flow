import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import Moodle from "./moodleComponent";
import { IoCar } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function TruckMoodle() {
  return (
    <Moodle buttonName={"Assignment"}>
      <div className="grid gap-1 py-2">
        <section className=" relative flex flex-col justify-start w-full rounded-lg">
          <label>Record No:</label>
          <input className=" border rounded-md p-1 my-3" type="text" />
          <label>Truck No:</label>
          <Truck_Command>
            <IoCar />
          </Truck_Command>
          <Button className={"w-fit my-2"}>Submit</Button>
        </section>
      </div>
    </Moodle>
  );
}

export function Truck_Command({ children }) {
  const truckLists = [
    { truckId: 0, truckNo: "60424" },
    { truckId: 1, truckNo: "15242" },
    { truckId: 2, truckNo: "24353" },
    { truckId: 3, truckNo: "32241" },
    { truckId: 4, truckNo: "43244" },
    { truckId: 5, truckNo: "52429" },
    { truckId: 6, truckNo: "243583" },
    { truckId: 7, truckNo: "32241" },
    { truckId: 8, truckNo: "43224" },
    { truckId: 9, truckNo: "52342" },
  ];
  const [commandSearchText, setcommandSearchText] = useState("");
  const [truckList, setTruckList] = useState(truckLists);
  const [selectedTruckNo, setSelectedTruckNo] = useState("");
  useEffect(() => {
    if (commandSearchText) {
      setTruckList(
        (truckList) =>
          truckLists
            .map((truck) => {
              if (truck.truckNo.indexOf(commandSearchText) !== -1) {
                return truck;
              }
              return null;
            })
            .filter(Boolean)
        //filter unidefined truck
      );
    } else {
      setTruckList([]);
    }
  }, [commandSearchText]);
  //when user selected car no onclick
  const hanldeSelectCarNo = (carNo) => {
    setcommandSearchText("");
    setSelectedTruckNo(carNo);
  };
  //when user searching (typing ) car no
  const handleSearchingCarNo = (searchText) => {
    setcommandSearchText(searchText);
    if (selectedTruckNo) {
      setSelectedTruckNo("");
    }
  };
  return (
    <div className="flex flex-col justify-between h-fit">
      <Input
        className={"rounded-md p-2 w-full z-20"}
        value={selectedTruckNo || commandSearchText}
        onChange={(e) => handleSearchingCarNo(e.target.value)}
      />
      <ul className="w-full flex flex-col overflow-auto max-h-[30vh] justify-start ">
        {truckList &&
          truckList.map((truck) => (
            <li
              className=" flex justify-start items-center p-2 border rounded-md hover:bg-slate-500"
              key={truck.truckId}
              onClick={() => hanldeSelectCarNo(truck.truckNo)}
            >
              {children}
              <span className="mx-4 "> {truck.truckNo}</span>
            </li>
          ))}
      </ul>
      {truckList.length === 0 && commandSearchText && (
        <small className="text-sm text-yellow-400 p-2 text-start">
          No results
        </small>
      )}
    </div>
  );
}
