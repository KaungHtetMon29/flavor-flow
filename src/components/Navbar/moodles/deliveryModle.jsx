export default function DeliveryMoodle() {
  return (
    <>
      <div className=" fixed w-full h-full top-0 left-0 flex justify-center items-center backdrop-blur-sm">
        <section className=" relative flex flex-col justify-start p-10 min-w-[40vw] max-w-[50vw] rounded-lg border-2">
          <button className=" w-fit p-1 rounded-md border-2">
            Back button
          </button>
          {/* order detail */}
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
          <h4 className="font-bold">Order items</h4>
          <hr />
          <ul className="w-full flex flex-col justify-start max-h-[26vh] overflow-auto">
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
            <span>10000 ks</span>
          </div>
        </section>
      </div>
    </>
  );
}
