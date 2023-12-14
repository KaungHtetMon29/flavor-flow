import { useEffect, useMemo, useState } from "react";
import ListOverflow from "./listOverflow";
import { Button } from "../ui/button";
import NormalMoodle from "./normalMoodle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function DeliveryMoodle({ hide, data }) {
  console.log("my data deli", data);
  return (
    <NormalMoodle hide={hide}>
      <section className="flex justify-start flex-col my-2 border-b-4">
        <ul className="flex flex-col w-full ">
          {data ? (
            <>
              <li className="w-full justify-start my-1">
                <div className="flex justify-between w-full">
                  <span>Order Id:</span>
                  <span>{data.preorder_id}</span>
                </div>
              </li>
              <li className="w-full justify-start my-1">
                <div className="flex justify-between w-full">
                  <span>Driver Name:</span>
                  <span>{data.truck.driver}</span>
                </div>
              </li>
              <li className="w-full justify-start my-1">
                <div className="flex justify-between w-full">
                  <span> Truck Id:</span>
                  <span>{data.truck.license}</span>
                </div>
              </li>
              <li className="w-full justify-start my-1">
                <div className="flex justify-between w-full">
                  <span>Capacity:</span>
                  <span>{data.truck.capacity}</span>
                </div>
              </li>
            </>
          ) : null}
        </ul>
      </section>
      {/* user detail */}
      <section className="flex justify-start flex-col my-2">
        <ul className="flex flex-col w-full">
          <li className=" w-full justify-start my-1">
            <div className="flex justify-between w-full">
              <span>Client name:</span>
              <span>{data.preorder.client.name}</span>
            </div>
          </li>
          <li className=" w-full justify-start my-1">
            <div className=" flex justify-between w-full">
              <span>client's Phone No:</span>
              <span>{data.preorder.client.phone}</span>
            </div>
          </li>
          <li className=" w-full justify-start my-1">
            <div className=" flex justify-between w-full">
              <span>Address:</span>
              <span>{data.preorder.client.address}</span>
            </div>
          </li>
        </ul>
      </section>
    </NormalMoodle>
  );
}
