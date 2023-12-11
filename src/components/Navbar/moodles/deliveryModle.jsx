import { useMemo } from "react";
import Moodle from "./moodleComponent";
import ListOverflow from "./listOverflow";

export default function DeliveryMoodle() {
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
    <Moodle moodleName={"Delivery Moodle"}>
      <section className=" relative flex flex-col justify-start p-10 w-full rounded-lg ">
        <div className="flex justify-start flex-col my-2">
          <ul className="flex flex-col w-full">
            <li className="w-full justify-start">
              <div className="flex justify-between w-full">
                <span>Delivery Name:</span>
                <span>blah</span>
              </div>
            </li>
            <li className="w-full justify-start">
              <div className="flex justify-between w-full">
                <span>TruckId:</span>
                <span>blah</span>
              </div>
            </li>
            <li className="w-full justify-start">
              <div className="flex justify-between w-full">
                <span>capacity:</span>
                <span>20</span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        {/* user detail */}
        <div className="flex justify-start flex-col my-2">
          <ul className="flex flex-col w-full">
            <li className="w-full justify-start">
              <div className="flex justify-between w-full">
                <span>Client Name:</span>
                <span>blah</span>
              </div>
              <div className="flex justify-between w-full">
                <span>Town:</span>
                <span>blah</span>
              </div>
            </li>
          </ul>
        </div>
        <ListOverflow data={defaultData} header={"order items"}>
          <hr />
          <div className=" flex justify-start">
            <h5>Total : </h5>
            <span>{total}ks</span>
          </div>
        </ListOverflow>
      </section>
    </Moodle>
  );
}
