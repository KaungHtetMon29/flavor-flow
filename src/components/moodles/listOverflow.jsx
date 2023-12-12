// unorderlist for incoming datas with scrolling bar

export default function ListOverflow({ children, data, header, totalPrice }) {
  return (
    <>
      <h4 className="font-bold">{header}</h4>

      <ul className="w-full flex flex-col border-b-2 border-black my-2 justify-start max-h-[26vh] overflow-auto">
        {data.map((data, index) => (
          <li key={index} className=" flex justify-between p-1">
            <h5>{data.name}</h5>
            <h5>{data.quantity}</h5>
            <h5>{data.price}ks</h5>
          </li>
        ))}
      </ul>

      <div className=" flex justify-start border-b-2 border-black">
        <h5 className="font-bold ">Total : </h5>
        <span>{totalPrice}ks</span>
      </div>
      {children}
    </>
  );
}
