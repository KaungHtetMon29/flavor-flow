export default function StockMoodle() {
  return (
    <>
      <div className=" fixed w-full h-full top-0 left-0 flex justify-center items-center backdrop-blur-sm">
        <section className=" relative flex flex-col justify-start p-10 min-w-[40vw] max-w-[50vw] rounded-lg border-2">
          <label>Record No:</label>
          <input className=" border rounded-md p-1 my-3" type="text" />
          <label>Truck No:</label>
          <input className=" border rounded-md p-1 my-3" type="text" />
          <button className="w-fit p-2 rounded-md border hover:bg-green-400 hover:text-white">
            Add items
          </button>
        </section>
      </div>
    </>
  );
}
