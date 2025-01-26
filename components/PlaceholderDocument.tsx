"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function PlaceholderDocument() {
  const router = useRouter();

  const handleClick = () => {
    // check if user is free tier and if they are over file limit then pish them to upgrade screen
    router.push("/documents/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
}
