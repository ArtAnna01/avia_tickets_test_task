import { useState } from "react";
import Flight from "./Flight";

function Ticket({ flights }) {
  const [more, setMore] = useState(2);
  return (
    <div className="flex flex-col w-full">
      {flights.slice(0, more).map((el, id) => {
        return (
          <div className="m-5 w-5/6" key={el.flightToken}>
            <Flight ticket={el} leg={0} />
            <Flight ticket={el} leg={1} />
            <button className="bg-orange-400 text-white w-full h-8">
              ВЫБРАТЬ
            </button>
          </div>
        );
      })}
      <button
        className="m-5 w-5/6 border border-black"
        onClick={() => setMore((prev) => prev + 2)}
      >
        Показать еще
      </button>
    </div>
  );
}

export default Ticket;
