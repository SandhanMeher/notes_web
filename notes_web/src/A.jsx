import React, { useState, useEffect } from "react";

import SearchALertDialog from "./ReactComponents/SearchALertDialog";
import TitleName from "./ReactComponents/TitleName";
import Quotes from "./ReactComponents/Quotes";
import CardsArea from "./ReactComponents/CardsArea";
import MoveUpIcon from "./ReactComponents/MoveUpIcon";

export default function A() {
  return (
    <>
      <div
        className=" bg-black w-screen min-h-screen flex flex-col pt-20  md:justify-around lg:px-32 "
        id="a"
      >
        <TitleName />
        <SearchALertDialog />
        <Quotes />
        <CardsArea/>
        <MoveUpIcon/>
      </div>
    </>
  );
}
