import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox() {
  return (
    <div className="flex gap-2">
      <Input type="text" placeholder="Enter Email" />
      <Button>Search</Button>
    </div>
  );
}
