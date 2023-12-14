import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/button";
import { CiSquareMinus } from "react-icons/ci";
import { Checkbox } from "../ui/checkbox";
import { Blah } from "./truckMoodle";
import { Input } from "../ui/input";
import OrderMoodle from "./createOrderMoodle";
import { IoMdArrowRoundBack } from "react-icons/io";
import clsx from "clsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "@/redux/stockSlice";
import axios from "axios";
var currentId = 1;
var defaultItemsInfo = [
  {
    itemInfo: "",
    quantity: 0,
    price: 1000,
    id: 0,
    unit_price: 0,
    availableQuantity: 10,
  },
];
export default function AddNewOrder() {
  const [itemData, setItemData] = useState(defaultItemsInfo);

  const [currentSearching, setCurrentSearching] = useState(false);

  const [selectedItemInfo, setSelectedItemInfo] = useState({});

  const [clientNameCheck, setClientNameCheck] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [hasTouched, sethasTouched] = useState(false);

  const [hasTouchedDate, sethasTouchedDate] = useState(false);

  const [hasTouchedQty, sethasTouchedQty] = useState(false);
  const [urgent, seturgent] = useState(false);
  const [note, setnote] = useState("");
  const ref = useRef();
  const isValidToSubmit = useCallback(() => {
    const isValid = !itemData.find(
      (item) => item.itemInfo === "" || item.quantity <= 0
    );
    return isValid;
  }, [itemData]);

  const handleAddItemInfo = () => {
    if (isValidToSubmit()) {
      currentId += 1;
      setItemData((items) => [
        ...items,
        {
          itemInfo: "",
          quantity: 0,
          price: 0,
          id: currentId,
          unit_price: 0,
          availableQuantity: 10,
        },
      ]);
    }
  };

  const handleRemoveItemInfo = (itemId) => {
    setItemData((itemData) => itemData.filter((item) => item.id !== itemId));
  };

  const total = useMemo(() => {
    let total = 0;
    defaultItemsInfo.forEach((item) => (total += item.price));
    return total;
  }, [defaultItemsInfo]);

  const handleChangeQuantity = (quantity, id) => {
    setItemData((itemData) =>
      itemData.map((item) => {
        if (item.id === id) {
          const validQuantity =
            quantity <= item.availableQuantity
              ? quantity
              : item.availableQuantity;
          return {
            ...item,
            quantity: validQuantity,
            price: validQuantity * item.unit_price,
          };
        }
        return item;
      })
    );
  };

  const handleChangeItemInfo = (incomingItem) => {
    setCurrentSearching(false);
    console.log(incomingItem, "is incoming item");
    setItemData((itemData) =>
      itemData.map((item) => {
        if (item.id === incomingItem.id) {
          return incomingItem;
        }
        return item;
      })
    );
  };

  //Client info and Due Date info Validation// line 117 and line 127

  const validateClientName = (e) => {
    const inputLength = e.target.value;
    setClientNameCheck(inputLength);
    sethasTouched(true);
  };

  const validateDueDate = (e) => {
    const inputLength = e.target.value;
    setDueDate(inputLength);
    sethasTouchedDate(true);
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className=" w-full h-full flex flex-col text-[20px] gap-2 overflow-hidden">
        <section className="flex justify-start flex-col p-1 w-fit mx-1">
          <div className="flex justify-between  p-2 items-center">
            <label className="min-w-[100px]">Client :</label>
            <div className="relative w-full">
              {/* <Blah
							/> */}
              <input
                type="text"
                className={`border-primary p-2 rounded-md min-w-[200px] border outline-primary h-10 ${
                  hasTouched && clientNameCheck.length === 0
                    ? "border-red-300 border-2"
                    : "border-slate-300"
                }`}
                onChange={(e) => validateClientName(e)}
                value={clientNameCheck}
                onBlur={() => sethasTouched(true)}
              />
            </div>

            {/* <input className="border-primary p-2 rounded-md min-w-[200px] border outline-primary" /> */}
          </div>
          <div className="flex justify-center p-2 items-center ">
            <label className="min-w-[100px]">Due date:</label>
            <input
              className={`border-primary p-2 rounded-md min-w-[200px] border outline-primary h-10 ${
                hasTouchedDate && dueDate.length === 0
                  ? "border-red-300 border-2"
                  : "border-slate-300"
              }`}
              onChange={(e) => validateDueDate(e)}
              placeholder="DD/MM/YYYY"
              value={dueDate}
            />
          </div>
        </section>

        {itemData.length !== 0 && (
          <section className="p-4 flex w-full justify-start">
            <div className="w-1/12">
              <p className="py-6">Items info:</p>
            </div>
            <ul className="flex flex-col gap-6 overflow-auto justify-between items-center py-6 px-2 border-y-2 rounded-none w-full max-h-[40vh] ">
              {itemData.map((item, index) => (
                <li
                  className="flex justify-between ease-in-out items-center w-full"
                  key={index}
                >
                  <div className="flex justify-between relative">
                    <Button
                      variant="outline"
                      className="min-w-[200px]"
                      onClick={() => {
                        setCurrentSearching(true);
                        setSelectedItemInfo(item);
                      }}
                    >
                      {item.itemInfo}
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      min={"0"}
                      max={JSON.stringify(item.availableQuantity)}
                      className={clsx(
                        " block outline-none p-2 min-w-[100px] border rounded-md  ",
                        {
                          " outline-1 outline-red-500": item.quantity <= 0,
                        }
                      )}
                      value={item.quantity}
                      onChange={(e) =>
                        handleChangeQuantity(e.target.value, item.id)
                      }
                    />
                  </div>
                  <span>{item.price}ks</span>

                  <CiSquareMinus
                    className="text-4xl cursor-pointer"
                    onClick={() => {
                      if (itemData.length === 1) {
                        return;
                      } else {
                        handleRemoveItemInfo(item.id);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
        <div className="flex items-center m-2">
          <div className=" flex justify-start px-1 gap-4 grow">
            <span className="font-bold">Total Price:</span>
            <div>{total}ks</div>
          </div>
          <div>
            <Button
              className={clsx("w-fit text-[18px]", {
                " bg-slate-500 hover:bg-slate-500": !isValidToSubmit(),
              })}
              onClick={handleAddItemInfo}
            >
              Add New
            </Button>
          </div>
        </div>

        <div className="flex gap-16 items-center w-full  mx-2">
          <div className="flex gap-2">
            <Button className={"w-fit text-[18px]"}>Cancel</Button>
            <Button
              className={`w-fit ftext-[18px] bg-primary text-primary-foreground hover:bg-primary/90 ${
                !isValidToSubmit() && "bg-slate-500 hover:bg-slate-500"
              } ${
                clientNameCheck.length > 0 &&
                dueDate.length > 0 &&
                isValidToSubmit()
                  ? ""
                  : "bg-slate-500 hover:bg-slate-500"
              }`}
              onClick={() => {
                if (isValidToSubmit()) {
                  Formupload(clientNameCheck, dueDate, itemData, urgent, note);
                } else {
                  console.log("hi");
                }
              }}
            >
              Confirm
            </Button>
          </div>

          <div className="flex justify-between items-center gap-2 w-fit my-2">
            <Checkbox
              className="border-2 w-6 h-6"
              checked={urgent}
              onClick={() => seturgent(!urgent)}
            />
            <span>Urgent</span>
          </div>
          <div className="flex my-2 mx-2 justify-start items-center">
            <span className=" mr-2">Note :</span>
            <input
              ref={ref}
              type="text"
              className=" p-1 rounded-md border-2 outline-primary w-80"
            />
          </div>
        </div>
        {/* orderMoodle */}
        {currentSearching ? (
          <div
            onClick={() => setCurrentSearching(false)}
            className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-20 flex items-center justify-center"
          >
            <section
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative h-fit min-w-[30vw] z-[88] max-w-[40vw] border-2 rounded-md bg-white p-11 pt-16  flex justify-center items-center"
            >
              <Button
                className="w-fit absolute text-lg top-1 left-1 hover:bg-red-500"
                variant="outline"
                onClick={() => setCurrentSearching(false)}
              >
                <IoMdArrowRoundBack />
              </Button>
              <ItemName
                onSelectInfo={handleChangeItemInfo}
                data={selectedItemInfo}
              />
              {console.log(selectedItemInfo)}
              <Button className=" mx-2" onClick={() => handleChangeItemInfo()}>
                Ok
              </Button>
            </section>
          </div>
        ) : null}
      </div>
    </>
  );
}

export const Formupload = (client, date, items, urgent, note) => {
  console.log({
    client: client,
    date: date,
    items: items,
    urgent: urgent,
    note: note,
  });
};

export function ItemName({ onSelectInfo, data, selectedCommandItem }) {
  const stockselector = useSelector((state) => state.stock);
  //redux data
  const truckLists = stockselector.stocks;
  const [allTruck, setAllTruck] = useState(truckLists);
  const [commandText, setCommandText] = useState("");
  const [value, setValue] = useState({});
  //   const [finalItem, setFinalItem] = useState({});

  console.log(allTruck, "is trucklsit");
  const handleChangeItemInfo = (item) => {
    onSelectInfo({
      ...data,
      itemId: item.id,
      availableQuantity: item.quantity,
      price: data.quantity * item.unit_price,
      unit_price: item.unit_price,
      itemInfo: item.name,
    });
  };

  useEffect(() => {
    if (!commandText) {
      setAllTruck([]);
    }
  }, []);

  useEffect(() => {
    if (commandText) {
      let data = axios
        .get(
          `https://flavor-wave-api.onrender.com/api/v1/stocks?search=${commandText}`
        )
        .then((response) => {
          // Assuming the server response is an array of data
          setAllTruck(response.data);
        });
    } else {
      setAllTruck([]);
    }
  }, [commandText]);

  return (
    <Command className="min-w-[200px] max-w-[40vw] ">
      {console.log(allTruck)}
      <Input
        onChange={(e) => {
          setCommandText(e.target.value);
          setValue("");
        }}
        placeholder="search"
        value={commandText}
        className=""
      />
      {commandText && allTruck.length === 0 && value === 0 ? (
        <CommandEmpty className="bg-white border rounded-md text-center text-sm italic p-2">
          No result.
        </CommandEmpty>
      ) : null}
      {/* {console.log(allTruck.length !== 0)} */}
      {commandText.length !== 0 || !value ? (
        <CommandGroup
          className={
            "max-h-[40vh]  border absolute mt-10 bg-white min-w-[100px] max-w-[40vw] z-[99] " +
            (!commandText || allTruck.length === 0 || value ? "hidden" : "")
          }
        >
          {allTruck.length > 0 &&
            allTruck.map((truck) => (
              <CommandItem
                key={truck.id}
                value={truck.name}
                onSelect={(currentValue) => {
                  console.log(truck, "is truck on slec");
                  setValue(truck);
                  setCommandText(currentValue);
                  handleChangeItemInfo(truck);
                }}
              >
                {truck.name}
              </CommandItem>
            ))}
        </CommandGroup>
      ) : null}
    </Command>
  );
}
