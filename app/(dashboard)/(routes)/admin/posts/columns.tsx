"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import { AlertDialogModal } from "@/components/alart-dialog";
import { Preview } from "@/components/preview";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UseDeletePostMutation } from "@/redux/api/postApi";
import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<IPost>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <Image
          src={post.image} // Make sure "image" is a valid path to your image
          alt={post.title} // Use the appropriate alt text
          width={100} // Customize the width of the image
          height={100} // Customize the height of the image
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      return <Preview value={row.original.content?.slice(0, 50)!} />;
    },
  },

  {
    accessorKey: "authorId",
    header: "Author",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original;
      const [deletePost] = UseDeletePostMutation();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(post.id)}
            >
              Copy Post ID
            </DropdownMenuItem>
            <Link href={`/admin/posts/edit/${post.id}`}>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </Link>
            <Link href={`/admin/posts/details/${post.id}`}>
              <DropdownMenuItem>Details</DropdownMenuItem>
            </Link>
            {/* <DropdownMenuItem> */}
            {/* <DialogCloseButton
                handleDelete={() => deletePost(post.id)}
              /> */}
            <AlertDialogModal
              title="Delete"
              handleDelete={() => deletePost(post.id)}
            />
            {/* </DropdownMenuItem> */}
            <DropdownMenuSeparator />

            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
