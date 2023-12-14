import { useEffect, useMemo, useState } from "react";
import ListOverflow from "./listOverflow";

import NormalMoodle from "./normalMoodle";
import axios from "axios";

export default function SaleMoodle({ hide, data }) {
  const [orderItems, setOrderItems] = useState([]);
  const fetchOrderItems = async () => {
    const response = await axios.get(
      `https://flavor-wave-api.onrender.com/api/v1/preorders/${data.id}/preorder_items`
    );
    console.log("fetched datassss:", response.data);
    return setOrderItems(response.data);
  };

  useEffect(() => {
    fetchOrderItems();
  }, [data.id]);
  console.log("fetched data:", orderItems);
  return (
    <NormalMoodle hide={hide}>
      <div className="flex justify-start my-2">
        <h3 className="w-3/12">Permission:</h3>
        <span>{data.permission ? "Need permission" : "Granted"}</span>
      </div>
      <div className="flex justify-start my-2">
        <h3 className="w-3/12">Client name:</h3>
        <span>{data.client.name}</span>
      </div>
      <div className="flex justify-start my-2 border-b-2 border-black">
        <h3 className="w-3/12">Region:</h3>
        <span>{data.client.region}</span>
      </div>

      <ListOverflow
        total={data.total}
        data={orderItems}
        header={"Ordere items"}
      ></ListOverflow>
      <div className="flex justify-start text-lg my-2">
        <h3 className="w-3/12 font-bold">Urgent:</h3>
        <span className=" italic">{data.urgent ? "Yes" : "No"}</span>
      </div>
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
