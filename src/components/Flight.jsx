import { AccessTime, ArrowRightAlt } from "@mui/icons-material";
import moment from "moment";

function Flight({ ticket, leg }) {
  const { segments, duration } = ticket.flight.legs[leg];

  const arrivalTime = moment(segments[segments.length - 1].arrivalDate).format(
    "DD MMM ddd HH:mm "
  );

  const departureTime = moment(segments[0].departureDate).format(
    "HH:mm DD MMM ddd"
  );

  return (
    <div className="w-full">
      {leg === 0 && (
        <div className="flex flex-row justify-between px-3 py-1 bg-sky-600">
          <div>img</div>
          <div className="text-white">
            <h3 className="flex justify-end">
              {Math.trunc(ticket.flight.price.totalFeeAndTaxes.amount)} Р
            </h3>
            <p className="flex justify-end">
              Стоимость для одного взрослого пассажира
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-start p-2">
        <h4>
          {`${segments[0].departureCity?.caption}, ${segments[0].departureAirport?.caption}`}
        </h4>
        <h4 className="text-sky-600">({segments[0].departureAirport.uid})</h4>{" "}
        <ArrowRightAlt className="text-sky-600 mx-2" />
        <h4>
          {`${segments[segments.length - 1].arrivalCity.caption}, ${
            segments[segments.length - 1].arrivalAirport.caption
          }`}
        </h4>
        <h4 className="text-sky-600">
          ({segments[segments.length - 1].arrivalAirport.uid})
        </h4>
      </div>
      <hr className="bg-gray-300 h-px "></hr>
      <div className="flex justify-between p-2">
        <h5>{departureTime}</h5>
        <h5>
          <AccessTime className="mx-2" />
          {moment.utc(duration * 60 * 1000).format("H ч mm мин")}
        </h5>
        <h5>{arrivalTime}</h5>
      </div>
      <div className="flex flex-row justify-center items-center">
        <hr className="bg-gray-400 h-0.5 w-1/3 "></hr>
        {segments.length > 1 && (
          <p className="text-orange-400 px-2">
            {segments.length - 1} пересадка
          </p>
        )}
        <hr className="bg-gray-400 h-0.5 w-1/3"></hr>
      </div>

      <h5 className="p-2">Рейс выполняет: {segments[0].airline.caption} </h5>
      {leg === 0 && <hr className="bg-sky-600 h-0.5 "></hr>}
    </div>
  );
}

export default Flight;
