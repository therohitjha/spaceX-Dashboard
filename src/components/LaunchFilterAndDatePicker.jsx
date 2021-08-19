import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";
const LaunchFilterAndDatePicker = ({
  handleChange,
  launches,
  calender,
  setCalender,
  overlay,
  setOverlay,
  dateList,
  date,
  setDate,
}) => {
  return (
    <div className="container relative mt-10 flex justify-between">
      {overlay && (
        <div className="overlay">
          <div className="modal" style={{ width: "60%", padding: "10px" }}>
            <div className={"calender--container"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "25px",
                }}
              >
                {dateList.map((e, i) => (
                  <span
                    key={e.label + i}
                    style={{ padding: "5px", cursor: "pointer" }}
                    onClick={() => {
                      setDate(e.label);
                      setOverlay(false);
                      setCalender();
                    }}
                  >
                    {e.label}
                  </span>
                ))}
              </div>
              <div className="calender">
                <Calendar
                  onChange={(e) => {
                    setCalender(e);
                    setOverlay(false);
                    setDate();
                  }}
                  value={calender}
                  showDoubleView={true}
                  showFixedNumberOfWeeks={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-3 inline-flex">
        {!overlay && (
          <select
            className="h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none"
            onClick={() => setOverlay(true)}
          >
            {date || calender ? (
              date ? (
                <option>{new Date(date).toLocaleDateString()}</option>
              ) : (
                <option>{new Date(calender).toLocaleDateString()}</option>
              )
            ) : (
              <option>Select Date</option>
            )}
          </select>
        )}
      </div>

      <div className="pt-3 inline-flex">
        <i className="ri-filter-line ri-2x" />
        <select
          className="h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none"
          onChange={(e) => handleChange(e.target.value)}
        >
          {launches.map((e, i) => (
            <option value={e.value} key={e.value + i}>
              {e.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LaunchFilterAndDatePicker;
