import { useMemo } from "react";
import ListOverflow from "./listOverflow";

import { Button } from "../ui/button";
import NormalMoodle from "./normalMoodle";

export default function SaleMoodle({ hide }) {
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
  console.log("been here");
  return (
    <NormalMoodle hide={hide}>
      <div className="flex justify-start my-2">
        <h3 className="w-3/12">Client name:</h3>
        <span>blhab lahf</span>
      </div>
      <div className="flex justify-start my-2 border-b-2 border-black">
        <h3 className="w-3/12">Town:</h3>
        <span>blhab lahf</span>
      </div>
      <ListOverflow
        totalPrice={total}
        data={defaultData}
        header={"Ordere items"}
      ></ListOverflow>
      <footer className="flex p-1 justify-start items-start w-full">
        <span className="mr-2 font-bold">Note: </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          veniam suscipit volupt
        </p>
      </footer>
    </NormalMoodle>
  );
}
