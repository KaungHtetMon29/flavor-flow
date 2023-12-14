import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox({ searchByClientName, placeholder }) {
  const [input, setinput] = useState("");
  const inputref = useRef(null);
  return (
    <div className="flex gap-2 ">
      <Input
        placeholder={placeholder}
        ref={inputref}
        type="text"
        className="w-72 rounded-md border-black border-opacity-30 shadow-lg"
      />
      <Button
        className="text-[18px] bg-secondarycolor shadow-lg"
        onClick={() => searchByClientName(inputref.current.value)}
      >
        Search
      </Button>
    </div>
  );
}
