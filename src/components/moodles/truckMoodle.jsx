import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import Moodle from "./moodleComponent";
import { IoCar } from "react-icons/io5";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "../ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchTrucks } from "@/redux/truckSlice";
import { createDelivery, removeDelivery } from "@/redux/deliverySlice";
import { useNavigate } from 'react-router-dom';
import { DialogClose } from "@radix-ui/react-dialog";

export default function TruckMoodle({delivery}) {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [validateError, setValidateError] = useState(false);
  const [truckId, settruckId] = useState('');
  const dispatch = useDispatch();
  const handleSumbit  =  (id) => {
	const newDelivery = {
		preorder_id: id,
		truck_id: truckId
	}
	
    if(selectedTruck) {
		dispatch(removeDelivery(id));
    //   dispatch(createDelivery(newDelivery));
    }else {
      setValidateError(true)
    }
  }
	return (
		<Moodle buttonName={"Assignment"}>
			<div className="grid gap-1 py-2">
				<section className=" relative flex flex-col justify-start w-full rounded-lg">
					<label className="font-semibold capitalize">Record No:</label>
					<input
						className=" border rounded-md p-1 my-3"
						type="text"
						value={delivery.preorder_id}
						disabled
					/>
					<label className="font-semibold capitalize">Truck No:</label>
					{/* <Truck_Command>
            <IoCar />
          </Truck_Command> */}
 <Blah onSelectInfo={(selectedTruck) => setSelectedTruck(selectedTruck)} settruckId={settruckId} />
          {validateError && <p className="text-red-500">Please select a truck no.</p>}
          <DialogClose className="w-fit px-2 rounded-md bg-slate-900 text-white p-1 my-2"   onClick={() => handleSumbit(delivery.preorder_id)}>Submit</DialogClose>
				</section>
			</div>
		</Moodle>
	);
}

// export function Truck_Command({ children }) {
	
// 	const [commandSearchText, setcommandSearchText] = useState("");
// 	const [truckList, setTruckList] = useState(truckLists);
// 	const [selectedTruckNo, setSelectedTruckNo] = useState("");

// 	useEffect(() => {
// 		if (commandSearchText) {
// 			setTruckList(
// 				(truckList) =>
// 					truckLists
// 						.map((truck) => {
// 							if (
// 								truck.truckNo.indexOf(commandSearchText) !== -1
// 							) {
// 								return truck;
// 							}
// 							return null;
// 						})
// 						.filter(Boolean)
// 				//filter unidefined truck
// 			);
// 		} else {
// 			setTruckList([]);
// 		}
// 	}, [commandSearchText]);
// 	//when user selected car no onclick
// 	const hanldeSelectCarNo = (carNo) => {
// 		setcommandSearchText("");
// 		setSelectedTruckNo(carNo);
// 	};
// 	//when user searching (typing ) car no
// 	const handleSearchingCarNo = (searchText) => {
// 		setcommandSearchText(searchText);
// 		if (selectedTruckNo) {
// 			setSelectedTruckNo("");
// 		}
// 	};
// 	return (
// 		<div className="flex flex-col border h-fit absolute top-0 left-0">
// 			{/*form dropdown style fix*/}
// 			<Input
// 				className={"rounded-md p-2 w-full z-20 "}
// 				value={selectedTruckNo || commandSearchText}
// 				onChange={(e) => handleSearchingCarNo(e.target.value)}
// 			/>
// 			{truckList && (
// 				<ul className="w-full border rounded-md bg-white z-50 flex flex-col overflow-auto max-h-[30vh] justify-start bottom-0 right-0">
// 					{truckList.map((truck) => (
// 						<li
// 							className=" flex w-full z-50 justify-start items-center p-2 border rounded-md hover:bg-slate-500"
// 							key={truck.truckId}
// 							onClick={() => hanldeSelectCarNo(truck.truckNo)}
// 						>
// 							{children}
// 							<span className="mx-4 "> {truck.truckNo}</span>
// 						</li>
// 					))}
// 					{truckList.length === 0 && commandSearchText && (
// 						<li className="text-sm text-yellow-400 p-2 text-start bg-white absolute z-50">
// 							No results
// 						</li>
// 					)}
// 				</ul>
// 			)}
// 		</div>
// 	);
// }

export function Blah({ onSelectInfo, data, selectedCommandItem, settruckId }) {
	const dispatch = useDispatch();
	const truckLists = useSelector((state) => state.truck.trucks);
	const [allTruck, setAllTruck] = useState(truckLists);
	const [commandText, setCommandText] = useState("");
	const [value, setValue] = useState("");

	useEffect(() => {
		dispatch(fetchTrucks())
		setAllTruck(truckLists)
	},[dispatch])

	

	useEffect(() => {
		if (commandText) {
			setAllTruck(
				(list) =>
				truckLists.map((truck) => {
					if (truck.license.indexOf(commandText) !== -1) {
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
				placeholder="Search By Truck License"
				value={commandText}
				className=""
			/>
			{commandText && allTruck.length && value === 0 ? (
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
							key={truck.id}
							value={truck.license}
							onSelect={(currentValue) => {
								settruckId(truck.id)
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
							{truck.license}
						</CommandItem>
					))}
				</CommandGroup>
			) : null}
		</Command>
	);
}
