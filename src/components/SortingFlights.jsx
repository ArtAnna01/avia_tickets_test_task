function SortingFlights({
  sortType,
  toggleSortType,
  filter,
  toggleFilter,
  range,
  handleRange,
}) {
  return (
    <>
      <div className="mt-8 mx-6 w-1/5 ">
        <div className="mb-7">
          <h6>Сортировать</h6>
          <p>
            <input
              type="radio"
              name="desc"
              checked={sortType === "desc"}
              value={"по возрастанию пути"}
              className="text-slate-500 mx-1"
              onChange={(e) => toggleSortType(e)}
            />
            - по возрастанию цены
          </p>
          <p>
            <input
              type="radio"
              name="asc"
              checked={sortType === "asc"}
              value={"по убыванию цены"}
              className="text-slate-500 mx-1"
              onChange={(e) => toggleSortType(e)}
            />
            - по убыванию цены
          </p>
          <p>
            <input
              type="radio"
              name="time"
              checked={sortType === "time"}
              value={"по врмемени пути"}
              className="text-slate-500 mx-1"
              onChange={(e) => toggleSortType(e)}
            />
            - по врeмени пути
          </p>
        </div>
        <div className="mb-7">
          <h6>Фильтровать</h6>
          <p>
            <input
              type="checkbox"
              name="oneTransfer"
              checked={filter.active === "oneTransfer"}
              className="text-slate-500 mx-1"
              onChange={(e) => toggleFilter(e)}
            />
            - 1 пересадка
          </p>
          <p>
            <input
              type="checkbox"
              name="noTransfer"
              checked={filter.active === "noTransfer"}
              className="text-slate-500 mx-1"
              onChange={(e) => toggleFilter(e)}
            />
            - без пересадок
          </p>
        </div>
        <div className="mb-7">
          <h6>Цена</h6>
          <p className="text-slate-500  mb-2">
            От
            <input
              type="number"
              name="min"
              value={range.min}
              onChange={(e) => handleRange(e)}
              className="border-solid border-black border-[1px] rounded mb-3 ml-1"
            />
          </p>
          <p className="text-slate-500">
            До
            <input
              type="number"
              name="max"
              value={range.max}
              onChange={(e) => handleRange(e)}
              className="border-solid border-black border-[1px] rounded ml-1"
            />
          </p>
        </div>
        <div className="mb-7">
          <h6>Авиакомпания</h6>
          <p>
            <input type="checkbox" name="avia" /> - LOT Polish Airlines от 21049
            р.
          </p>
          <p>
            <input type="checkbox" name="avia" /> - Аэрофлот - российские
            авиалинии от 31733 р.
          </p>
        </div>
        <button className="border-solid  border-[1px]  px-4 py-1 w-full bg-sky-600 text-white">
          Поиск
        </button>
      </div>
    </>
  );
}

export default SortingFlights;
