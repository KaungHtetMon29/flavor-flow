import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox({ placeholder }) {
  const [sinput, setinput] = useState("");
  const inputref = useRef(null);
  return (
    <div className="flex gap-2 ">
      <Input
        ref={inputref}
        type="text"
        placeholder={placeholder}
        className="w-72 rounde border-black border-opacity-50"
      />
      <Button
        className="text-[18px]"
        onClick={() => setinput(inputref.current.value)}
      >
        Search
      </Button>
    </div>
  );
}
