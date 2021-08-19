import React from "react";

const TableHeader = ({ labels }) => {
  return (
    <thead className="w-full">
      <tr className="table-header">
        {labels.map((e, i) => (
          <th className={e.class} key={e.label + i}>
            {e.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
