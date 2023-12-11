export default function ListOverflow({ children, data, header }) {
  return (
    <>
      <h4 className="font-bold">{header}</h4>
      <hr />
      <ul className="w-full flex flex-col justify-start max-h-[26vh] overflow-auto">
        {data.map((data, index) => (
          <li key={index} className=" flex justify-between p-1">
            <h5>{data.name}</h5>
            <h5>{data.quantity}</h5>
            <h5>{data.price}ks</h5>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}
