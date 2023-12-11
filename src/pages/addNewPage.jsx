import DeliveryMoodle from "@/components/Navbar/moodles/deliveryModle";
import SaleMoodle, { SaleDialog } from "@/components/Navbar/moodles/saleModle";
import TruckMoodle from "@/components/Navbar/moodles/truckMoodle";

export default function AddNewPage() {
  return (
    <>
      <div className=" w-full h-full flex flex-col m-3 p-4">
        <section className="flex justify-start flex-col p-1 w-fit m-1">
          <div className="flex justify-center p-2 items-center">
            <lable className="min-w-[100px]">Client:</lable>
            <input className=" p-2 rounded-md min-w-[200px] border outline-primary" />{" "}
          </div>
          <div className="flex justify-center p-2 items-center ">
            <lable className="min-w-[100px]">Due date:</lable>
            <input className=" p-2 rounded-md min-w-[200px] border outline-primary" />{" "}
          </div>
        </section>
        <hr />
        <section className=" border ">
          <ul className="flex flex-col overflow-auto justify-between items-center py-2 px-2 border-2 max-h-[30vh] w-full">
            <li className="flex justify-between items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
            <li className="flex justify-between my-2 items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
            <li className="flex justify-between items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
            <li className="flex justify-between my-2 items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
            <li className="flex justify-between items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
            <li className="flex justify-between my-2 items-center w-full">
              <div className="flex justify-between">
                <label>Items info:</label>
                <input type="text" className="border rounded-lg" />
              </div>
              <div className="flex justify-between">
                <label>Quantity:</label>
                <input type="number" className="border rounded-lg" />
              </div>
              <input disabled type="number" />
              <button className="border rounded-full p-3 hover:bg-red-400">
                -
              </button>
            </li>
          </ul>
        </section>
        <p className="m-2">Total Price: 10000ks</p>
        <button className=" p-2 rounded-md border-2 w-fit mx-4 hover:bg-green-400">
          Add new
        </button>
        <div className="flex justify-between w-fit my-2">
          <input className=" border-2 p-2 mx-1" type="checkbox" />
          <span>Urgent</span>
        </div>
        <div className="flex my-2 justify-start items-center">
          <span className=" mr-2">Note :</span>
          <input
            type="text"
            className=" p-1 rounded-md border-2 outline-primary"
          />
        </div>
        <SaleDialog />
        <DeliveryMoodle />
        <TruckMoodle />
      </div>
    </>
  );
}
