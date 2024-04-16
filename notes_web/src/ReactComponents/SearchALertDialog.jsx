import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import a from "@/assets/datas";
export default function SearchALertDialog() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(a);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };

  var filteredItems = items.filter((item) =>
    item.bookName.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  console.log(filteredItems)
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" mx-auto w-32">
        <Button variant="secondary" className="  text-lg">
          Search Notes{" "}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-black max-sm:w-80 rounded-lg lg:bg-slate-900 ">
        <AlertDialogHeader>
          <div className=" flex flex-col justify-center w-full  ">
            <Input
              type="text"
              placeholder=" Search Notes..."
              className="bg-black text-white lg:mr-5 mb-6 max-sm:bg-white max-sm:text-black font-bold text-lg "
              onKeyUp={handleInputChange}
              autoFocus
            />
            <div className=" w-full h-20 lg:h-32 lg:bg-slate-700  bg-black outline outline-2 outline-white rounded-lg px-5 overflow-y-auto flex flex-col items-center  ">
              {filteredItems.map((eleme, index) => (
                <Link
                  to={eleme.bookName.replace(/\s/g, "").toLowerCase()}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900}
                  key={index}
                  className="  w-full py-1 sm:my-1 "
                >
                  <AlertDialogCancel className=" mx-auto h-9 w-full bg-slate-950 text-white lg:my-1 -mb-3 ">
                    {eleme.bookName}
                  </AlertDialogCancel>
                </Link>
              ))}
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
          {/* <ScrollArea /> */}
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
