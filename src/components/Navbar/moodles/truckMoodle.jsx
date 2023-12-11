import { Button } from "@/components/ui/button";
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
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

export function TruckCommand() {
  const truckLists = [
    { truckId: 0, truckNo: "6042" },
    { truckId: 1, truckNo: "15242" },
    { truckId: 2, truckNo: "24353" },
    { truckId: 3, truckNo: "3224" },
    { truckId: 4, truckNo: "4324" },
    { truckId: 5, truckNo: "5242" },
  ];
  const [searching, setSearching] = useState(false);
  const [commandSearchText, setcommandSearchText] = useState("");
  const [truckList, setTruckList] = useState(truckLists);

  const handleSearching = () => {
    setSearching(!searching);
  };
  useEffect(() => {
    if (commandSearchText) {
      setTruckList(
        truckLists.filter((truck) => truck.truckNo.includes(commandSearchText))
      );
    }
  }, [commandSearchText]);
  console.log(commandSearchText.length === 0);
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput onValueChange={(value) => setcommandSearchText(value)} />

      <CommandList className="max-h-[30vh]">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Suggestions">
          {truckList.map((truck) => (
            <CommandItem key={truck.truckId}>
              <Calendar className="mr-2 h-4 w-4" />
              <button onClick={handleSearching}>{truck.truckNo}</button>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
      </CommandList>
    </Command>
  );
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TruckMoodle() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">truck moodle</Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[26vw] p-10">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
        <div className="grid gap-1 py-2">
          <section className=" relative flex flex-col justify-start w-full rounded-lg">
            <label>Record No:</label>
            <input className=" border rounded-md p-1 my-3" type="text" />
            <label>Truck No:</label>
            <TruckCommand />
          </section>
        </div>
        {/* <DialogFooter>
          <footer className="flex p-1 justify-start items-start w-full">
            <span className="mr-2 font-bold">Note: </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos veniam suscipit volupt
            </p>
          </footer>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
