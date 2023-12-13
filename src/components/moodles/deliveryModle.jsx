import { useEffect, useMemo, useState } from "react";
import ListOverflow from "./listOverflow";
import { Button } from "../ui/button";
import NormalMoodle from "./normalMoodle";
import { useDispatch, useSelector } from "react-redux";

export default function DeliveryMoodle({
  hide,
  DeliveryName,
  orderId,
  TruckId,
  capacity,
}) {
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
  // const deliveryInfo = useSelector((state)=>state.delivery.)
  const dispatch = useDispatch();

  const [orderItems, setOrderItems] = useState([]);
  const total = useMemo(() => {
    let total = 0;
    defaultData.forEach((data) => (total += data.price));
    return total;
  }, [defaultData]);
  console.log("been here");
  useEffect(() => {});
  return (
    <NormalMoodle hide={hide}>
      <div className="flex justify-start flex-col my-2 border-b-2">
        <ul className="flex flex-col min-w-[29vw] max-w-[60vw]">
          <li className="w-full justify-start">
            <div className="flex justify-between w-full">
              <span>Delivery Name:</span>
              <span>{DeliveryName}</span>
            </div>
          </li>
          <li className="w-full justify-start">
            <div className="flex justify-between w-full">
              <span>TruckId:</span>
              <span>{TruckId}</span>
            </div>
          </li>
          <li className="w-full justify-start">
            <div className="flex justify-between w-full">
              <span>capacity:</span>
              <span>{capacity}</span>
            </div>
          </li>
        </ul>
      </div>
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
      <ListOverflow
        data={defaultData}
        header={"order items"}
        totalPrice={total}
      ></ListOverflow>
    </NormalMoodle>
  );
}
