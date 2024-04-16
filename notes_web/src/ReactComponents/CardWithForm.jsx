import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
import { Button } from "@/components/ui/button";

export default function CardWithForm({
  bookName = "books  A a a",
  aboutBook = "your new project in one-click.",
  notesLinks = "",
  notesOf
}) {
  return (
    <Card
      className="w-[300px] bg-slate-200 outline outline-3 outline-offset-2 group hover:outline-green-300  hover:scale-105 duration-700 ease-in-out hover:bg-white"
      id={bookName.replace(/\s/g, "").toLowerCase()}
      
    >
      
      <CardHeader>
        <CardTitle>{bookName}</CardTitle>
        <CardDescription>{aboutBook}</CardDescription>
        
      </CardHeader>

      <CardFooter className="flex justify-end" >
      <p className=" flex-1">{notesOf}</p>
        <a href={notesLinks} target="_self">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 group-hover:animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
