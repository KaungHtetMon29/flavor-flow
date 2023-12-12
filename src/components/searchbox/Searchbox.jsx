import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox({ placeholder }) {
  return (
    <div className="flex gap-2">
      <Input type="text" placeholder={placeholder} />
      <Button>Search</Button>
    </div>
  );
}
