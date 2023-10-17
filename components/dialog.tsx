import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogCloseButtonProps = {
  handleDelete: () => void;
};

export function DialogCloseButton({ handleDelete }: DialogCloseButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete This Item</DialogTitle>
          <DialogDescription>
            Are You Sure To Delete This Item?
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => handleDelete()}
            type="submit"
            size="sm"
            className="px-3"
          >
            Delete
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
