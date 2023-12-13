import { useCallback, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { CiSquareMinus } from "react-icons/ci";
import { Checkbox } from "../ui/checkbox";
import { Blah } from "./truckMoodle";
import { Input } from "../ui/input";
import OrderMoodle from "./createOrderMoodle";
import { IoMdArrowRoundBack } from "react-icons/io";
import clsx from "clsx";
var currentId = 1;
var defaultItemsInfo = [
  { itemInfo: "blah blah", quantity: 0, price: 1000, id: 0 },
];
export default function AddNewOrder() {
  const [itemData, setItemData] = useState(defaultItemsInfo);
  const [currentSearching, setCurrentSearching] = useState(false);
  const [selectedItemInfo, setSelectedItemInfo] = useState({});
  const handleAddItemInfo = () => {
    currentId += 1;
    setItemData((items) => [
      ...items,
      { itemInfo: "blah blah", quantity: 10, price: 1000, id: currentId },
    ]);
  };
  const handleRemoveItemInfo = (itemId) => {
    setItemData((itemData) => itemData.filter((item) => item.id !== itemId));
  };

  const total = useMemo(() => {
    let total = 0;
    defaultItemsInfo.forEach((item) => (total += item.price));
    return total;
  }, [defaultItemsInfo]);

  const isValidToSubmit = useCallback(() => {
    const isValid = !itemData.find(
      (item) => item.itemInfo === "" || item.quantity <= 0
    );
    console.log(isValid);
    return isValid;
  }, [itemData]);

  const handleChangeQuantity = (quantity, id) => {
    setItemData((itemData) =>
      itemData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      })
    );
  };
  const handleChangeItemInfo = () => {
    setCurrentSearching(false);
    setItemData((itemData) =>
      itemData.map((item) => {
        if (item.id === selectedItemInfo.id) {
          return {
            ...item,
            itemInfo: selectedItemInfo.itemInfo,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className=" w-full h-full flex flex-col text-[20px] gap-2 overflow-hidden">
        <section className="flex justify-start flex-col p-1 w-fit mx-1">
          <div className="flex justify-between  p-2 items-center">
            <label className="min-w-[100px]">Client:</label>
            <div className="relative w-full">
              <Blah onSelectInfo={() => console.log("blah")} data={""} />
            </div>

            {/* <input className="border-primary p-2 rounded-md min-w-[200px] border outline-primary" /> */}
          </div>
          <div className="flex justify-center p-2 items-center ">
            <label className="min-w-[100px]">Due date:</label>
            <input className="border-primary p-2 rounded-md min-w-[200px] border outline-primary" />
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
                    <Input
                      type="number"
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
            <Button className={"w-fit text-[18px]"} onClick={handleAddItemInfo}>
              Add New
            </Button>
          </div>
        </div>

        <div className="flex gap-16 items-center w-full  mx-2">
          <div className="flex gap-2">
            <Button className={"w-fit text-[18px]"}>Cancel</Button>
            <Button
              className={clsx("w-fit text-[18px]", {
                " bg-slate-700": !isValidToSubmit,
              })}
              onClick={() => {
                if (isValidToSubmit) {
                  return console.log("submit");
                } else {
                  return;
                }
              }}
            >
              Confirm
            </Button>
          </div>

          <div className="flex justify-between items-center gap-2 w-fit my-2">
            <Checkbox className="border-2 w-6 h-6" />
            <span>Urgent</span>
          </div>
          <div className="flex my-2 mx-2 justify-start items-center">
            <span className=" mr-2">Note :</span>
            <input
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
              <Blah
                onSelectInfo={setSelectedItemInfo}
                data={selectedItemInfo}
              />
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
