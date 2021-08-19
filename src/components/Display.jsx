import React, { useState } from "react";
import Launch from "./Launches/Launch";
import Table from "./Table/index";
import Pagination from "./Pagination/Pagination";

const Display = ({ info, status, total, perPage, paginate,date }) => {
  const [details, setDetails] = useState([]);
  const [labels] = useState([
    {
      label: "No:",
      class: "w-1 px-6 py-3 text-xs text-center tracking-wider",
    },
    {
      label: "Launched (UTC)",
      class: "w-1/4 px-6 py-3 text-xs text-center tracking-wider",
    },
    {
      label: "Location",
      class: "w-1/4 pl-12 pr-6 py-3 text-xs text-center tracking-wider",
    },
    {
      label: "Mission",
      class: "w-3/4 px-10 py-3 text-xs text-center tracking-wider",
    },
    {
      label: "Orbit",
      class: "w-1/2 px-8 py-3 text-xs text-center tracking-wider text-right",
    },
    {
      label: "Launch Status",
      class: "w-1/2 px-6 py-3 text-xs text-center tracking-wider",
    },
    {
      label: "Rocket",
      class: "w-1/2 px-8 py-3 text-xs text-center tracking-wider",
    },
  ]);
  const [selected, setSelected] = useState(false);

  const launchDetails = (id) => {
    info.map((key, index) => {
      if (id === index) {
        setDetails(id);
        setSelected(true);
      }
      return key;
    });
  };

  return (
    <div>
      <Table
        info={info}
        status={status}
        launchDetails={launchDetails}
        setSelected={setSelected}
        labels={labels}
        date={date}
      />
      {(status === "all" || status === "success") && (
        <Pagination perPage={perPage} totalLaunch={total} paginate={paginate} />
      )}
      {selected && (
        <Launch info={info} details={details} setSelected={setSelected} />
      )}
    </div>
  );
};

export default Display;
