import { useMemo } from "react";
import { Button } from "../ui/button";
import { CiSquareMinus } from "react-icons/ci";
import { Checkbox } from "../ui/checkbox";
import { Truck_Command } from "./truckMoodle";

export default function AddNewOrder() {
  const defaultItemsInfo = [
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 0 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 1 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 2 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 3 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 4 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 5 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 6 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 7 },
  ];

  const total = useMemo(() => {
    let total = 0;
    defaultItemsInfo.forEach((item) => (total += item.price));
    return total;
  }, [defaultItemsInfo]);
  return (
    <>
      <div className=" w-full h-full flex flex-col text-[20px] gap-2 overflow-hidden">
        <section className="flex justify-start flex-col p-1 w-fit mx-1">
          <div className="flex justify-start p-2 items-center">
            <lable className="min-w-[100px]">Client:</lable>
            <Truck_Command />
            {/* <input className="border-primary p-2 rounded-md min-w-[200px] border outline-primary" /> */}
          </div>
          <div className="flex justify-center p-2 items-center ">
            <lable className="min-w-[100px]">Due date:</lable>
            <input className="border-primary p-2 rounded-md min-w-[200px] border outline-primary" />
          </div>
        </section>

        <section className="p-4 flex w-full justify-start">
          <div className="w-1/12">
            <p className="py-6">Items info:</p>
          </div>
          <ul className="flex flex-col gap-6 overflow-auto justify-between items-center py-6 px-2 border-y-2 rounded-none w-full max-h-[35vh] ">
            {defaultItemsInfo.map((item) => (
              <li
                className="flex justify-between items-center w-full"
                key={item.id}
              >
                <div className="flex justify-between">
                  <Truck_Command />
                </div>
                <div className="flex justify-between">
                  <label>Quantity:</label>
                  <span>{item.quantity}</span>
                </div>
                <span>{item.price}ks</span>

                <CiSquareMinus className="text-4xl" />
              </li>
            ))}
          </ul>
        </section>
        <div className="flex items-center m-2">
          <div className=" flex justify-start px-1 gap-4 grow">
            <span className="font-bold">Total Price:</span>
            <div>{total}ks</div>
          </div>
          <div>
            <Button className={"w-fit text-[18px]"}>Add News</Button>
          </div>
        </div>

        <div className="flex gap-16 items-center w-full  mx-2">
          <div className="flex gap-2">
            <Button className={"w-fit text-[18px]"}>Cancel</Button>
            <Button className={"w-fit text-[18px]"}>Confirm</Button>
          </div>

          <div className="flex justify-between items-center gap-2 w-fit my-2">
            <Checkbox className="border-2 w-6 h-6" />
            <span>Urgent</span>
          </div>
          <div className="flex my-2 mx-2 justify-start items-center">
            <span className=" mr-2">Note :</span>
            <input
              type="text"
              className=" p-1 rounded-md border-2 outline-primary w-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
