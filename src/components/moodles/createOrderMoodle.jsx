import { Button } from "../ui/button";
import { Blah } from "./truckMoodle";
import { useState } from "react";

export default function OrderMoodle({ onSubmit, itemInfo }) {
  const [item_Info, setItem_Info] = useState(itemInfo.itemInfo);
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex items-center justify-center">
      <section className="h-fit min-w-[30vw] max-w-[40vw] border-2 rounded-md bg-white p-10 flex justify-center items-center">
        <Blah onSelectInfo={setItem_Info} data={""} />
        <Button onClick={onSubmit(item_Info)}>Ok</Button>
      </section>
    </div>
  );
}
