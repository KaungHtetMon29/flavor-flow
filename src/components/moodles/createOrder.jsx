import { useMemo } from "react";
import { Button } from "../ui/button";

export default function AddNewOrder() {
  const defaultItemsInfo = [
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 0 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 1 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 2 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 3 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 4 },
    { itemInfo: "blah blah", quantity: 10, price: 1000, id: 5 },
  ];

  const total = useMemo(() => {
    let total = 0;
    defaultItemsInfo.forEach((item) => (total += item.price));
    return total;
  }, [defaultItemsInfo]);
  return (
    <>
      <div className=" w-full h-full flex flex-col ">
        <section className="flex justify-start flex-col p-1 w-fit m-1">
          <div className="flex justify-center p-2 items-center">
            <lable className="min-w-[100px]">Client:</lable>
            <input className=" p-2 rounded-md min-w-[200px] border outline-primary" />
          </div>
          <div className="flex justify-center p-2 items-center ">
            <lable className="min-w-[100px]">Due date:</lable>
            <input className=" p-2 rounded-md min-w-[200px] border outline-primary" />
          </div>
        </section>

        <section className=" mt-2 w-full justify-start">
          <ul className="flex flex-col overflow-auto justify-between items-center py-2 px-2 border-2 rounded-md p-1 w-full max-h-[30vh] ">
            {defaultItemsInfo.map((item) => (
              <li
                className="flex justify-between items-center w-full"
                key={item.id}
              >
                <div className="flex justify-between">
                  <label>Items info:</label>
                  <span>{item.itemInfo}</span>
                </div>
                <div className="flex justify-between">
                  <label>Quantity:</label>
                  <span>{item.quantity}</span>
                </div>
                <span>{item.price}ks</span>
                <Button className="border rounded-2xl  hover:bg-red-400">
                  -
                </Button>
              </li>
            ))}
          </ul>
        </section>
        <div className="m-2 flex justify-start">
          <span className="font-bold">Total Price:</span>
          <div>{total}ks</div>
        </div>
        <Button className={"w-fit"}>Add new</Button>
        <div className="flex justify-between w-fit my-2">
          <input className=" border-2 p-2 mx-1" type="checkbox" />
          <span>Urgent</span>
        </div>
        <div className="flex my-2 justify-start items-center">
          <span className=" mr-2">Note :</span>
          <input
            type="text"
            className=" p-1 rounded-md border-2 outline-primary"
          />
        </div>
      </div>
    </>
  );
}
