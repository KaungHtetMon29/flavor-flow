import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Moodle({ children, moodleName }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{moodleName} </Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[30vw]">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
        <div className="grid gap-2 py-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
