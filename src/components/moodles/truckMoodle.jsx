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
              if (truck.truckNo.includes(commandSearchText)) {
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
    <Moodle moodleName={"truck moodle"}>
      <div className="grid gap-1 py-2">
        <section className=" relative flex flex-col justify-start w-full rounded-lg">
          <label>Record No:</label>
          <input className=" border rounded-md p-1 my-3" type="text" />
          <label>Truck No:</label>
          <TruckCommand />
        </section>
      </div>
    </Moodle>
  );
}
