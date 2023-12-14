// unorderlist for incoming datas with scrolling bar

import { set } from "date-fns";
import { useEffect, useState } from "react";

export default function ListOverflow({ children, data, header }) {
  const [total, setTotal] = useState(0);
  const totalFun = () => {
    let totals = 0;
    data.forEach((item) => {
      totals += item.stock.unit_price * item.quantity;
    });
    setTotal(totals);
  };
  useEffect(() => {
    totalFun();
  }, [data]);
  return (
    <>
      <h4 className="font-bold">{header}</h4>

      <ul className="w-full flex flex-col border-b-2 border-black my-2 justify-start max-h-[26vh] overflow-auto">
        <li className=" flex justify-between font-bold p-1">
          <h5 className=" min-w-[200px]">name</h5>
          <h5>quantity</h5>
          <h5>price</h5>
        </li>
        {data.length === 0 ? <span>No order item data</span> : null}
        {data.map((data) => (
          <li key={data.id} className=" flex justify-between p-1">
            <h5 className=" min-w-[200px]">{data.stock.name}</h5>
            <h5>{data.quantity}</h5>
            <h5>{data.stock.unit_price}ks</h5>
          </li>
        ))}
      </ul>
      <div className=" flex justify-end pr-5 gap-3 pb-2 border-b-2 border-black">
        <h5 className="font-bold ">Total : </h5>
        <span>{total}ks</span>
      </div>
      {children}
    </>
  );
}
