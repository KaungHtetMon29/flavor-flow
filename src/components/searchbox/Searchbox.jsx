import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox({ placeholder }) {
  return (
    <div className="flex gap-2 ">
      <Input
        type="text"
        placeholder={placeholder}
        className="w-72 border-black border-opacity-50"
      />
      <Button className="text-[18px]">Search</Button>
    </div>
  );
}
