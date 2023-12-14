import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import Moodle from "./moodleComponent";
import { IoCar } from "react-icons/io5";
import { useState, useEffect } from "react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "../ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TruckMoodle() {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [validateError, setValidateError] = useState(false);
  const handleSumbit  = () => {
    if(selectedTruck) {
      console.log("submit");
    }else {
      console.log("can't submit");
      setValidateError(true)
    }
  }
	return (
		<Moodle buttonName={"Assignment"}>
			<div className="grid gap-1 py-2">
				<section className=" relative flex flex-col justify-start w-full rounded-lg">
					<label>Record No:</label>
					<input
						className=" border rounded-md p-1 my-3"
						type="text"
					/>
					<label>Truck No:</label>
					{/* <Truck_Command>
            <IoCar />
          </Truck_Command> */}
 <Blah onSelectInfo={(selectedTruck) => setSelectedTruck(selectedTruck)} />
          {validateError && <p className="text-red-500">Please select a truck no.</p>}
          <Button className={`w-fit my-2`} onClick={handleSumbit}>Submit</Button>
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
							if (
								truck.truckNo.indexOf(commandSearchText) !== -1
							) {
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
		<div className="flex flex-col border h-fit absolute top-0 left-0">
			{/*form dropdown style fix*/}
			<Input
				className={"rounded-md p-2 w-full z-20 "}
				value={selectedTruckNo || commandSearchText}
				onChange={(e) => handleSearchingCarNo(e.target.value)}
			/>
			{truckList && (
				<ul className="w-full border rounded-md bg-white z-50 flex flex-col overflow-auto max-h-[30vh] justify-start bottom-0 right-0">
					{truckList.map((truck) => (
						<li
							className=" flex w-full z-50 justify-start items-center p-2 border rounded-md hover:bg-slate-500"
							key={truck.truckId}
							onClick={() => hanldeSelectCarNo(truck.truckNo)}
						>
							{children}
							<span className="mx-4 "> {truck.truckNo}</span>
						</li>
					))}
					{truckList.length === 0 && commandSearchText && (
						<li className="text-sm text-yellow-400 p-2 text-start bg-white absolute z-50">
							No results
						</li>
					)}
				</ul>
			)}
		</div>
	);
}

export function Blah({ onSelectInfo, data, selectedCommandItem }) {
	const truckLists = [
		{ quantity: 10, price: 1000, truckId: 0, truckNo: "60424" },
		{ quantity: 10, price: 1000, truckId: 1, truckNo: "15242" },
		{ quantity: 10, price: 1000, truckId: 2, truckNo: "24353" },
		{ quantity: 10, price: 1000, truckId: 3, truckNo: "341" },
		{ quantity: 10, price: 1000, truckId: 4, truckNo: "43244" },
		{ quantity: 10, price: 1000, truckId: 5, truckNo: "52429" },
		{ quantity: 10, price: 1000, truckId: 6, truckNo: "243583" },
		{ quantity: 10, price: 1000, truckId: 7, truckNo: "32241" },
		{ quantity: 10, price: 1000, truckId: 8, truckNo: "43224" },
		{ quantity: 10, price: 1000, truckId: 9, truckNo: "52342" },
	];
	const [allTruck, setAllTruck] = useState(truckLists);
	const [commandText, setCommandText] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		if (!commandText) {
			setAllTruck([]);
		}
	}, []);
	useEffect(() => {
		if (commandText) {
			setAllTruck(
				(truckList) =>
					truckLists
						.map((truck) => {
							if (truck.truckNo.indexOf(commandText) !== -1) {
								return truck;
							}
							return null;
						})
						.filter(Boolean)
				//filter unidefined truck
			);
		} else {
			setAllTruck([]);
		}
	}, [commandText]);

	return (
		<Command className="min-w-[200px] max-w-[40vw] ">
			{/* <Input
          placeholder="Search item"
          onValueChange={(value) => setCommandText(value)}
        /> */}
			<Input
				onChange={(e) => {
					setCommandText(e.target.value);
					setValue("");
				}}
				placeholder="search"
				value={commandText}
				className=""
			/>
			{commandText && allTruck.length === 0 ? (
				<CommandEmpty className="bg-white border rounded-md text-center text-sm italic p-2">
					No result.
				</CommandEmpty>
			) : null}
			{commandText.length !== 0 || !value ? (
				<CommandGroup
					className={
						"max-h-[40vh]  border absolute mt-10 bg-white min-w-[100px] max-w-[40vw] z-[99] " +
						(!commandText || allTruck.length === 0 || value
							? "hidden"
							: "")
					}
				>
					{allTruck.map((truck) => (
						<CommandItem
							key={truck.truckId}
							value={truck.truckNo}
							onSelect={(currentValue) => {
								setValue(
									currentValue === value ? "" : currentValue
								);
								setCommandText(currentValue);
								onSelectInfo({
									...data,
									itemInfo: currentValue,
								});
							}}
						>
							{/* <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === truck.truckNo ? "opacity-100" : "opacity-0"
                )}
              /> */}
							{truck.truckNo}
						</CommandItem>
					))}
				</CommandGroup>
			) : null}
		</Command>
	);
}
