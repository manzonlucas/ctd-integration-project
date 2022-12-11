import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../../classes.css";

export default function Calendar({
  isCalendarVisible,
  handleDateChange,
  date,
}) {
  return (
    <div className={isCalendarVisible ? "display-block" : "display-none"}>
      <DateRange
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        ranges={date}
        months={window.innerWidth > 414 ? 2 : 1}
        direction="horizontal"
        rangeColors={["#545776"]}
        color="#545776"
        minDate={new Date()}
        className="dateRangeInput"
      />
    </div>
  );
}
