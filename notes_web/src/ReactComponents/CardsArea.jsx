import React from "react";
import a from "../assets/datas";
import CardWithForm from "./CardWithForm";

export default function CardsArea() {
  return (
    <div className="flex  items-center flex-wrap justify-around mt-6 gap-9">
      {a.map((e ,index) => (
        
        <CardWithForm key={index}
          bookName={e.bookName}
          aboutBook={e.aboutBook}
          notesLinks={e.notesLinks}
          notesOf={e.notesOf}
        />
      ))}
    </div>
  );
}
