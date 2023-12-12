import { IoCar } from "react-icons/io5";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import Moodle from "./moodleComponent";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Input } from "../ui/input";
export function TruckCommand() {
  const truckLists = [
    { truckId: 0, truckNo: "6042" },
    { truckId: 1, truckNo: "15242" },
    { truckId: 2, truckNo: "24353" },
    { truckId: 3, truckNo: "3224" },
    { truckId: 4, truckNo: "4324" },
    { truckId: 5, truckNo: "5242" },
  ];
  const [commandSearchText, setcommandSearchText] = useState("");
  const [truckList, setTruckList] = useState(truckLists);

  useEffect(() => {
    if (commandSearchText) {
      console.log();
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
    }
  }, [commandSearchText]);
  console.log(commandSearchText, "current search text");
  console.log(truckList, "current trucks");
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput onValueChange={(value) => setcommandSearchText(value)} />

      <CommandList
        className={clsx("max-h-[30vh]", {
          hidden: !commandSearchText,
          block: commandSearchText,
        })}
      >
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Suggestions">
          {truckList &&
            truckList.map((truck) => (
              <CommandItem key={truck.truckId}>
                <Calendar className="mr-2 h-4 w-4" />
                <button>{truck.truckNo}</button>
              </CommandItem>
            ))}
        </CommandGroup>

        <CommandSeparator />
      </CommandList>
    </Command>
  );
}

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
  console.log(commandSearchText, "current search text");
  console.log(truckList, "current trucks");
  return (
    <div className="flex flex-col justify-between h-fit">
      <Input
        className={"rounded-md p-2 w-full z-20"}
        onChange={(e) => setcommandSearchText(e.target.value)}
      />
      <ul className="w-full flex flex-col overflow-auto max-h-[30vh] justify-start ">
        {truckList &&
          truckList.map((truck) => (
            <li
              className=" flex justify-start items-center p-2 border rounded-md hover:bg-slate-500"
              key={truck.truckId}
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
