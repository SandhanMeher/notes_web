import React from "react";
import { useState ,useEffect } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState(
        "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate."
      );
      useEffect(() => {
        fetch("https://api.quotable.io/quotes/random?tags=technology,famous-quotes")
          .then((res) => res.json())
          .then((datass) => {
            console.log(datass);
            setQuotes(datass[0].content);
          });
      }, []);
  return (
    <div className=" w-full h-52 flex justify-center items-center  px-10">
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-opacity-75  text-white text-center ">
        {" ''   " + quotes + "   ''"}
      </p>
    </div>
  );
}
