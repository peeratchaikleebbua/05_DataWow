import { Button } from "@/features/_shared/components/elements/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/features/_shared/components/elements/dialog";
import { Input } from "@/features/_shared/components/elements/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/features/_shared/components/elements/select";
import { DialogClose, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

import { Copy } from "lucide-react";
import React from "react";

const PostAction = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <Input className="col-span-3" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Create +</Button>
      </div>
      {/* create post modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy />
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
    </>
  );
};

export default PostAction;
