import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMemo } from "react";
import Moodle from "./moodleComponent";

export function SaleDialog() {
  const defaultData = [
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
    { name: "blah", quantity: 10, price: 1000 },
  ];
  const total = useMemo(() => {
    let total = 0;
    defaultData.forEach((data) => (total += data.price));
    return total;
  }, [defaultData]);
  return (
    <Moodle moodleName={"Sale Moodle"}>
      <section className=" relative flex flex-col justify-start p-10 w-full rounded-lg ">
        <div className="flex justify-between my-2">
          <h3>Town:</h3>
          <span>blhab lahf</span>
        </div>
        <h4 className="font-bold">Order items</h4>
        <hr />
        <ul className="flex flex-col justify-start overflow-auto max-h-[26vh]">
          {defaultData.map((data, index) => (
            <li key={index} className=" flex justify-between p-1">
              <h5>{data.name}</h5>
              <h5>{data.quantity}</h5>
              <h5>{data.price}ks</h5>
            </li>
          ))}
        </ul>
        <hr />
        <div className=" flex justify-start">
          <h5>Total : </h5>
          <span>{total}ks</span>
        </div>
      </section>
      <DialogFooter>
        <footer className="flex p-1 justify-start items-start w-full">
          <span className="mr-2 font-bold">Note: </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veniam suscipit volupt
          </p>
        </footer>
        {/* <Button type="submit">Save changes</Button> */}
      </DialogFooter>
    </Moodle>
  );
}
