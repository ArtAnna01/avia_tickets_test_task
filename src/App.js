import React, { useState, useEffect, useMemo } from "react";
import SortingFlights from "./components/SortingFlights";
import Ticket from "./components/Ticket";

const reducer = (arr) => {
  return arr.reduce((prev, curr) => prev.duration + curr.duration);
};

function App() {
  const [filter, setFilter] = useState({ active: null });
  const [range, setRange] = useState({ min: 0, max: 0 });
  const [sortType, setSortType] = useState("desc");
  const [flights, setFlights] = useState([]);

  const handleRange = (e) => {
    setRange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleSortType = (e) => {
    setSortType(e.target.name);
  };

  const toggleFilter = (e) => {
    if (e.target.name === filter.active) {
      setFilter({ active: null });
    } else {
      setFilter({ active: e.target.name });
    }
  };

  const handleSort = (array) => {
    if (sortType === "time") {
      let sorted = [...array].sort((a, b) => {
        return reducer(a.flight.legs) - reducer(b.flight.legs);
      });

      return sorted;
    } else {
      let sorted = [...array].sort((a, b) => {
        return sortType === "desc"
          ? a.flight.price.totalFeeAndTaxes.amount -
              b.flight.price.totalFeeAndTaxes.amount
          : b.flight.price.totalFeeAndTaxes.amount -
              a.flight.price.totalFeeAndTaxes.amount;
      });
      return sorted;
    }
  };

  const handleFilter = (array) => {
    if (filter.active === null) {
      return array;
    } else {
      const filtred = [...array].filter((el) => {
        if (filter.active === "noTransfer") {
          return (
            el.flight.legs[0].segments.length === 1 &&
            el.flight.legs[1].segments.length === 1
          );
        } else if (filter.active === "oneTransfer") {
          return (
            el.flight.legs[0].segments.length === 2 &&
            el.flight.legs[1].segments.length === 2
          );
        }
        return true;
      });
      return filtred;
    }
  };

  const priseLimit = (array) => {
    if (range.max <= 0 || range.min < 0) {
      return array;
    } else {
      const filtered = [...array].filter((el) => {
        return (
          parseFloat(el.flight.price.totalFeeAndTaxes.amount) >= range.min &&
          parseFloat(el.flight.price.totalFeeAndTaxes.amount) <= range.max
        );
      });
      return filtered;
    }
  };

  const sortedAndFiltered = useMemo(() => {
    const filtered = handleFilter(flights);
    const limited = priseLimit(filtered);
    const sorted = handleSort(limited);
    return sorted;
  }, [flights, filter, sortType, range]);

  useEffect(() => {
    fetch("./flights.json")
      .then((res) => res.json())
      .then((data) => {
        setFlights(data.result.flights);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <div className="flex flex-row w-full">
        <SortingFlights
          toggleFilter={toggleFilter}
          toggleSortType={toggleSortType}
          handleRange={handleRange}
          sortType={sortType}
          filter={filter}
          range={range}
        />
        <Ticket flights={sortedAndFiltered} />
      </div>
    </>
  );
}

export default App;
