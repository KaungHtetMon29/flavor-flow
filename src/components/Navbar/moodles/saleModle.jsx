export default function SaleMoodle() {
  return (
    <>
      <div className=" fixed w-full h-full top-0 left-0 flex justify-center items-center backdrop-blur-sm">
        <section className=" relative flex flex-col justify-start p-10 min-w-[40vw] max-w-[50vw] rounded-lg border-2">
          <button className=" w-fit p-1 rounded-md border-2">
            Back button
          </button>
          <div className="flex justify-start my-2">
            <input
              className=" border-b-2 outline-none w-full"
              placeholder="Town:"
              type="text"
            />
          </div>
          <h4 className="font-bold">Order items</h4>
          <hr />
          <ul className="flex flex-col justify-start overflow-auto max-h-[26vh]">
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
            <li className=" flex justify-between p-1">
              <h5>blah blah</h5>
              <h5>10 bottle</h5>
              <h5>1000ks</h5>
            </li>
          </ul>
          <hr />
          <div className=" flex justify-start">
            <h5>Total : </h5>
            <span>1000 ks</span>
          </div>
          <footer className="flex p-1 justify-start items-start w-full">
            <span className="mr-2 font-bold">Note: </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos veniam suscipit volupt
            </p>
          </footer>
        </section>
      </div>
    </>
  );
}
